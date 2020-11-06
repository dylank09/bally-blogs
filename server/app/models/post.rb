class Post < ApplicationRecord
    belongs_to :user
    validates :username, presence: true
    validates :title, presence: true, allow_nil: false
    scope :not_deleted, -> { where(:soft_delete => nil)}
end
