## Habibi Heartbreaker


### Description

Elliot Jarrous clothing is a brand with an ongoing Arab-Centric theme. Beginning with a local pop up May of 2021, we decided to think bigger and better with our brand going forward. This is where you can find new releases and much more from our little world. 


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
![imgAlt](https://i.imgur.com/kgBBxDd.png)



### ERD
![imgAlt](https://i.imgur.com/S4ABas8.png)



### Component Tree
```
|__ components/
    |__ Home.jsx
    |__ Nav
    |__ Footer
|__ layout/
    |__ Layout.jsx
|__ screens/
    |__ SignIn.jsx
    |__ SignUp.jsx
    |__ ProductList.jsx
    |__ ProductView.jsx
    |__ AdminProductList.jsx
    |__ AdminProductView.jsx
    |__ Cart.jsx
|__ App.js/
|__ App.css/
|__ index.js/
|__ index.css/
|__ utilities/
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
| October 4 | Client consultation / Wireframes / Timeframes / README.md / Back-end development| Incomplete |
| October 5 | Back-end development cont. / Backend review and deployment                      | Incomplete |
| October 6 | Front-end development / Front-end review and deployment                         | Incomplete |
| October 7 | CSS                                                                             | Incomplete |
| October 8 | CSS cont. / Present                                                             | Incomplete |
