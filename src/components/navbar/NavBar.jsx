import React from 'react'
import { Link } from "react-router-dom";
import './NavBar.css'
import logo from '../../assets/logAvalith.jpeg'

const NavBar = () => {
  return (
    <div className='header__container'>
            <a href="https://www.avalith.net/" target="_blank">
                <img className="header__logo" src ={logo} alt="logo Avalith" />
            </a>

            <nav>
                <ul className="header__nav">
                    <Link to='/' className="header__link">Home</Link>
                    <Link to='/form' className="header__link">Formulario</Link>
                    <Link to='/usuarios' className="header__link">Usuarios</Link>
                    <Link to='/rickmorty' className="header__link">Rick & Morty</Link>
                </ul>
            </nav>
    </div>
  )
}

export default NavBar