import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import '../styles/nav.css'
import { useAuth } from './Auth';

export const NavBar = () => {
    const context = useAuth()
  return (
    <div className="nav-container" data-aos="fade-down" >
            <div className ="logo">
                <img className= "logoimg" alt= "logo" src={logo}/>
                <h2 className = "title">Mr. Health</h2>
            </div>
            <ul className = "navbar">
                <div className = "it">
                    <li className="list item1"><NavLink className="items" to="/">Home</NavLink></li>
                    <li className="list item2"><NavLink className="items" to="/admin" >Admin</NavLink></li>
                    <li className="list item3"><NavLink className="items" to="/user" >User</NavLink></li>
                </div>
                <li className="list item3"><NavLink className = "items" to="/login" >Login</NavLink></li>               
            </ul>
        </div>
  )
}
