import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';


const CommentForm = (props) => {
  const history = useHistory();
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
      



      <div>Leave a comment and support our cause!</div>
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

      <button type="submit">Submit your review</button>
    </form>

    </div >
  )
}

export default CommentForm

