class Product < ApplicationRecord
  has_many :supports
  belongs_to :user
end
