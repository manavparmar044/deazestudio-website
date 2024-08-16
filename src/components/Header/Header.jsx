import React from 'react'
import './Header.css'
import {Link} from 'react-scroll'

const Header = () => {
  return (

      <section className='h-wrapper'>
        <div className="flexCenter innerWidth paddings h-container">
          <Link href='/'><img src="./deaze_logo_1.png" alt="logo" width={100}/></Link>

          <div className="flexCenter h-menu">
            <Link to = "/" spy={true} offset={50} duration={500}>Home</Link>
            <Link to = "br-wrapper" spy={true} offset={-100} duration={500}>About Us</Link>
            <Link to = "s-wrapper" spy={true} offset={-100} duration={500}>Services</Link>
            <a href="">Portfilio</a>
            <button className='button'>
            <a href="">Contact</a>
            </button>
          </div>
        </div>
      </section>

  )
}

export default Header