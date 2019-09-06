class SubsController < ApplicationController
    
    def new
        @sub = Sub.new

        render :new
    end

    def create
        @sub = Sub.new(sub_params)
        @sub.moderator_id = current_user.id
        if @sub.save
            redirect_to sub_url(@sub)
        else
            flash.now[:error] = @sub.errors.full_messages
            render :new
        end
    end

    def show
        @sub = Sub.find_by(id: params[:id])

        render :show
    end

    def index
        @subs = Sub.all

        render :index
    end

    def update
        @sub = current_user.subs.find_by(id: params[:id])

        if @sub
            @sub.update_attributes(sub_params)
            redirect_to sub_url(@sub)
        end
    end

    def edit
        @sub = current_user.subs.find_by(id: params[:id])

    end
    
    def destroy
        @sub = current_user.subs.find_by(id: params[:id])
        @sub.destroy
        redirect_to user_url(current_user)
    end
    
    private

    def sub_params
        params.require(:sub).permit(:title, :description)
    end
    
end
