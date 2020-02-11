import React from "react";
import axios from 'axios';
import uuid from "uuid";

function AnimalInCare(props) {

  return (
    <>
      <li className="animals">
        <p>{props.animal.name}: {props.animal.date}</p>
      {<button id="delete"onClick={() => props.removeAnimal(props.index)}>Delete</button>}

      </li>
    </>
  )
}


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
    this.setState({date: new Date()})
  }
  
  removeAnimal = index => {
    const animals = this.state.animals;
    animals.splice(index, 1);
    this.setState({ animals });
  };

  handleChange = (e) => {
    this.setState({
        name: e.target.value
    });
  };

  handleSubmit = (e) => {
    if (this.state.name) {
      this.addAnimal(this.state.name)
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
            <input type="text" value={this.state.value} onChange={e => this.handleChange(e)} />
            <input type="submit" value="Add Animal" />
        </form>

        <ul>
          {this.state.animals.map((animals, index) => 
            <AnimalInCare 
                removeAnimal={this.removeAnimal} 
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