import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <section className="s-wrapper">
        <div className="innerWidth s-container">
            <div className="s-1">
            <h1>Our Services</h1>
            </div>
            {/* <h1>Brand Identity</h1><br />
            <h1>UI/UX</h1><br />
            <h1>Web development</h1><br />
            <h1>Software development</h1><br /> */}
            <div className="box">
                <h2 className='text-xl'>01. Brand Identity</h2>
                <div className="blue-circle"></div>
            </div>
            <div className="box">
                <h2>02. UI/UX</h2>
                <div className="blue-circle"></div>
            </div>
            <div className="box">
                <h2>03. Web development</h2>
                <div className="blue-circle"></div>
            </div>
            <div className="box">
                <h2>04. Software development</h2>
                <div className="blue-circle"></div>
            </div>
        </div>
        <div className="innerWidth s-container1">
            <h1>About our services</h1>
            <p>Committed to enhancing your digital presence and empowering your business, we specialize in crafting compelling brand identities and designing intuitive user experiences. From cutting-edge web development to tailored software solutions, we drive efficiency and success. Partner with us to unlock your digital journey's full potential in brand identity, UI/UX, web development, and software solutions.</p>
        </div>
    </section>
  )
}

export default Services