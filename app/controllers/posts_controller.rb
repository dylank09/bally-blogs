class PostsController < ApplicationController

    before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy] #user cannot access post creation page without being authenticated

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
        @posts = Post.not_deleted.order("created_at DESC")   #Orders by date created at with newest first. 
                                                             #Only show the ones in the scope "not_deleted"
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
        @post = Post.find(params[:id])   #find the post

        unless current_user == @post.user
            redirect_to @post, notice: "You are not authorised to delete this post."
        end

        if @post.soft_delete == nil     #if the post is not deleted, it is equal to nil.
            @post.soft_delete_f
        elsif @post.soft_delete != nil   #if the post is deleted and this action was called then it will undo the delete.
            @post.undo_delete
        end

    end

    private

    def post_params
        params.require(:post).permit(:title, :content, :user) #post can only be made with these parameters
    end


end
