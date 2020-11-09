class AddSoftDeleteToPosts < ActiveRecord::Migration[6.0]
  def change
    add_column :posts, :soft_delete, :datetime
  end
end
