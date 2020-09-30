module Api
    module V1

        class PostsController < ApplicationController

            def index
                posts = Post.not_deleted.order("created_at DESC");
                render json: {status: "SUCCESS", message: "Loaded posts", data: posts}, status: :ok
            end
        
            
        end
    end
end