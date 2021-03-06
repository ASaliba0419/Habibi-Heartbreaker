import React from 'react'
import { Link } from 'react-router-dom'
import './Comments.css'

const Comments = (props) => {
  return (
    <>
      <div>
        <p className="comment-title">View other supporters, or create your own here!</p>
      </div>
      <div className='add-button-container'>
        <Link to='/show-your-support'>
          <button className="add-comment-button">Add</button>
        </Link>
      </div>

      {props.supports.map(support => (
        <>
          <div className="comment-container">
            <img className="image-comments" src={support.image} alt={support.description} />
          </div>
          <p className="descrip">{support.description}</p>
          <div className="comment-buttons">



            <Link to={`/supports/${support.id}/edit`}>
              <button>Edit</button>
            </Link>


            <button onClick={() => { props.handleSupportDelete(support.id) }}>
              Delete
            </button>

          </div>
          <br />
          <br />
          <br />
          <br />
        </>
      ))}

    </>
  )
}

export default Comments
