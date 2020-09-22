class Post < ApplicationRecord
    belongs_to :user, class_name: "User", foreign_key: :user_id, required: false  #remove required? 

    scope :not_deleted, -> { where(:soft_delete => nil)}   #Scope for the active posts.


    def soft_delete_f
        update(soft_delete: DateTime.current)  #soft delete the post
    end

    def undo_delete
        update(soft_delete: nil)  #undo the soft delete
    end

end
