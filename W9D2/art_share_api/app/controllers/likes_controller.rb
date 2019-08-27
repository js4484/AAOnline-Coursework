class LikesController < ApplicationController
    
    def index
        if params.has_key?(:artwork_id)
            render json: Artwork.find(params[:artwork_id]).user_likes
        elsif params.has_key?(:comment_id)
            render json: Comment.find(params[:comment_id]).user_likes
        elsif params.has_key?(:user_id)
            a = User.find(params[:user_id]).liked_artworks
            b = User.find(params[:user_id]).liked_comments
            render json: a + b
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

      
end