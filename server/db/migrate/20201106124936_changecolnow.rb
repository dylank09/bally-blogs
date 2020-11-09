class Changecolnow < ActiveRecord::Migration[6.0]
  def change
    change_column :posts, :username, :string, :null => false
  end
end
