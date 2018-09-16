class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
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
    @user = User.find_by(id: params[:id]).include(:actual_friends)
    render json: :show
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
