class CommentsController < ApplicationController
  def index
    if params.has_key?(:user_id)
      # index of nested resource
      render json: Comment.comment_to_view(params[:user_id])
    elsif params.has_key?(:artwork_id)
      render json: Comment.artwork_comment(params[:artwork_id])
    else
      render json: Comment.all
    end
  end



  def create
    comment = Comment.new(comment_params)
    if comment.save
      render json: comment
    else
      render json: comment.errors.full_messages, status: 422
    end
  end

  def destroy
    comment = Comment.find(params[:id])
    comment.destroy
    render json: comment
  end

  private
  def comment_params
    params.require(:comment).permit(:artwork_id, :user_id, :body)
  end

end