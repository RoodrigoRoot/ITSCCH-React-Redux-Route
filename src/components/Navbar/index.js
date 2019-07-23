import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar-list">
            <ul className="list">
                <li id="logo"><Link to='/' id="text-logo" href="#">ITSCCH</Link></li>
            </ul>
            <ul className="list">
                <li><Link to='/' className="list-item" href="#">Inicio</Link></li>
                <li><Link to='/ponentes' className="list-item" href="#">Ponentes</Link></li>
                <li><Link to='/conferencias' className="list-item" href="#">Conferencias</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar