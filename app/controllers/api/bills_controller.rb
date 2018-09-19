class Api::BillsController < ApplicationController
  def create
    full_bill_params = bill_params
    full_bill_params[:creator_id] = current_user.id
    @bill = Bill.new(full_bill_params)
    if @bill.save
      make_payments(@bill.id, params[:bill][:participants])
      render :show
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  def destroy
    @bill = Bill.find_by(id: params[:id])
    unless @bill
      return render json: ['No such bill'], status: 404
    end
    if current_user.id == @bill.creator_id
      @bill.destroy
      render json: @bill
    else
      render json: ['No access to this action!'], status: 422
    end
  end

  def index
    @bills = Bill.includes(:creator, :payments, :participants).find_by(creator_id: current_user.id)
    render :index
  end

  def show
    @bill = Bill.includes(:creator, :payments, :participants).find_by(id: params[:id])
    render :show
  end

  def update
    @bill = Bill.includes(:creator, :payments, :participants).find_by(id: params[:id])
    if @bill.update(bill_params)
      @bill.payments.each do |payment|
        payment.destroy
      end
      make_payments(params[:bill][participants])
      render :show
    else
      render json: @bill.errors.full_messages, status: 422
    end
  end

  private

  def bill_params
    params.require(:bill).permit(:category, :balance_cents, :description)
  end

  def make_payments(bill_id, participants)
    payments = []
    participants.each do |participant|
      payment = Payment.new(user_id: participant[1][0], amount_cents: participant[1][1], bill_id: bill_id)
      if (payment.save)
        payments << payment
      else
        payments << payment.errors.messages
      end
    end

    return payments
  end
end
