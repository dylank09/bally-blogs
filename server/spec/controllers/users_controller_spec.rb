require 'rails_helper'
require 'support/utilities.rb'

describe "tests users", :type => :request do
    
    let!(:users) { 
        @user = User.create({
            "username":"coolio35", "email":"coolio35@mail.com", 
            "password":"coolio3535", 
            "password_confirmation":"coolio3535"
        })
    }   
    it 'should be the first user' do
        expect(@user.id).to eq(1);
    end

    it 'should log out the user and not add a user id to post' do
        @user.destroy;
        @post = Post.create ({"title":"Title", "body":"Body"});
        expect(@post.user_id).not_to eq(1);
    end

end