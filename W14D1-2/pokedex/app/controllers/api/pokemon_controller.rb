class Api::PokemonController < ApplicationController
   def index
        @pokemon = Pokemon.all
        
        render :index
    end

    def show
        @poke = Pokemon.find_by(id: params[:id])

        render :show

    end

    def create
        @pokemon = Pokemon.new

        render :create
        
    end
end
