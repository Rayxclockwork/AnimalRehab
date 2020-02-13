import React from 'react';
import {
  Link,
  Redirect,
  useParams
} from 'react-router-dom';
import AnimalProfileForm from './AnimalProfileForm';


export default props => {
  const { aid } = useParams();
  const animal = props.animals.find(animal => animal.id === parseInt(aid));

  if (animal) {
    return (
      <>
      <h2>Name: {animal.name}
      </h2>
      <p>
        {`Entry Date: ${animal.entry_at.slice(0, 10)}`}
      </p>
      <p>
        <button onClick={() => props.handleDeleteAnimal(aid)}>
          <Link to="/animals">Delete Animal </Link>
        </button> or 
        <button type="submit" onClick= {Date.now()}> Release Animal</button>
      </p>

      <h2>Medication Details</h2>
      <form onSubmit={props.submitHandler}>
        <fieldset>
            <input name="name" type="text" placeholder="medication details" value={props.medDetails} onChange={props.medDetailsHandler}/>
            <button>Submit</button>            
        </fieldset>            
      </form>  
      <p>{animal.medDetails}</p>
      <h3>Data Log Details</h3>
      <p>{animal.logDetails}</p>
      <AnimalProfileForm />

      </>
    );
  } else {
    return <Redirect to="/animals" />;
  }
};