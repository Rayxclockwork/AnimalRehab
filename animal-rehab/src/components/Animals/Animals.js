import React from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const url = '/data/animals.json';

class AnimalTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      animals: []
    };
  }
  
  async componentDidMount() {
    const response = await axios.get(url);

    this.setState({
      animals: response.data
    });
  }

  render() {
    return (
      <>
        <h1>Animals currently in care: {this.state.animals.length}</h1>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Entry date</th>
              <th>Exit date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.animals.map(animal => (
              <tr>
                <td>{animal.id}</td>
                <td>
                  <Link to={`/animals/${animal.id}`}>{animal.name}</Link>
                </td>
                <td>{animal.entryAt}</td>
                <td>{animal.exitAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default AnimalTable;
