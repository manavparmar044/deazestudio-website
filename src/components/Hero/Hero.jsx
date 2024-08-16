import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="flexCenter paddings innerWidth  hero-container">
            <div className="flexColStart hero-left">
                <div className="hero-title">
                <h1><span>Design</span>ing Dreams,<br /><span>Develop</span>ing Realities.</h1>
                </div>
                <div className="flexColStart secondaryText hero-des">
                    <span>We specialize in crafting captivating designs and cutting-edge</span>
                    <span>software solutions to transform your vision into reality.</span>
                </div>
                <div className="flexCenter email-bar">
                    <input type="text" id='email-text'/>
                    <label for="secondaryTextAlt email-text">Enter your Email</label>
                    <button className='button'>Subscribe</button>
                </div>
            </div>
            {/* <div className="hero-right flexCenter">
                <div className="img-container">
                <img src="./deaze_hero.png" alt="" />
                </div>
            </div> */}
        </div>
    </section>
  )
}

export default Hero