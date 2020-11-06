class PostsController < ApplicationController
    
    def index
        posts = Post.not_deleted.order("created_at DESC");
        if posts
          render json: {
            status: :success,
            data: posts
          }
        else
          render json: {
            status: 500,
            errors: ['no posts found']
          }
        end
    end

    def show
        post = Post.find(params[:id])
       if post
          render json: {
            status: :success,
            data: post
          }
        else
          render json: {
            status: 500,
            errors: ['post not found']
          }
        end
    end
      
    def new 
        @post = Post.new
    end

    def create
        if logged_in?
            @post = Post.new(post_params)
            @post.user_id = current_user.id
            @post.username = current_user.username
            if @post.save!

              render json: {
              status: :created,
              message: "Post was created.",
              data: @post
              }, :status => :created
            
            else 
              render json: {  
                  status: 500,
                  errors: ['Post was not created.', :error]
              }, :status => 500
            end
        else
            render json: {
                status: 500,
                errors: ['User not logged in.']
            }, :status => 500
            
        end
    end

    def destroy
      @post = Post.find(params[:id])   #find the post

      unless current_user == @post.user
        render json: {
          status: 500,
          errors: ['User is not authorised to delete this post.']
        }, :status => 500
      end

    end

    private
      
    def post_params
        params.require(:post).permit(:title, :body, :username)
    end

end