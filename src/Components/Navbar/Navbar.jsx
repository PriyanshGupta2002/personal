import React,{useState} from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [nav, setnav] = useState(true)

  const toggleNav=()=>{
    setnav((prevNav)=>!prevNav)
  }
  return (
    <>
    <div className={`nav ${nav?'disp':''}`}>
      <div className="ham" onClick={toggleNav}>
        <div className="lines"></div>
        <div className="lines"></div>
        <div className="lines"></div>
      </div>

        <ul >
            <Link to="/"><li>Home</li></Link>
            <Link to="/work"><li>Work</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
        </ul>
    </div>
    </>
  )
}

export default Navbar