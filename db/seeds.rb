Support.destroy_all

Product.destroy_all

User.destroy_all


@user = User.create!(
  first_name: "Andrew",
  email: "andrew@email.com",
  password: "123456"
)

puts "#{User.count} users created!"

@tshirt1 = Product.create!(
  name: "Brown T-Shirt",
  price: 25,
  size: "S, M, L, XL",
  description: "Cool Brown Habibi Heartbreaker T-Shirt!",
  image: "img not found",
  category: "Shirts",
  user: @user
)

@tshirt2 = Product.create!(
  name: "Orange T-Shirt",
  price: 25,
  size: "S, M, L",
  description: "Cool Orange Habibi Heartbreaker T-Shirt!",
  image: "img not found",
  category: "Shirts",
  user: @user
)

puts "#{Product.count} products created!"

@support1 = Support.create!(
  image: "img not found",
  description: "Awesome T-Shirt, I support the cause!",
  user: @user,
  product: @tshirt1
)

puts "#{Support.count} supports created!"
