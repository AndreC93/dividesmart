class ApplicationController < ActionController::Base
  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def find_by_username_or_email(username_or_email)
    if (username_or_email.include?('@') && username_or_email.include?('.'))
      user = User.find_by(email: username_or_email)
    else
      user = User.find_by(username: username_or_email)
    end

    user ? user.id : nil
  end

end
