require 'rails_helper'
require 'application_controller.rb'

describe "tests users", :type => :request do
    
    before { 
        @user = User.create({
            "username":"coolio35", "email":"coolio35@mail.com", 
            "password":"coolio3535", 
            "password_confirmation":"coolio3535"
        })
    }   
    it 'should create and log in user' do
        expect(logged_in?).to eq(true)
    end

    it 'should log out the user' do
        expect(current_user)
    end

end