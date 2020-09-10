class Post < ApplicationRecord
    belongs_to :user, class_name: "User", foreign_key: :user_id, required: false  #remove required? 
end
