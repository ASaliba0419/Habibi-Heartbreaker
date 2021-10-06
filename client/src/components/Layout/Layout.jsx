import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
import './Layout.css'

import React from 'react'

const Layout = (props) => {
  return (
    <>
      <div>
        <Nav currentUser={props.currentUser} handleLogout={props.handleLogout}/>
      </div>
      {props.children}
      <div>
        <Footer />
      </div>
    </>
  )
}

export default Layout

