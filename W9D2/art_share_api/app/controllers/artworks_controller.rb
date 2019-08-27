class ArtworksController < ApplicationController
  def index
    
    if params.has_key?(:user_id)
      # index of nested resource
      render json: Artwork.art_to_view(params[:user_id])
    else
      render json: Artwork.all
    end
  end

  def create
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end
  end

  def show
    render json: Artwork.find(params[:id])
  end

  def update
    artwork = Artwork.find(params[:id])

    if artwork.update(artwork_params)
      render json: artwork
    else
      render json: artwork.errors.full_messages, status: 422
    end
  end

  def destroy
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  private
  def artwork_params
    params.require(:artwork).permit(:artist_id, :title, :image_url)
  end
end 