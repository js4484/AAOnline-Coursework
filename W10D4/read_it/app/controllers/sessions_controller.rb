class SessionsController < ApplicationController

    def new
        # debugger
        render :new
    end

    def create
        user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if user
            sign_in(user)
            flash[:success] = "Welcome back read-it-or"
            redirect_to user_url(user)
        else
            flash.now[:error] = "Nuh uh, honey"
            render :new
        end
    end

    def destroy
        sign_out
        redirect_to new_session_url
    end



end
