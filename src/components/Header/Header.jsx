import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { RiSunFill, RiMoonFill } from 'react-icons/ri'
import { Hamburger } from '../index'
import { ThemeContext } from '../../Context/ThemeContext'
import './header.scss'
import { NavigationContext } from '../../Context/NavigationContext'

const Header = () => {
  const headerLinks = [
    { name: 'Records center', path: '/recordscenter' },
    { name: 'Bookshive', path: '/bookshive' },
  ]
  const { theme, setTheme } = useContext(ThemeContext)
  const { navstatus, setNavstatus } = useContext(NavigationContext)

  return (
    <>
      <header>
        <div className="header-container">
          <div className="header-navigation">
            <div className="header-brand">
              <span className="brand-name">
                <span> Lib</span>Inv
              </span>
            </div>
            <div className="header-actions">
              <div className="header-theme">
                {theme === 'main-theme' ? (
                  <span
                    className="theme"
                    onClick={() => setTheme('dark-theme')}
                  >
                    <RiMoonFill />
                  </span>
                ) : (
                  <span
                    className="theme"
                    onClick={() => setTheme('main-theme')}
                  >
                    <RiSunFill />
                  </span>
                )}
              </div>
              <Hamburger />
            </div>
          </div>
        </div>
      </header>
      <div className="header-subnavigation">
        <ul>
          {headerLinks.map((link, index) => (
            <NavLink
              to={link.path}
              key={index}
              className={(linkitem) =>
                linkitem.isActive ? 'active-headerlink' : ''
              }
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div
        className={`navigation-menu__backdrop ${
          navstatus ? 'show-backdrop' : ''
        }`}
        onClick={() => setNavstatus(!navstatus)}
      ></div>
      <div className={`navigation-menu ${navstatus ? 'show-navigation' : ''}`}>
        <h1>Side Navigation</h1>
      </div>
    </>
  )
}

export default Header
