class ChangeUserIdColumnOnPost < ActiveRecord::Migration[6.0]
  def change
    change_column :posts, :user_id, :integer, :null => false
  end
end
