class Changecolsd < ActiveRecord::Migration[6.0]
  def up
    remove_column :posts, :user_id
  end

  def down
    add_column :posts, :username, :string
  end
end
