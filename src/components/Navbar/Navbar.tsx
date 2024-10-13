import { useState } from 'react'
import './Navbar.styles.scss'
import { NavLink } from 'react-router-dom'
import NavbarMobile  from './NavbarMobile'
import { IoEarth } from "react-icons/io5";
const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
<nav>
      <div className="page_navbar_outer">
        <div className="page_navbar">
          <div className="page_navbar-left">
              <NavLink to='/'>
                <IoEarth />
              </NavLink>
              <div className="nav_menu_iner" onClick={() => setMobileOpen(true)}>
                <div className="menu_bar1"></div>
                <div className="menu_bar2"></div>
                <div className="menu_bar3"></div>
            </div>
          </div>
          <nav className="page_navbar-center">
              <ul>
                <li><NavLink to='/#shuffle'>Shuffle</NavLink></li>
                <li><NavLink to='/gallery'>Gallery</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
              </ul>
          </nav>
          <div className="page_navbar-right">
          </div>
        </div>
      </div>
      <NavbarMobile mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
  </nav>
  )
}

export default Navbar