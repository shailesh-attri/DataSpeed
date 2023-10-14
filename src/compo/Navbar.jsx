import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'



const Navbar = () => {
  return (
    <div className='header'>
      <label htmlFor="">DataSpeed.com</label>
      <span>Designed by Shailesh attri</span>
      <ul>
        <li><a href="https://shailesh-attri.github.io/"><FontAwesomeIcon icon={faGithub} /></a></li>
        <li><a href="https://in.linkedin.com/in/shailesh-attri-web"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        <li><a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new"><FontAwesomeIcon icon={faEnvelope} /></a></li>
      </ul>
    </div>
  )
}

export default Navbar
