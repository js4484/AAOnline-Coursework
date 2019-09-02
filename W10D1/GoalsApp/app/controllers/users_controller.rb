class UsersController < ApplicationController
  def new
    render :new
  end

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    
    if @user.save
      redirect_to users_url
    else
      render :new, status: 422
    end
  end

  def destroy
    @user = User.find_by_credentials(:email, :password)
    
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
  end
end
