import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from './redux-store/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';

import HomeLogin from './Pages/HomeLogin'
import Home from './Pages/Home';
import Login from './Pages/Login';
import PrivateRoute from './PrivateRoute';
import Register from './Pages/Register';
import About from './Pages/About';
import ContactUs from './Pages/ContactUs';
import AboutLogin from './Pages/AboutLogin';
import ContactUsLogin from './Pages/ContactUsLogin';
import PageNotFound from './Pages/PageNotFound';
import Account from './Pages/Account';
import EditProfile from './Pages/EditProfile';

function App() {
  return (
    <Router>
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={"loading"} persistor={persistor}>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route element={<PrivateRoute/>}>
              <Route path="/home-login" element={<HomeLogin/>} />
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/about-login" element={<AboutLogin/>} />
            <Route path="/contact-us" element={<ContactUs/>} />
            <Route path="/contact-us-login" element={<ContactUsLogin/>} />
            <Route path="/account" element={<Account/>} />
            <Route path="/edit-profile" element={<EditProfile/>} />
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </PersistGate>
      </Provider>
    </div>
    </Router>
  )
}

export default App
