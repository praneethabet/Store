import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';


 


function App() {
  return (
   <div>
     <Navbar/>
     <ProductList/>
     <Cart/>
     <Default/>
     <Details/>
   </div>  );
}

export default App;
