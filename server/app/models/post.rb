class Post < ApplicationRecord
    belongs_to :user
    validates :username, presence: true
    validates :title, presence: true, allow_nil: false
    scope :not_deleted, -> { where(:soft_delete => nil)}

    def soft_delete_post
        update(soft_delete: DateTime.current)  #soft delete the post
    end
end
