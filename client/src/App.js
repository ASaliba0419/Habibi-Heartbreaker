import { useEffect, useState } from 'react';
import './App.css';
import Home from './screens/Home/Home'
import { Route, useHistory } from 'react-router-dom';
import SignUp from './screens/SignUp/SignUp';
import SignIn from './screens/SignIn/SignIn'
import Layout from './components/Layout/Layout'
import Products from './screens/Products/Products';
import {
  loginUser,
  registerUser,
  verifyUser,
  removeToken
} from './services/users.js';
import { getProducts, createSupport, updateSupport, deleteSupport, getSupport } from './services/products';
import Comments from './screens/Comments/Comments'
import About from './screens/About/About'
import Gallery from './screens/Gallery/Gallery'
import PviewForm from './screens/PviewForm/PviewForm';



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
    removeToken();
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


  useEffect(() => {
    const fetchSupportsCreate = async () => {
      const supportList = await createSupport();
      setSupports(supportList)
    }
    fetchSupportsCreate()
  }, [])

  useEffect(() => {
    const fetchSupportsUpdate = async () => {
      const supportList = await updateSupport();
      setSupports(supportList)
    }
    fetchSupportsUpdate()
  }, [])

  useEffect(() => {
    const fetchSupportsDelete = async () => {
      const supportList = await deleteSupport();
      setSupports(supportList)
    }
    fetchSupportsDelete()
  }, [])

  const handleSupportCreate = async (supportData) => {
    const newSupport = await createSupport(supportData)
    setSupports((prevState) => [...prevState, newSupport]);
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
            <Route path='/products'>
              <Products products={products} />
            </Route>
            <Route path='/supports'>
              <Comments
                getSupport={getSupport}
                supports={supports}/>
            </Route>
            <Route path='/about-the-owner'>
              <About />
            </Route>
            <Route path='/gallery'>
              <Gallery />
            </Route>
            <Route path='/show-your-support'>
              <PviewForm
                handleSupportCreate={handleSupportCreate}
                supports={supports}
                />
            </Route>
          </Layout>
        </switch>
      </div>

    </>

  );
}

export default App;
