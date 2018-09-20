class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def destroy
    if current_user.id == params[:id]
      @user = User.find_by(id: params[:id])
      @user.destroy
      render json: @user
    else
      render json: ['No access to this action!'], status: 422
    end
  end

  def show
    @user = User.includes(:actual_friends, :payments, :bills, :created_bills).find_by(id: params[:friendId])
    if @user
      @bills = @user.bills
      render :show
    else
      render json: 'No User Found', status: 404
    end
  end

  def index
    @user = User.includes(:actual_friends).find_by(id: current_user.id)
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
