
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import './App.css'
import Cart from './components/Cart';

const App = () => {
  return (
    <>
      <Navbar />
    {/*{<Home />} */}
    {/* <RegisterPage/> */}
    {/* { <LoginPage/> } */}
    <Cart/>
      <Footer />
    </>
  );
};

export default App;
