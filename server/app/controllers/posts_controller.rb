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
    
        if logged_in?
            @post = Post.new(post_params)
            @post.user_id = current_user.id
            if @post.save
                render json: {
                status: :created,
                message: "post was created",
                data: @post
            }
            else 
            render json: {  
                status: 500,
                errors: ['post not created']
            }
            end
        else
            render json: {
                status: 500,
                errors: ['user not logged in']
            }
        end
    end

    # def edit 
    #     @post = Post.find(params[:id])
    #     unless current_user.id == @post.user_id
    #         render json: {
    #             status: 500,
    #             errors: "user not authorised to edit post"
    #         }
    #     end
    # end

    # def update
    #     @post = Post.find(params[:id])
    #     if @post.update_attributes(params.require(:post).permit(:content, :title))
    #         if @post.save
    #             render json: {
    #                 status: :success,
    #                 message: "post was updated",
    #                 data: @post
    #             }
    #         else 
    #             render json: {
    #                 status: 500,
    #                 errors: ['post not updated']
    #             }
    #         end
    #     end
    # end

    # def destroy
    #     @post = Post.find(params[:id])   #find the post

    #     unless current_user == @post.user
    #     end

    #     if @post.soft_delete == nil     #if the post is not deleted, it is equal to nil.
    #         @post.soft_delete_f         #then delete it
    #     end
    # end

    private
      
    def post_params
        params.require(:post).permit(:title, :body)
    end

end