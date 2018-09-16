class Api::FriendsController < ApplicationController
  def create
    @friendship = Friend.new(
      friend_id: params[:id],
      user_id: current_user.id
    )
    if @friendship.save
      render json: @friendship
    else
      render json: @friendship.errors.full_messages, status: 422
    end
  end

  def destroy
    @friendship = Friend.find_by(user_id: current_user.id, friend_id: params[:id])
    @friendship.destroy

    render json: @friendship
  end

end
