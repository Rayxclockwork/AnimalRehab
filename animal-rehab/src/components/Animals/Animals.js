import React from "react";
import axios from 'axios';
import uuid from "uuid";
import AnimalInCare from "../AnimalInCare/AnimalInCare";

//when we have up and running back-end
const url = 'enter back-end api here'

class AnimalIntakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: "",
      animals: [],
      date: new Date(),
      time: new Date()
    };
  }
  

  //use axios with async to get and post when back-end is running

  addAnimal = animalName => {
    let { date, time } = this.state
    const animal = {
      id: uuid.v4(), 
      name: animalName, 
      date: date.toDateString(), 
      time: time.toLocaleTimeString()
    }

    this.setState(prevState => ({
      animals: prevState.animals.concat(animal)
    }));

  }
  
  removeAnimal = (index) => {
    //need to use id instead of splicing index
    let { animals } = this.state
    animals.splice(index, 1);
    this.setState({ animals });
    // this.setState({ animals: animals.filter(id => animals.id !== id) })
  };

  updateAnimal = (newAnimal) => {
    this.setState({
      animals: this.state.animals.map(animal => {
          if (animal.id === newAnimal.id) {
              return newAnimal;
          } else {
              return animal;
          }
      })
    })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    if (this.state.name) {
      this.addAnimal(this.state.name)
      this.setState({ name: "" });
    }
    e.preventDefault();
  }

  async componentDidMount() {
    //dummy data to render animals
    const response = await axios.get('/data/animals.json');

    this.setState({
      animals: response.data
    })
  }

  render() {
    let { animals, name } = this.state
    return (
      <>
        <h1>Animals currently in my care: {animals.length}</h1>

        <form className="animalForm" onSubmit={this.handleSubmit}>
            <input type="text" value={name} onChange={e => this.handleChange(e)} />
            <input type="submit" value="Add Animal" />
        </form>

        <ul>
          {animals.map((animals, index) => 
            <AnimalInCare 
                removeAnimal={this.removeAnimal}
                updateAnimal={this.updateAnimal} 
                key={animals.id} 
                animal={animals} 
                index={index}
              />
            )}
        </ul>
      </>
    );
  }
}




export default AnimalIntakeForm;