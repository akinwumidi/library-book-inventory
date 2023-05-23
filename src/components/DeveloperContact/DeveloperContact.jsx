import React from 'react'
import { Link } from 'react-router-dom'
import './developercontact.scss'
import {
  RiLinkedinFill,
  RiGithubLine,
  RiTwitterLine,
  RiArrowRightLine,
} from 'react-icons/ri'

const DeveloperContact = () => {
  return (
    <div className="dev-details">
      <div className="dev-contactsocials">
        <Link to="https://www.linkedin.com/in/akinwumidi" target="_blank">
          <span className="devcontact-icon-container">
            <RiLinkedinFill />
          </span>
        </Link>

        <Link to="https://github.com/akinwumidi" target="_blank">
          <span className="devcontact-icon-container">
            <RiGithubLine />
          </span>
        </Link>

        <Link to="https://twitter.com/akinwumidi" target="_blank">
          <span className="devcontact-icon-container">
            <RiTwitterLine />
          </span>
        </Link>
      </div>

      <button className="devcontact-btn">
        <Link to="https://akinwumidi.dev/" target="_blank">
          Contact developer
        </Link>
        <RiArrowRightLine />
      </button>
    </div>
  )
}

export default DeveloperContact
