import React from 'react';
import { Redirect, useParams } from 'react-router-dom';


export default props => {
  const { aid } = useParams();
  const animal = props.animals.find(animal => animal.id === parseInt(aid));

  if (animal) {
    return (
      <>
      <h2>{animal.name}</h2>
      <p>{`${animal.entryAt} - ${animal.exitAt}`}</p>
      <h3>Medication Details</h3>
      <p>{animal.medDetails}</p>
      <h3>Data Log Details</h3>
      <p>{animal.logDetails}</p>
      </>
    );
  } else {
    return <Redirect to="/animals" />;
  }
};
