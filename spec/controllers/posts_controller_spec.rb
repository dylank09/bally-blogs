require 'rails_helper'
require 'devise'


describe PostsController do
  it "should render post#show template" do
    user = User.create( { "first_name": "Fred", "last_name": "Freddy", "email": "fredddy@gmail.com", "password": "fred123"})
    post = Post.create({ "title": "post title", "content": "content", "user_id": user.id})
    sign_in user
    get :show, params: {"id": post.id}
    expect(response).to render_template(:show)
  end


end


