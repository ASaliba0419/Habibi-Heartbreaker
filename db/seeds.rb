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
  name: "Black T-Shirt",
  price: 25,
  size: "S M L XL",
  description: "Cool Black Habibi Heartbreaker T-Shirt!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Shirts/chrome_datYAF5ZBv_chq5ih.png",
  category: "Shirts",
  user: @user
)

@tshirt2 = Product.create!(
  name: "Orange T-Shirt",
  price: 25,
  size: "S M L XL",
  description: "Cool Orange Habibi Heartbreaker T-Shirt!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Shirts/chrome_pBcWVqfgtH_ojasgh.png",
  category: "Shirts",
  user: @user
)

@tshirt3 = Product.create!(
  name: "Red T-Shirt",
  price: 25,
  size: "S M L XL",
  description: "Cool Red Habibi Heartbreaker T-Shirt!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Shirts/chrome_66wOeIqzV1_stztvz.png",
  category: "Shirts",
  user: @user
)

@tshirt4 = Product.create!(
  name: "Green T-Shirt",
  price: 25,
  size: "S M L XL",
  description: "Cool Green Habibi Heartbreaker T-Shirt!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Shirts/chrome_2fo3XoDs0E_i1a5gq.png",
  category: "Shirts",
  user: @user
)

@tshirt5 = Product.create!(
  name: "Sand T-Shirt",
  price: 25,
  size: "S M L XL",
  description: "Cool Sand Habibi Heartbreaker T-Shirt!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Shirts/chrome_44q7dJ11xI_sxvcu6.png",
  category: "Shirts",
  user: @user
)

@hoodie1 = Product.create!(
  name: "Dark Grey Hoodie",
  price: 50,
  size: "S M L XL",
  description: "Cool Dark Grey Habibi Heartbreaker Hoodie!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Hoodies/chrome_a7HHAEWyLD_wsaygg.png",
  category: "Hoodies",
  user: @user
)

@hoodie2 = Product.create!(
  name: "Black Hoodie",
  price: 50,
  size: "S M L XL",
  description: "Cool Black Habibi Heartbreaker Hoodie!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464525/Habibi%20Heartbreaker/Hoodies/chrome_R75Xig18pF_cvh7lc.png",
  category: "Hoodies",
  user: @user
)

@hoodie3 = Product.create!(
  name: "Grey Hoodie",
  price: 50,
  size: "S M L XL",
  description: "Cool Grey Habibi Heartbreaker Hoodie!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464525/Habibi%20Heartbreaker/Hoodies/chrome_Gp0ZYeFagK_k2mjwg.png",
  category: "Hoodies",
  user: @user
)

@crewneck1 = Product.create!(
  name: "Baby Blue Crew Neck",
  price: 35,
  size: "S M L XL",
  description: "Cool Baby Blue Habibi Heartbreaker Crew Neck!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Crew%20Necks/chrome_9OEyvSTGgK_sjqwan.png",
  category: "Crewnecks",
  user: @user
)

@crewneck2 = Product.create!(
  name: "Yellow Crew Neck",
  price: 35,
  size: "S M L XL",
  description: "Cool Yellow Habibi Heartbreaker Crew Neck!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Crew%20Necks/chrome_6yo3DMfMRW_aaamct.png",
  category: "Crewnecks",
  user: @user
)

@crewneck3 = Product.create!(
  name: "Red Crew Neck",
  price: 35,
  size: "S M L XL",
  description: "Cool Red Habibi Heartbreaker Crew Neck!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Crew%20Necks/chrome_sd45Jf38Mx_ufdhnw.png",
  category: "Crewnecks",
  user: @user
)

@crewneck4 = Product.create!(
  name: "Sand Crew Neck",
  price: 35,
  size: "S M L XL",
  description: "Cool Sand Habibi Heartbreaker Crew Neck!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Crew%20Necks/chrome_v2t4vWOwWd_fb3icd.png",
  category: "Crewnecks",
  user: @user
)

@crewneck5 = Product.create!(
  name: "Mint Green Crew Neck",
  price: 35,
  size: "S M L XL",
  description: "Cool Mint Green Habibi Heartbreaker Crew Neck!",
  image: "https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633464524/Habibi%20Heartbreaker/Crew%20Necks/chrome_rQMDGIRF8l_lofhqy.png",
  category: "Crewnecks",
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
