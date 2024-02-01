import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <>
      <header>
        <div className="container">
            <div className="logo-brand">
                <NavLink to='/'>Siddharth</NavLink>
            </div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/service'>Service</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                </ul>
            </nav>
        </div>
      </header>
      </>
    )
  }
}
