import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>Leading Textile Machinery Manufacturer</p>
              <h1>Welcome to Agarwal Engineering</h1>
              <p>Sharp your Company's Market using our Machins</p>
              <div className="btn-group">
                <a href='#'>
                  <button className="btn">Connect Now</button>
                </a>
                <a href='#'>
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
            <div className="hero-image">
              <img src="../../public/Images/hero.jpg" alt="" width={400} height={500}/>
            </div>
          </div>
        </section>

        <section className="section-analytics">
          <div className="container grid grid-four-cols">
            <div className="div1">
              <h2>300+</h2>
              <p>Happy CLients</p>
            </div>
            <div className="div1">
              <h2>7+</h2>
              <p>Years in Industry</p>
            </div>
            <div className="div1">
              <h2>3+</h2>
              <p>Serving in Countries</p>
            </div>
            <div className="div1">
              <h2>12+</h2>
              <p>States in India</p>
            </div>  
          </div>
        </section>

        <section className="section-hero">
      
          <div className="container grid grid-two-cols">
          <div className="hero-image">
              <img src="../../public/Images/hero.jpg" alt="" width={400} height={500}/>
            </div>
            <div className="hero-content">
              <p>Leading Textile Machinery Manufacturer</p>
              <h1>Welcome to Agarwal Engineering</h1>
              <p>Sharp your Company's Market using our Machins</p>
              <div className="btn-group">
                <a href='#'>
                  <button className="btn">Connect Now</button>
                </a>
                <a href='#'>
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    )
  }
}
