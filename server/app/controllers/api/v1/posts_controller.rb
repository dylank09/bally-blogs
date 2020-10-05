module Api
    module V1

        class PostsController < ApplicationController

            #before_action :authenticate_user!, only: [:new, :create, :edit, :update, :destroy] #user cannot access post creation page without being authenticated

            def index
                posts = Post.not_deleted.order("created_at DESC");
                render json: {status: "SUCCESS", message: "Loaded posts", data: posts}, status: :ok
            end
        
            def show
                begin
                    post = Post.find(params[:id])
                    render json: {status: "SUCCESS", message: "Loaded post", data: post}, status: :ok
                rescue ActiveRecord::RecordNotFound
                    render json: {status: "ERROR", message: "Post not found", data: "Post does not exist"}, status: :unprocessable_entity
                end
            end
        end
    end
end