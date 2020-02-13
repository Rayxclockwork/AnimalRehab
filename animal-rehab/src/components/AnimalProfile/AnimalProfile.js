import React from 'react';
import { Redirect, useParams } from 'react-router-dom';


export default props => {
  const { aid } = useParams();
  const animal = props.animals.find(animal => animal.id === parseInt(aid));

  if (animal) {
    return (
      <>
      <h2>{animal.name}</h2>
      <p>{`${animal.entry_at}`}</p>
      <button type="submit" onClick= {Date.now()}>Close Out Animal </button>
    

      <h3>Medication Details</h3>
      <form onSubmit={props.submitHandler}>
        <fieldset>
            <input name="name" type="text" placeholder="medication details" value={props.medDetails} onChange={props.medDetailsHandler}/>
            <button>Submit</button>            
        </fieldset>            
      </form>  
      <p>{animal.medDetails}</p>
      <h3>Data Log Details</h3>
      <form onSubmit={props.submitHandler}>
        <fieldset>
            <input name="name" type="text" placeholder="daily log" value={props.logDetails} onChange={props.logCreateHandler}/>
            <button>Submit</button>            
        </fieldset>            
      </form>  
      <p>{animal.logDetails}</p>
      </>
    );
  } else {
    // return <Redirect to="/animals" />;
    return null
  }
};
