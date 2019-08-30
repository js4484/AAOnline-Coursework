class SessionsController < ApplicationController

    def new 
        render :new
    end

    def create
        user = User.find_by(params[:username], params[:password])
        if user
            session[:session_token] = user.reset_session_token!
            flash[:success] = "oh haaaaaayyyyyyyyyyyy, welcome back!"
            redirect_to cats_url
        else

            flash.now[:errors] = "Nuh uh, hunnnnnny, try again"
            render :new, status: 402
        end

    end

    def destroy

    end
end