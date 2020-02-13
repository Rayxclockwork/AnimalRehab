import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import axios from 'axios';

import Home from './components/Home/Home';
import Dose from './components/Dose/Dose';
import Medicine from './components/Medicine/Medicine';
import AnimalProfile from './components/AnimalProfile/AnimalProfile';
import Animals from './components/Animals/Animals';
import LogInForm from './components/LogInForm/LogInForm';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import './App.scss';
import './components/Home/Home.scss';
import './components/Dose/Dose.scss';
import './components/Medicine/Medicine.scss';
import './components/Animals/Animals.scss';
import './components/Footer/Footer.scss';
import './components/Header/Header.scss';
import './components/LogInForm/LogInForm.scss';


const url = 'http://64.225.2.201:8000/api/';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animals: [],
      medicine: [],
      isLoggedIn: false,
      medDetails: [],
      logDetails: [],
      accessToken: '',
      refreshToken:'',
    };

    this.animalProfile = this.animalProfile.bind(this);
    this.animalCreateHandler = this.animalCreateHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.logCreateHandler = this.logCreateHandler.bind(this);
    this.medDetailsHandler = this.medDetailsHandler.bind(this);
    this.animalProfile = this.animalProfile.bind(this);
    this.loginHandler = this.loginHandler.bind(this);
    this.renderAnimals = this.renderAnimals.bind(this);


  }

  async componentDidMount() {
    const medicineResponse = await axios.get('/data/medicine.json');

    this.setState({
      medicine: medicineResponse.data
    });
  }

  animalProfile() {
    console.log('Animal profile');
  }

  animalCreateHandler(name) {
    const sortedAnimals = this.state.animals.sort((a,b) => a.id < b.id)
    const newId = sortedAnimals[sortedAnimals.length-1].id
    const newAnimal = {
      id : newId,
      name: name,
      entryAt: String(Date.now()),
      exitAt: " "
    }
    console.log(newAnimal);
    this.setState({
        animals: this.state.animals.concat([newAnimal])
    })
  }


  logCreateHandler(event) {
    const newLog = {
      logDetails: event.target.value,
      logDate: String(Date.now()),
    }
    this.setState({
        logDetails: this.state.logDetails.concat([newLog])
    })
  }


  medDetailsHandler(event) {
    const newMedDetails = {
      medDetails: event.target.value,
      entryDate: String(Date.now()),
    }
    this.setState({
        medDetails: this.state.medDetails.concat([newMedDetails])
    })
  }


  submitHandler(event) {
      event.preventDefault();
      const data = {...this.state};
      this.props.onSubmit(data);
  }

  
  async loginHandler({access, refresh}) {
    this.setState({
        accessToken : access,
        refreshToken : refresh,
    });

    try {
        const headers = {
            headers: {
                Authorization: `Bearer ${this.state.accessToken}`
            }
        }
        const response = await axios.get(url + 'v1/animals/', headers);
        console.log(response.data);

        this.setState({
            animals: response.data
        });

    } catch (error) {
        console.error('you have an error');
    }
  }

  renderAnimals(props) {

    if (!this.state.accessToken) {
        return <Redirect to="/log" />
    }

    const animalId = parseInt(props.match.params.id);

    const animal = this.state.animals && this.state.animals.find(animal => animal.id === animalId);

    if (animal) {
        return <Animals animal={animal} />
    } else {
        return <Redirect to="/" />
    }
  }


  render() {

    let { medicine, animals } = this.state

    return (
      <Router>
        <div>
            <Header />
            <Nav />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/dose">
                  <Dose />
                </Route>
                <Route path="/medicine">
                  <Medicine medicine={medicine} />
                </Route>
                <Route exact path="/animals">



                    {this.state.accessToken ?
                      <Animals animals={animals} onSubmit={this.animalCreateHandler} /> :
                       <LogInForm onSuccess={this.loginHandler} />}               

                </Route>
                <Route path="/animals/:aid" render={this.renderAnimals}>
                  <AnimalProfile animals={animals} />
                </Route>
                <Route path="/animals/:aid" render={this.animalProfile} />

                <Route path="/animals/:aid"onSubmit={this.state.logDetails.onSubmit} render={this.logDetails} />
                <Route path="/animals/:aid"onSubmit={this.state.medDetails.onSubmit} render={this.medDetails} />

                <Route path="/log">
                  <LogInForm />
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