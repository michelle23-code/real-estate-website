import React from 'react'
import "./hero.css"

function Hero() {
  return (
    <section className='hero-wrapper'>
        <div className="paddings innerWidth flexCenter hero-container">
          {/* left side*/}

           <div className='hero-left'>
             <div className="hero-title">
              <div className="orange-circle"/>
              <h1>Discover <br /> Most Suitable <br /> Property</h1>
             </div>
             <div className=' flexColStart hero-des'>
              <span>Find a variety properties that suits you very easilty</span>
              <span>Forget all difficuties in finding a residence for you</span>
             </div>
             <div className='search-bar'>
               search bar
             </div>
             </div>
           <div className="flexCenter hero-right">
             <div className='image-container'> 
               <img src="./hero-image.png" alt="" />
             </div>
           </div>
        </div>
    </section>
  )
}

export default Hero