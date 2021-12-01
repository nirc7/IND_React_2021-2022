import React from 'react';
import FCPersonData from './FCPersonData';

export default function FCPersonsList(props) {


  const getIdFromC = (id) => {
    props.sendId2Del(id);
  }

  let perosnsStr = props.persons.map(
    (per, ind) => <FCPersonData key={ind} id={per.id} name={per.name} sendId2Papa={getIdFromC} />);

  return (
    <div>
      {perosnsStr}
    </div>
  )
}
