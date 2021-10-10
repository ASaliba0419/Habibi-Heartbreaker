import { useState } from 'react';
import './SignUp.css'


export default function Register(props) {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="signup-container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleRegister(formData);
          }}
        >
          <h3>Let's get you signed up!</h3>
          <label>
            Username            <br />
            <input
              type='text'
              name='first_name'
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />
          <br />
          <br />

          <label>
            Email            <br />
            <input
              type='text'
              name='email'
              value={formData.email}
              onChange={handleChange}
            />
          </label>

          <br />
          <br />
          <br />
          <br />

          <label>
            Password            <br />

            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}