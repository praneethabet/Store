import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Default from './components/Default';
import Details from './components/Details';
import {Route, Switch} from 'react-router-dom';

 


function App() {
  return (
   <div>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={ProductList}/>
       <Route path="/details" component={Details}/>
       <Route path="/cart" component={Cart}/>
<Route component={Default}/>
       </Switch>
    
     
    
  
    
   </div>  );
}

export default App;
