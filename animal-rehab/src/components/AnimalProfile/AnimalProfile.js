import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import AnimalProfileForm from './AnimalProfileForm';

export default props => {

  const { aid } = useParams();
  const animal = props.animals.find(animal => animal.id === parseInt(aid));

  if (animal) {
    return (
      <>
        <h2>{animal.name}</h2>
        <p>{`${animal.entry_at} - ${animal.exit_at}`}</p>
        <h3>Data Log Details</h3>
        <AnimalProfileForm
          logCreateHandler={props.logCreateHandler}
          animal={animal}
        />
        <section>
          {props.logDetails.map(logDetail => {
            if (logDetail.aid === animal.id) {
              return (
                <section>
                  <p>{logDetail.date}</p>
                  <p>{logDetail.description}</p>
                </section>
              );
            }
          })}
        </section>
      </>
    );
  } else {
    return <Redirect to="/animals" />;
  }
}

