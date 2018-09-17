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
    @user = User.includes(:actual_friends).find_by(id: params[:friendId])
    render :show
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
