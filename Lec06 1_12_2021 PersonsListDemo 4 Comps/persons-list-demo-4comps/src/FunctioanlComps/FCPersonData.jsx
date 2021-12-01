import React from 'react';

export default function FCPersonData({ id, name, sendId2Papa }) {

  //let {name} = props;

  const btnDelId = () => {
    sendId2Papa(id);
  }

  return (
    <div>
      id={id} name={name}  <button onClick={btnDelId}>X</button>
    </div>
  )
}
