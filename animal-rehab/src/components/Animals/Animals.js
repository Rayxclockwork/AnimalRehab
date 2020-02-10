import React from "react";
import axios from 'axios';

function AnimalInCare(animals) {

  return (
    <>
      <li className="animals">
        <p>{animals.animal.name}</p>
      </li>
    </>
  )
}

class AnimalIntakeForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { animals: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
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
        <form onSubmit={this.handleSubmit}>
          <label>
            Animal:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <h1>Animals currently in my care:</h1>
        <ul>
          {this.state.animals.map(animals => <AnimalInCare key={animals.id} animal={animals} />)}
        </ul>
      </>
    );
  }
}




export default AnimalIntakeForm;