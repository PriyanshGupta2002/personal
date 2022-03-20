import React from "react";
import "./Work.css";
import github from "./github.png";
import work from './work.png'
const Work = () => {
  return (
    <div className="w-container">
      <div className="Head">
        <h2>My Work</h2>
        <img src={work} alt="" />
      </div>
      <div className="w-wrapper">
        <div className="w-card" id="Card1">
          <div className="head">
            <h2>Todo App</h2>
          </div>
          <hr />
          <div className="desc">
            <p>
              A simple yet useful todoApp that helps You to maintain your daily
              tasks and helps you to remember things and you can access it from anywhere anytime seamlessly.
            </p>
          </div>
          <div className="proj">
            <a href="https://github.com/PriyanshGupta2002/todos" rel="noreferrer" target="_blank" className="btns">
              View Project
            </a>
            <img src={github} alt="" />
          </div>
        </div>
        <div className="w-card" id="Card2">
          <div className="head">
            <h2>Expense Tracker</h2>
          </div>
          <hr />
          <div className="desc">
            <p>
              An expense tracker app which helps you to track your
              expenses and helps to maintain daily spents and you can access your tracker from anywhere anytime seamlessly.
            </p>
          </div>
          <div className="proj">
            <a href="https://github.com/PriyanshGupta2002/ExpenseTracker" className="btns" target="_blank" rel="noreferrer">
              View Project
            </a>
            <img src={github} alt="" />
          </div>
        </div>
        <div className="w-card" id="Card3">
          <div className="head">
            <h2>Inotebook</h2>
          </div>
          <hr />
          <div className="desc">
            <p>
            An online notebook app that aids you to make delete or update your notes online with user-friendly interface which you can access from anywhere anytime seamlessly.
            </p>
          </div>
          <div className="proj">
            <a href="https://github.com/PriyanshGupta2002/INotebook" target="_blank" rel="noreferrer" className="btns">
              View Project
            </a>
            <img src={github} alt="" />
          </div>
        </div>
        <div className="w-card" id="Card4">
          <div className="head">
            <h2>Daily News Planet</h2>
          </div>
          <hr />
          <div className="desc">
            <p>
              An online news app that helps to keep everyone up to date by knowing them what's happening in the world by providing a vast coverage of alternate sections of news.
            </p>
          </div>
          <div className="proj">
            <a href="https://github.com/PriyanshGupta2002/DailyNewsPlanet" rel="noreferrer" target="_blank" className="btns">
              View Project
            </a>
            <img src={github} alt="" />
          </div>
        </div>
        <div className="w-card" id="Card5">
          <div className="head">
            <h2>Text-Utils</h2>
          </div>
          <hr />
          <div className="desc">
            <p>
              Text-utils is a hands on utility website that helps you to play around with your text in any manner from counting number of characters to extract emails from paragraph.
            </p>
          </div>
          <div className="proj">
            <a href="https://github.com/PriyanshGupta2002/textutils" className="btns" target="_blank" rel="noreferrer">
              View Project
            </a>
            <img src={github} alt="" />
          </div>
        </div>
        <div className="w-card" id="Card6">
          <div className="head">
            <h2>Microsoft Clone</h2>
          </div>
          <hr />
          <div className="desc">
            <p>
              A microsoft website clone made with the help of tailwind css. It's a complete responsive website and is a exact replica of original microsoft website. It has a user-friendly interface.
            </p>
          </div>
          <div className="proj">
            <a href="https://github.com/PriyanshGupta2002/MicrosoftClone" className="btns" target="_blank" rel="noreferrer">
              View Project
            </a>
            <img src={github} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
