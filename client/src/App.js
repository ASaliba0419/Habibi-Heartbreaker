import { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home/Home'
import { Route, useHistory } from 'react-router-dom';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn'
import Layout from './components/Layout/Layout'

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/users.js';



function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData);
    setCurrentUser(userData);
    history.push('/');
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('authToken');
    removeToken();
  };



  return (
    <>
      <div className="app">
        <switch>
          <Layout currentUser={currentUser} handleLogout={handleLogout}>

            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/sign-up">
              <SignUp handleRegister={handleRegister} />
            </Route>
            <Route path="/sign-in">
              <SignIn handleLogin={handleLogin} />
            </Route>
          </Layout>
        </switch>
      </div>

    </>

  );
}

export default App;
