## Habibi Heartbreaker


### Description

Elliot Jarrous clothing is a brand with an ongoing Arab-Centric theme. This project is a showcase to Elliot Jarrous line of clothes, named "Habibi Heart-Breaker"


### Schema for users

```
const User = new Schema  ({
   firstname: {
     type: String,
     required: true,
   },
   email: {
     type: String,
     required: true,
   },
   password_digest: {
     type: String,
     required: true,
     select: false
   },
   { timestamps: true }
 })

```


### Schema for products

```
const Product = new Schema
(
  {
    name: { 
      type: String, 
      required: true 
      },
    description: { 
      type: String, 
      required: true 
      },
    price: { 
      type: String, 
      required: true 
      },
    size: { 
      type: String, 
      required: true  
      },
    imgURL: { 
      type: String, 
      required: true 
      }
  },
  { timestamps: true }
)
```


### Wireframes
![imgAlt](https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633889606/Habibi%20Heartbreaker/Figma/Screen_Shot_2021-10-10_at_2.12.46_PM_qtgtt3.png)



### ERD
![imgAlt](https://i.imgur.com/S4ABas8.png)



### Component Tree
```
|__ components/
    |__ Layout
      |__ Layout.css
      |__ Layout.jsx
    |__ Nav
      |__ Nav.css
      |__ Nav.jsx
|__ screens/
    |__ About
      |__ About.css
      |__ About.jsx
    |__ Gallery
      |__ Gallery.css
      |__ Gallery.jsx
    |__ Home
      |__ Home.css
      |__ Home.jsx
    |__ Products
      |__ Products.css
      |__ Products.jsx
    |__ Pview
      |__ Pview.css
      |__ Pview.jsx
    |__ SignIn
      |__ SignIn.css
      |__ SignIn.jsx
    |__ SignUp
      |__ SignUp.css
      |__ SignUp.jsx
    |__ Supports
      |__ CommentEdit
        |__ CommentEdit.css
        |__ CommentEdit.jsx
      |__ CommentForm
        |__ CommentForm.css
        |__ CommentForm.jsx
      |__ Comment
        |__ Comment.css
        |__ Comment.jsx
|__ services
  |__ apiConfig.js
  |__ products.js
  |__ users.js
|__ App.js/
|__ App.css/
|__ index.js/
|__ index.css/
|__ utils/
```


### Libraries and Dependencies 
| Libraries | Description                                                 | 
| -------- | -------------------------------------------------------------| 
| React | Render components, props, state, implent data from Ruby backend | 
| React Router | Navigate through website, Client side                    | 
| Ruby on Rails | Back-end server building                                | 
| Rails | Define models for back-end database                             | 
| Netlify | Fully functional front-end deployment                         | 
| Heroku | Fully functional back-end deployment                           | 


### MVP
- Create an API to manage, store, and authenticate user information.  
- API will also manage product inventory with full CRUD functionality for ADMIN only.
- Fully responsive design utilizing CSS.
- Users will be able sign up / sign in and browse current inventory.
- Deployed to Heroku, Netlify.


### POST MVP
- Create a functioning shopping cart
- Add an image gallery to showcase products


### Schedule 
| Day      | Deliverable                                                 | Status     |
| -------- | ----------------------------------------------------------- | ---------- |
| October 4 | Client consultation / Wireframes / Timeframes / README.md / Back-end development| Complete |
| October 5 | Back-end development cont. / Backend review and deployment                      | Complete |
| October 6 | Front-end development / Front-end review and deployment                         | Complete |
| October 7 | CSS                                                                             | Complete |
| October 8 | CSS cont / Media Queries                                                        | Complete |
| October 11 | Present                                                                        | Complete |
