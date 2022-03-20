import React from 'react'
import './About.css'
import game from './gamepad.png'
import all  from './hobbies.png'
import music from './listening.png'
import puzzle from './puzzle.png'
import fb from './facebook.png'
import git from './github.png'
import insta from './instagram.png'
const About = () => {
  return (
    <div className='a-container'>
    <div className="a-head">
      About <strong>Me!</strong>
    </div>
    <div className="a-wrapper">
      <div className="a-left">
      <div className="a-card">
        <div className="a-p">
        <p>A keen learner,</p>
        <p>a universe of atoms,</p>
        <p>atoms of curiosity</p>
        </div>
        <p>My adrenaline rush comes from taking up challenges and solving them efficiently. The ideation phase of a project excites me the most.</p>
        <p>I have an inclination towards designing, my taste is minimal, which I use for the UI of my projects in various events I am involved with! I also enjoy collaborating and look forward to fun and productive social engagements on the way.</p>
      </div>
      <div className="s-links">
        <a href="https://github.com/PriyanshGupta2002">
          <img src={git} alt=""  className='s-img'/>
        </a>
        <a href="https://www.facebook.com/priyansh.gupta.37853">
           <img src={fb} alt=""  className='s-img'/>
        </a>
        <a href="https://www.instagram.com/priyansh_gupta_15/">
           <img src={insta} alt=""  className='s-img'/>
        </a>
      </div>
      </div>
      <div className="a-right">
        <div className="gen-card">
          He/Him
        </div>
        <div className="cast-card">
          Saggitarius
        </div>
        <div className="age-card">
          19 Years Old
        </div>

        <div className="hobbies">
          <img src={game} alt="" />
          <img src={all} alt="" />
          <img src={music} alt="" />
          <img src={puzzle} alt="" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default About