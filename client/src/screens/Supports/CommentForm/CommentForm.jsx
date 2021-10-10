import React, { useState } from 'react'
import './CommentForm.css'


const CommentForm = (props) => {
  const [formData, setFormData] = useState({
    image: '',
    description: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className='form-wrapper'>


      <form onSubmit={(e) => {
        e.preventDefault()
        props.handleSupportCreate(formData)
      }}>




        <div>
          <h1>Leave a comment and support our cause!</h1>
        </div>
        <div className='field'>
          <input
            value={formData.image}
            onChange={handleChange}
            type="text"
            name='image'
            placeholder='https://YourImageHere.com'
            required
          />
        </div>

        <div className="field">
          <input
            value={formData.description}
            onChange={handleChange}
            type="description"
            name="description"
            placeholder="Review Description" />

        </div>
        <div className="sub-btn-container">
          <button className="sub-button" type="submit">Submit</button>
        </div>
      </form>

    </div >
  )
}

export default CommentForm

