import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';

import axios from 'axios';

import Home from './components/Home/Home';
import Dose from './components/Dose/Dose';
import Medicine from './components/Medicine/Medicine';
import AnimalProfile from './components/AnimalProfile/AnimalProfile';
import Animals from './components/Animals/Animals';
import LogIn from './components/LogIn/LogIn';
import Footer from './components/Footer/Footer';

import './App.scss';
import './components/Home/Home.scss';
import './components/Dose/Dose.scss';
import './components/Medicine/Medicine.scss';
import './components/Animals/Animals.scss';
import './components/Footer/Footer.scss';
import './components/LogIn/LogIn.scss';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
      medicine: [],
      isLoggedIn: false
    };
  }

  async componentDidMount() {
    const animalsResponse = await axios.get('/data/animals.json');
    const medicineResponse = await axios.get('/data/medicine.json');

    this.setState({
      animals: animalsResponse.data,
      medicine: medicineResponse.data
    });
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Animal Rehab</h1>
            <Nav />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/dose">
                  <Dose medicine={this.state.medicine} />
                </Route>
                <Route path="/medicine">
                  <Medicine medicine={this.state.medicine} />
                </Route>
                <Route exact path="/animals">
                  <Animals animals={this.state.animals} />
                </Route>
                <Route path="/animals/:aid">
                  <AnimalProfile animals={this.state.animals} />
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
