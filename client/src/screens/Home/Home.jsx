import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <>
      <Link to='/products'>

        <div className='home-images'>

          <div class='container'>
            <img id='shirts' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633546636/Habibi%20Heartbreaker/Front%20page%20pictures/kamaal_shirts_zhrev4.png" alt="shirts" />
            <div className='middle1'>
              <div class='text'>Shirts</div>
            </div>
          </div>
          <div class='container'>
            <img id='hoodies' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633546641/Habibi%20Heartbreaker/Front%20page%20pictures/elliot_hoodies_nesfkr.png" alt="hoodies" />
            <div className='middle2'>
              <div class='text'>Hoodies</div>
            </div>
          </div>
          <div class='container'>
            <img id='crewnecks' src="https://res.cloudinary.com/dtp9f7dv2/image/upload/v1633546646/Habibi%20Heartbreaker/Front%20page%20pictures/crewnecks-p4_vnh9cz.png" alt="crew-necks" />
            <div className='middle3'>
              <div class='text'>Crew-Necks</div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Home
