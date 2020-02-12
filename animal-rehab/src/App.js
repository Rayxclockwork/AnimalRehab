import React from 'react';
import Home from './components/Home/Home';
import Dose from './components/Dose/Dose';
import Medicine from './components/Medicine/Medicine';
import Animals from './components/Animals/Animals';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AnimalDetails from './components/AnimalDetails/AnimalDetails';
import './App.scss';
import './components/Home/Home.scss';
import './components/Dose/Dose.scss';
import './components/Medicine/Medicine.scss';
import './components/Animals/Animals.scss';
import './components/AnimalDetails/AnimalDetails.scss';
import './components/Footer/Footer.scss';
import './components/LogIn/LogIn.scss';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom';

import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoggedIn: false
    };
  }
  

  render() {
    console.log('hi')
    return (
      <Router>
        <div>
            <Header/>
            <Nav />
               <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/dose">
                  <Dose />
                </Route>
                <Route path="/medicine">
                  <Medicine />
                </Route>
                <Route path="/animals">
                  <Animals />
                </Route>
                <Route path="/animalDetails">
                  <AnimalDetails />
                </Route>
                <Route path="/log">
                  <LogIn />
                </Route>
              </Switch>
            <Footer/>
        </div>
      </Router>
    );
  }
}

function Nav(props) {
  return (
      <nav>
          <ul id="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/dose">Dose</NavLink></li>
          <li><NavLink to="/medicine">Medicine</NavLink></li>
          <li><NavLink to="/animals">Animals</NavLink></li>
          <li><NavLink to="/log">Log in</NavLink></li>
          </ul>
      </nav>
  )
}

export default App;
