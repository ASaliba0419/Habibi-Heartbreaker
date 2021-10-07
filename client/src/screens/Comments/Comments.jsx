import React from 'react'
import { Link } from 'react-router-dom'

const Comments = (props) => {
  return (
    <>
      <div>
      This is the comments page
      </div>
      <Link to='/show-your-support'>
        <button>Add</button>
      </Link>


      <p>{props.description}</p>








    </>
  )
}

export default Comments
