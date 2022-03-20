import React, { useState,useRef } from 'react'
import './Contact.css'
import cont from './contact.png'
import emailjs from '@emailjs/browser'
import load from '../../assets/submitGif.gif'
const Contact = () => {
  const [name, setName] = useState("")
  const [subject, setSubject] = useState("")
  const [email, setEmail] = useState("")
  const [work, setWork] = useState("")
  const [loader, setloader] = useState(false)
  const [nameIsValid, setNameIsValid] = useState(true)
  const [subjectIsValid, setSubjectIsValid] = useState(true)
  const [EmailIsValid, setEmailIsValid] = useState(true)
  const [workIsValid, setWorkIsValid] = useState(true)

  let formInput=useRef()


  //Form-Submit Handler
  const submitHandler=(e)=>{
    e.preventDefault()
  
    if (name.trim().length===0 && subject.trim().length===0 && email.trim().length===0 && work.trim().length===0 ) {
      setNameIsValid(false)
      setEmailIsValid(false)
      setSubjectIsValid(false)
      setWorkIsValid(false)
    }
    else if (!email.includes("@")) {
      setEmailIsValid(false)
      setloader(false)
    }
    else{
      setloader(true)
      emailjs.sendForm('service_dcxjsjf', 'template_yvlggvf', formInput.current, 'user_POWen8ni7wkCvYMORM2Fq')
      
.then((result) => {
    if (result.text) {
      setName("")
      setSubject("")
      setEmail("")
      setWork("")
      // alert("Form has been successfully submitted")
      setloader(false)
    }

 
   
    
}, (error) => {
    console.log(error.text);
    setloader(false)
});
      
    }
  }

  //OnChangeHandlers
  const nameChangeHandler=(e)=>{
    setName(e.target.value)
    if (e.target.value.trim().length!==0) {
      setNameIsValid(true)
    }
  }
  const subChangeHandler=(e)=>{
    setSubject(e.target.value)
    if (e.target.value.trim().length!==0) {
      setSubjectIsValid(true)
    }
  }
  const emailChangeHandler=(e)=>{
    setEmail(e.target.value)
    if (e.target.value.trim().length!==0 && e.target.value.includes("@")) {
      setEmailIsValid(true)
    }
  }
  const projectChangeHandler=(e)=>{
    setWork(e.target.value)
    if (e.target.value.trim().length!==0) {
      setWorkIsValid(true)
    }
  }


  return (
    <div className='c-container'>
      <div className="c-header">
        <h2>Contact Us</h2>
        <img src={cont} alt="" />
        </div>
      <form action="" onSubmit={submitHandler} ref={formInput}>
        <div className={`inpName ${nameIsValid ? '':'invalid'}`}>
        <label htmlFor="name">Name</label>
        <input type="text" name="user_name" id="name" value={name} onChange={nameChangeHandler}/>
        {!nameIsValid && <p>*Name is Required!</p>}
          </div>
        <div className={`inpSub ${subjectIsValid?'':'invalid'}`}>
        <label htmlFor="sub">Subject</label>
        <input type="text" name="user_subject" id="sub" value={subject} onChange={subChangeHandler}/>
        {!subjectIsValid && <p>*Subject is Required!</p>}
          </div>
        <div className={`inpEmail ${EmailIsValid?'':'invalid'}`}>
        <label htmlFor="inpEmail">Email</label>
        <input type="email" name="user_email" id="email" value={email} onChange={emailChangeHandler}/>
        {!EmailIsValid && <p>*Enter Valid Email</p>
          }
          </div>

          <div className={`inpTextArea ${workIsValid?'':'invalid'}`}>
            <label htmlFor="text-area">Your Project</label>
            <textarea name="user_message" id="text-area"  rows="5" value={work} onChange={projectChangeHandler}></textarea>
            {!workIsValid && <p>*Project is Required</p>}
            </div>

        
              <div className="load">
              <button type='submit' className="c-btn">
              Submit
              </button>
               {loader && <img src={load} alt="" />}
               {/* <img src="https://loading.io/asset/557847" alt="" /> */}
                </div>

              
        </form>
    </div>
  )
}

export default Contact