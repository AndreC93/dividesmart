class Api::FriendsController < ApplicationController
  def create
    debugger;
    @friend = Friend.new(friend_id: friend_params, user_id: params[:user_id])
    if @friend.save
      render json: @friend
    else
      render json: @friend.errors.full_messages, status: 422
    end
  end

  def destroy
    @friend = Friend.find_by(user_id: params[:user_id], friend_id: friend_params)
    @friend.destroy

    render json: @friend
  end

  def show
    @user = User.find_by(id: friend_params)
    render partial: 'api/users/user.json.jbuilder'
  end

  def index
    @friends = Friend.find_by(user_id: params[:user_id]).include(:friends)

    render json: @friends
  end

  private

  def friend_params
    params.require(:friend).permit(:id)
  end

end
