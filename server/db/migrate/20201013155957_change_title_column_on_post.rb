class ChangeTitleColumnOnPost < ActiveRecord::Migration[6.0]
  def change
    change_column :posts, :title, :string, :null =>  false
  end
end
