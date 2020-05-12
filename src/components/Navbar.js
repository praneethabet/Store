import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <Link to="/">
                    <img src={logo} alt="store" className="navbar-brand"/>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link" className="textColor">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <button >
                <i class="fas fa-cart-plus"/>
                My Cart</button> 
                </Link>
           </nav>
        )
    }
}

export default Navbar
