import React from 'react'
import { NavLink } from 'react-router-dom'
import DropMenu from './DropMenu';

const NavBar = () => {

  return (
    <nav className='navbar'>
      <div className="logo">
      <NavLink className="nav-item" to="/" >Mini <span>Blog</span></NavLink>
      </div>
      <div className="navbar-end">
        <DropMenu />
      </div>

    </nav>
  )
}

export default NavBar