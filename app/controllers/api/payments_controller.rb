class Api::PaymentsController < ApplicationController
  def create
    full_payment_params = payment_params
    full_payment_params[:bill_id] = params[:bill_id]
    full_payment_params[:type] = debt_or_credit(params[:payment][:amount_cents])
    @payment = Payment.new(full_payment_params)
    if @payment.save
      render :show

    else
      render json: @payment.errors.full_messages, status: 422
    end
  end

  def destroy
    @payment = Payment.find_by(id: params[:id])
    if @payment
      @payment.destroy
      render json: @payment
    else
      render json: ['No such payment'], status 404
    end
  end

  # def show
  #   @payment = Payment.includes(:user, :bill).find_by(id: params[:id])
  #   render :show
  # end

  # def index
  #   @payments = Payment.includes(:user, :bill).find_by()
  #   # @bills = Bill.includes(:creator, :payments, :participants).find_by(creator_id: current_user.id)
  #   # render :index
  # end

  # def update
    # @bill = Bill.includes(:creator, :payments, :participants).find_by(id: params[:id])
    # if @bill.update(bill_params)
    #   @bill.payments.each do |payment|
    #     payment.destroy
    #   end
    #   make_payments(params[:bill][participants])
    #   render :show
    # else
    #   render json: @bill.errors.full_messages, status: 422
    # end
  # end

  private

  def payment_params
    params.require(:payment).permit(:user_id, :amount_cents)
  end

  # def make_payments(participants)
  #   @payments = []
  #   params[:bill][:participants].each do |participant|
  #     debt_or_credit = participant[1] > 0 ? 'credit' : 'debt'
  #     payment = Payment.new(user_id: participant[0], amount_cents: participant[1], bill_id: @bill.id, type: debt_or_credit)
  #     if (payment.save)
  #       @payments << payment
  #     else
  #       @payments << payment.errors.messages
  #     end
  #   end
  # end
end
