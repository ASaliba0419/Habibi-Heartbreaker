import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignIn.css'

export default function Login(props) {
  const [formData, setFormData] = useState({
    first_name: '',
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
      <div className='login-container'>
        <form onSubmit={(e) => {
          e.preventDefault();
          props.handleLogin(formData);
        }}>
          <h3>Login</h3>
          <label>
            Username:
            <input
              type='text'
              name='first_name'
              value={formData.first_name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <Link to='/register'>Register</Link>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}