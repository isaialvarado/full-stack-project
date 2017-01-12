class Api::SessionsController < ApplicationController
  def new
  end

  def create
    @user = User.find_by_credentials(session_params[:username], session_params[:password])

    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 422
    end
  end

  def destroy
    if logged_in?
      logout
      render json: {}
    else
      render json: ["Not Logged In"], status: 404
    end
  end

  private

  def session_params
    params.require(:user).permit(:username, :password, :email)
  end
end
