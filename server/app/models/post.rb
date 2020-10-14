class Post < ApplicationRecord
    belongs_to :user
    validates :user_id, presence: true
    validates :title, presence: true, allow_nil: false
end