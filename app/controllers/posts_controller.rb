class PostsController < ApplicationController

    before_action :authenticate_user!, only: [:new, :create] #user cannot access post creation page without being authenticated

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
        @posts = Post.all.order("created_at DESC")   #orders by date created at. newest first
    end

    def show
        @post = Post.find(params[:id])
    end

    def edit 
        @post = Post.find(params[:id])
        unless current_user == @post.user
            redirect_to @post, notice: "You are not authorised to edit this post."
         end

    end

    def update
        @post = Post.find(params[:id])
        if @post.update_attributes(params.require(:post).permit(:content, :title))
            redirect_to @post, notice: "Your post was successfully updated."
        else
            render 'edit'
        end
    end

    def destroy
        puts "hello"
        @post = Post.find(params[:id])

        unless current_user == @post.user
            redirect_to @post, notice: "You are not authorised to delete this post."
        end
        

    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :user) #post can only be made with these parameters
    end


end
