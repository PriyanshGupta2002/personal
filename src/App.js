
import './App.css';
import Footer from './Components/Footer/Footer';
import Intro from './Components/Intro/Intro';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './Components/About/About';
import Work from './Components/Work/Work';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <div className="App">
      <Router>
     <Navbar/>

     <Switch>

     <Route exact path="/">
     <Intro/>
     <Skills/>
    </Route>
     <Route exact path="/personal">
     <Intro/>
     <Skills/>
    </Route>

          <Route exact path="/about">
            <About/>
          </Route>

          <Route exact path="/work">
           <Work/>
          </Route>
          <Route exact path="/contact">
           <Contact/>
          </Route>
        
        </Switch>


    <Footer/>
    </Router>
    </div>
  );
}

export default App;
