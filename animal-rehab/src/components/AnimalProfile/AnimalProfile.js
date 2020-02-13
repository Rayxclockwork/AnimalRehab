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
      <h2>{animal.name}</h2>
      <p>{`${animal.entryAt}`}</p>
      <button type="submit" onClick= {Date.now()}>Close Out Animal </button>
      <Link to="/animals" onClick={() => props.handleDeleteAnimal(aid)}>Delete Animal</Link>

      <h3>Medication Details</h3>
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