import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
      <>   
       <div class="card" >
        <div className="head">
            <h2>{props.set}</h2>
        </div>
        <div className="skills">
        <div className="skills-left">
         
            <div className="html">
                <img src={props.html} className='html-img' alt="" />
                <h3>{props.htmlName}</h3>
  
            </div>
            <div className="css">
            <img src={props.css} className='html-img' alt="" />
            <h3>{props.cssName}</h3>
  
            </div>
            <div className="js">
            <img src={props.js} className='html-img' alt="" />
            <h3>{props.jsName}</h3>
  
            </div>
        
            <div className="react">
            <img src={props.react} className='html-img' alt="" />
            <h3>{props.reactName}</h3>
  
            </div>
        </div>

        <div className="skills-right">
            <div className="html">
                <img src={props.nodejs} className='html-img' alt="" />
                <h3>{props.nodeName}</h3>
            </div>
            <div className="css">
            <img src={props.mongo} className='html-img' alt="" />
            <h3>{props.mongoName}</h3>
  
            </div>
            <div className="js">
            <img src={props.next} className='html-img' alt="" />
            <h3>{props.nextjsName}</h3>
  
            </div>
        
            <div className="react">
            <img src={props.express} className='html-img' alt="" />
            <h3>{props.expressName}</h3>
  
            </div>
        </div>
        </div>

       </div>
</>

  )
}

export default Card