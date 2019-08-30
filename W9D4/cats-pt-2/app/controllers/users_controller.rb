class UsersController < ApplicationController


    def new
        @user = User.new
        render :new
    end

    def create
        @user = User.new(user_params)
        if @user.save
            session[:session_token] = @user.session_token
            flash[:success] = "yay, welcome new homie"
            redirect_to cats_url 
        else
            flash.now[:errors] = "your info has been borked, likely human error; please try again XD"
            render :new, status: 422
        end
    end

    private 
    def user_params 
        params.require(:user).permit(:username, :password)
    end


    
    
end