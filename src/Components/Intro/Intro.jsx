import React from 'react'
import './Intro.css'
import intro from './intro.png'
import facebook from './facebook.png'
import instagram from './instagram.png'
import github from './github.png'
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom'
const Intro = () => {
  return (
   <>
   <div className="intoContainer">
   <div className="left">
    <div className="title">
        <h3>Hello My Name Is</h3>
    </div>
    <div className="name">
        Priyansh Gupta
    </div>
    <div className="about">
    <Typewriter
  options={{
    strings: ['I am a Web Developer!', 'I am a freelancer!','I am an Advertisement Creator!'],
    autoStart: true,
    loop: true,
  }}
/>
    </div>

    <Link to="#" className="btn">
        Download Resume
    </Link>

   <div className="links">
       <a href="https://www.facebook.com/priyansh.gupta.37853">
           <img src={facebook} alt="" />
       </a>
       <a href="https://www.instagram.com/priyansh_gupta_15/">
           <img src={instagram} alt="" />
       </a>
       <a href="https://github.com/PriyanshGupta2002">
           <img src={github} alt="" />
       </a>
   </div>

   </div>
   <div className="right">
      <img src={intro} alt="" />
   </div>
   </div>
   </>
  )
}

export default Intro