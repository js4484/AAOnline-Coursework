class UsersController < ApplicationController
before_action :require_signed_in, except: [:new, :create]
  def new 
    render :new
  end
   

  def create 
    user = User.new(user_params)
    
    if user.save 
      flash[:success] = "Welcome New User"
      sign_in(user)
      redirect_to user_url(user.id)
    else
      flash.now[:error] = user.errors.full_messages
      render :new, status: 422
    end
  end 

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end 

  def destroy 
    user = User.find_by(id: params[:id])
    user.destroy
    flash[:success] = "Boi Bye"
    redirect_to new_users_url
  end 

  private 
  def user_params 
    params.require(:user).permit(:username, :password)
  end 

end
