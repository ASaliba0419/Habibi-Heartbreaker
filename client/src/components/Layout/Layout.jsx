import Nav from '../Nav/Nav'
import './Layout.css'

import React from 'react'

const Layout = (props) => {
  return (
    <>
      <div>
        <Nav currentUser={props.currentUser} handleLogout={props.handleLogout} />
      </div>
      {props.children}
    </>
  )
}

export default Layout

