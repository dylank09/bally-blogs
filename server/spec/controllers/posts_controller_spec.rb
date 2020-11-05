require 'rails_helper'
require 'support/utilities.rb'

describe "get all posts route", :type => :request do
    let!(:posts) { 
        @post = Post.create ({"title":"Title", "body":"Body", "user_id":"1"})
    }
    
    before { get '/posts' }
    it 'returns all posts' do
        expect(response).to have_http_status(:success)
    end

    it 'should have title as "Title"' do
        expect(@post.title).to eq("Title")
    end

    it 'should have body as "Body"' do
        expect(@post.body).to eq("Body")
    end

    it 'should have user id as "1"' do
        expect(@post.user_id).to eq(1)
    end

end
