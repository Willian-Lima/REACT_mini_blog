import React from 'react'
import './NavBar.css'
import DropMenu from './DropMenu';

const NavBar = () => {

  return (
    <nav className='navbar'>
      <div className="logo">
      <p>Mini <span>Blog</span></p>
      </div>
      <div className="navbar-end">
        <DropMenu />
      </div>

    </nav>
  )
}

export default NavBar