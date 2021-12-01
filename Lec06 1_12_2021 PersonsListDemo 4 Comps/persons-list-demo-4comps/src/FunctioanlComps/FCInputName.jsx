import React from 'react'

export default function FCInputName(props) {

  let name;

  const chgTxtName = (e) => {
    name = e.target.value;
  }

  const btnAddPerson = () => {    
    props.sendName(name);
  }

  return (
    <div style={{
      border: 'aqua dashed  3px',
      margin: 15, padding: 10,
      borderRadius: 15
    }}>
      NAME: <input type="text" onChange={chgTxtName} /> <br /> <br />
      <button onClick={btnAddPerson}>Add Person</button>
    </div>
  )
}
