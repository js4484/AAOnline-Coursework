class PostsController < ApplicationController
  before_action :require_signed_in
  def new
        @post = Post.new

        render :new
    end

    def create
        @post = Post.new(post_params)
        @post.author_id = current_user.id
        # debugger
        if @post.save
            redirect_to post_url(@post)
        else
            flash.now[:error] = @post.errors.full_messages
            render :new
        end
    end

    def show
        @post = Post.find_by(id: params[:id])

        render :show
    end


    def update
        @post = current_user.posts.find_by(id: params[:id])

        if @post
            @post.update_attributes(post_params)
            redirect_to post_url(@post)
        end
    end

    def edit
        @post = current_user.posts.find_by(id: params[:id])
    end
    
    def destroy
        @post = current_user.posts.find_by(id: params[:id])
        @post.destroy
        redirect_to sub_url(@post.sub)
    end

    private

    def post_params
        params.require(:post).permit(:url, :title, :content, :sub_id)
    end

end
