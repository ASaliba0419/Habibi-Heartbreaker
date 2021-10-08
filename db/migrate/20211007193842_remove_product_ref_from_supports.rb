class RemoveProductRefFromSupports < ActiveRecord::Migration[6.1]
  def change
    remove_column(:supports, :product_id)
  end
end
