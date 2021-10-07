import React from 'react'
import { Link } from 'react-router-dom'
import './Comments.css'

const Comments = (props) => {
  return (
    <>
      <div>
        <p>View other supporters, or create your own here!</p>
      </div>
      <Link to='/show-your-support'>
        <button className="add-comment-button">Add</button>
      </Link>


      {props.supports.map(support => (
        <>
          <div className="comment-container">
            <img className="image-comments" src={support.image} alt={support.description} />
          </div>
          <p className="descrip">{support.description}</p>
        </>
      ))}

    </>
  )
}

export default Comments
