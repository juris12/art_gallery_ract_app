import { useRef, useEffect } from 'react'
import './NavbarMobile.styles.scss'
import { NavLink } from 'react-router-dom'

type mobileOpenType = {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>,
  mobileOpen: boolean
}

const NavbarMobile = ({mobileOpen, setMobileOpen}: mobileOpenType) => {
  const menuRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutside = (e: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
      setMobileOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  return (
    <div className={`mobile_menu_outer ${mobileOpen && 'active_mmobile'}`}>
      <div ref={menuRef} className={`mobile_menu ${mobileOpen && 'active_mmobile'}`}>
        <button>
          <div className="nav_menu_iner_white">
              <div className="menu_bar1"></div>
              <div className="menu_bar2"></div>
              <div className="menu_bar3"></div>
          </div>
          <span>MENU</span>
        </button>
        <ul onClick={() => setMobileOpen(false)}>
            <li><NavLink to='/#shuffle'>Shuffle</NavLink></li>
            <li><NavLink to='/gallery'>Gallery</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
        <button onClick={() => setMobileOpen(false)}>CLOSE</button>
      </div>
    </div>
  )
}

export default NavbarMobile