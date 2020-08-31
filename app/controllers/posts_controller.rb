class PostsController < ApplicationController


    def new
        @post = Post.new
    end

    def create
        @post = Post.new(post_params)
        if @post.save 
            # flash.now[:notice] = "success"
            render plain: "Success! Your post was created." #replace with: redirect_to @post, notice: "success...." when the other stuff is made
        else
            render 'new'
        end
    end


    private

    def post_params
        params.require(:post).permit(:title, :content)
    end


end