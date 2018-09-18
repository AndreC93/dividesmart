class Api::FriendsController < ApplicationController
  def create
    friendships = params['usernamesAndEmails'].map do |username_or_email|
      Friend.new(
        friend_id: find_by_username_or_email(username_or_email),
        user_id: current_user.id
      )
    end

    @savedFriends = []
    @unsavedFriends = []

    friendships.each do |friendship|
      if friendship.save
        @savedFriends << friendship.friend_id
      else
        @unsavedFriends << [friendship.friend_id, friendship.errors.full_messages]
      end
    end

    render json: [@savedFriends, @unsavedFriends]
  end

  def destroy
    @friendship = Friend.find_by(user_id: current_user.id, friend_id: params[:id])
    @friendship.destroy

    render json: @friendship.friend_id if @friendship
  end

end
