import './App.css';
import Home from './screens/Home/Home'
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn'
import Layout from './components/Layout/Layout'
import Products from './screens/Products/Products';
import Comments from './screens/Supports/Comments/Comments'
import About from './screens/About/About'
import Gallery from './screens/Gallery/Gallery'
import Pview from './screens/Pview/Pview'
import CommentForm from './screens/Supports/CommentForm/CommentForm';
import CommentEdit from './screens/Supports/CommentEdit/CommentEdit'
import { useEffect, useState } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';

import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/users.js';
import {
  getProducts,
  createSupport,
  updateSupport,
  deleteSupport,
  getSupport
} from './services/products';



function App() {
  const [products, setProducts] = useState([])
  const [supports, setSupports] = useState([])
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
    removeToken()
    history.push('/');
  };

  useEffect(() => {
    const fetchProducts = async () => {
      const productList = await getProducts();
      setProducts(productList)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    const fetchSupports = async () => {
      const supportList = await getSupport();
      setSupports(supportList)
    }
    fetchSupports()
  }, [])

  const handleSupportDelete = async (id) => {
    await deleteSupport(id)
    setSupports((prevState) => prevState.filter((supportItem) => supportItem.id !== id))
  }

  const handleSupportCreate = async (supportData) => {
    const newSupport = await createSupport(supportData)
    setSupports((prevState) => [...prevState, newSupport]);
    history.push('/supports');
  };

  const handleEditUpdate = async (id, supportData) => {
    const updatedSupport = await updateSupport(id, supportData);
    setSupports((prevState) =>
      prevState.map((support) => {
        return support.id === Number(id) ? updatedSupport : support;
      })
    );
    history.push('/supports');
  };


  return (
    <>
      <div className="app">
        <Layout currentUser={currentUser} handleLogout={handleLogout}>
          <Switch>
            <Route path="/sign-up">
              <SignUp handleRegister={handleRegister} />
            </Route>
            <Route path="/sign-in">
              <SignIn handleLogin={handleLogin} />
            </Route>
            <Route path='/about-the-owner'>
              <About />
            </Route>
            <Route path='/gallery'>
              <Gallery />
            </Route>
            <Route path='/show-your-support'>
              <CommentForm
                handleSupportCreate={handleSupportCreate}
                supports={supports}
              />
            </Route>
            <Route path="/supports/:id/edit">
              <CommentEdit
                supports={supports}
                handleEditUpdate={handleEditUpdate}
              />
            </Route>
            <Route path='/supports'>
              <Comments
                getSupport={getSupport}
                supports={supports}
                handleSupportDelete={handleSupportDelete}
              />
            </Route>
            <Route path="/products/:id">
              <Pview products={products} />
            </Route>
            <Route path='/products'>
              <Products products={products} />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Layout>
      </div>

    </>

  );
}

export default App;
