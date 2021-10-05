class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.integer :price
      t.string :size
      t.string :description
      t.string :image
      t.string :category
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
