class PostsController < ApplicationController

    before_action :authenticate_user! #user cannot access post creation page without being authenticated

    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        @post.user_id = current_user.id
        if @post.save 
            redirect_to @post, notice: "Your post was successfully created!"
        else
            render 'new'
        end
    end

    def index
        @posts = Post.all
    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :user) #post can only be made with these parameters
    end


end