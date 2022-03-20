import React from 'react'
import Card from '../Card/Card'
import react from './physics.png'
import nodejs from './nodejs.png'
import js from './javascript.png'
import html from './html-5.png'
import css from './css.png'
import mongo from './mongo.png'
import nextjs from './nextjs.svg'
import express from './express.png'
import tailwind from '../../assets/tailwindlogo.png'


import './Skills.css'
const Skills = () => {
  return (
    <div className='SContainer'>
        <Card react={react} nodejs={nodejs} mongo={mongo}  js={js} html={html} css={css} next={nextjs} express={express} nextjsName={"NextJs"} htmlName={"Html"} cssName={"Css"} jsName={"Js"} reactName={"React"} nodeName={"NodeJs"} mongoName={"Mongo"} expressName={"ExpressJs"} set={"Skills"}/>
        <Card react={react} nodejs={nodejs} mongo={mongo}  js={js} html={html} css={css} next={tailwind} express={express} nextjsName={"TailwindCss"} htmlName={"Html"} cssName={"Css"} jsName={"Js"} reactName={"React"} nodeName={"NodeJs"} mongoName={"Mongo"} expressName={"ExpressJs"} set={"Experiences"}/>
    </div>
  )
}

export default Skills