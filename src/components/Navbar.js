import React from 'react'

export default function Navbar() {
    return ( 
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="collapse navbar-collapse" id="navbarSupportedContent">  
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
    <a className="nav-link" href="/">Overview<span className="sr-only">(current)</span></a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/">Order-Online</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/">Reviews</a>
    </li>   
    <li className="nav-item">
    <a className="nav-link" href="/" >Menus</a>
    </li>
    <li className="nav-item">
    <a className="nav-link" href="/">Photos</a>
    </li>
    </ul>
</div>
</nav>
)
}