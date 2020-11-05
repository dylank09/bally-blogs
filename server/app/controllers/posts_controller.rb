class PostsController < ApplicationController
    
    def index
        posts = Post.all.order("created_at DESC");
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
      sleep 2
        if logged_in?
            @post = Post.new(post_params)
            @post.user_id = current_user.id
            if @post.save
                render json: {
                status: :created,
                message: "post was created",
                data: @post
            }, :status => :created
            
            else 
            render json: {  
                status: 500,
                errors: ['post not created']
            }, :status => 500
            end
        else
            render json: {
                status: 500,
                errors: ['user not logged in']
            }, :status => 500
            
        end
    end

    private
      
    def post_params
        params.require(:post).permit(:title, :body)
    end

end