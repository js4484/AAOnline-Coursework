class CatsController < ApplicationController
    def index
        @kitty = Cat.all
        render :index
    end

    def show
        @kitty = Cat.find(params[:id])
        render :show
    end
    
    def new 
        @kitty = Cat.new
        render :new
    end

    def create 

        
        render :new 
    end


    private
    def cat_params
        params.require(:cat).permit(:birth_date, :name, :color, :sex, :description)
    end
end