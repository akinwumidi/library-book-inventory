import React, { useContext } from 'react'
import './hamburger.scss'
import { NavigationContext } from '../../Context/NavigationContext'

const Hamburger = () => {
  const { navstatus, setNavstatus } = useContext(NavigationContext)

  return (
    <div
      onClick={() => setNavstatus(!navstatus)}
      className={`hamburger-menu ${navstatus ? 'transform-menu' : ''}`}
    >
      <div className="bar"></div>
    </div>
  )
}

export default Hamburger
