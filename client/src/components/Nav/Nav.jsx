import { Link } from 'react-router-dom'
import './Nav.css'



const Nav = (props) => {

  return (
    <>
      <div>
        <header>
          {props.currentUser ? (
            <div className='navbar2'>
              <p id='title2'>Welcome, {props.currentUser.first_name}</p>
              <Link to='/' id='title'>Habibi Heart-Breaker</Link>
              <button id='logout-btn' onClick={props.handleLogout}>Logout</button>
            </div>
          ) : (
            <div className="navbar">
              <Link to='/gallery'>Gallery</Link>
              <Link to='/about-the-owner'>About the Owner</Link>
              <Link to='/products'>Shop Now</Link>
              <Link to='/'><h1 id='title'>Habibi Heart-Breaker</h1></Link>
              <Link to='/supports' id='comments-nav'>Comments</Link>
              <Link to='/sign-up'>Sign Up</Link>
              <Link to='/sign-in'>Login</Link>

            </div>
          )}
          {props.currentUser && (
            <div>
              <div className="navbar">
                <Link to='/gallery'>Gallery</Link>
                <Link to='/products'>Shop Now</Link>
                <Link to='/about-the-owner'>About the Owner</Link>
                <Link to='/supports' id='comments-nav'>Comments</Link>
                <Link to='/cart'>My Cart</Link>
              </div>
            </div>
          )}
        </header>
      </div>
    </>
  );
};

export default Nav;