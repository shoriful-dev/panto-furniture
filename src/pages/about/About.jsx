import React from 'react'

import aboutBgImg from "../../assets/banner.png"
import Expricences from '../home/Expricences'

const About = () => {
  return (
    <section> 
     {/* banner */}
     <div
        className="w-full h-[400px]  bg-no-repeat bg-cover  flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        <div className=''>
        <h1 className="text-5xl font-bold">About Us</h1>
        </div>
      </div>
      <Expricences/>
    </section>
  )
}

export default About
