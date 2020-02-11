import React from "react";
import axios from 'axios';
import uuid from "uuid";
import AnimalInCare from "../AnimalInCare/AnimalInCare";

class AnimalIntakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      animals: [],
      date: new Date(),
      name: ""
    };
  }
  
  addAnimal = animalName => {
    const animal = {id: uuid.v4(), name: animalName, date: this.state.date.toDateString()}
    this.setState(prevState => ({
      animals: prevState.animals.concat(animal)
    }));
  }
  
  removeAnimal = index => {
    const animals = this.state.animals;
    animals.splice(index, 1);
    this.setState({ animals });
  };

  updateAnimal = (value) => {
    // Update the list of animals.  
    console.log({value})
  }

  handleChange = (e) => {
    this.setState({
        name: e.target.value
    });
  };

  handleSubmit = (e) => {
    if (this.state.name) {
      this.addAnimal(this.state.name)
      console.log(this.state.name)
      this.setState({
          name: ""
      });
    }
    e.preventDefault();
  }

  async componentDidMount() {

    const response = await axios.get('/data/animals.json');

    this.setState({
      animals: response.data
    })
  }

  render() {
    return (
      <>
        <h1>Animals currently in my care: {this.state.animals.length}</h1>

        <form className="animalForm" onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.name} onChange={e => this.handleChange(e)} />
            <input type="submit" value="Add Animal" />
        </form>

        <ul>
          {this.state.animals.map((animals, index) => 
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