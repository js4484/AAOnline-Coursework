class UsersController < ApplicationController
    def index
        if params[:query]
            render json: User.where('users.username LIKE ?', params[:query])
        else
            render json: User.all
        end 
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: params
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def show
        render json: User.find(params[:id])
    end

    def update
        user = User.find(params[:id])

        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: 422
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end

    private
    def user_params
        params.require(:user).permit(:username)
    end
end 