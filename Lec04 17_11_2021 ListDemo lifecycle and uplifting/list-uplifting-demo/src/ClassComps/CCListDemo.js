import React, { Component } from 'react'

const listPersons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];

export default class CCListDemo extends Component {



  render() {

    let personsStr = listPersons.map((per, ind) =>
      <li className="list-group-item" key={ind}>
        id={ind} name={per.name} -- {ind}
      </li>);

    return (
      <div style={{ fontSize: 25 }}>
        <ul className="list-group">
          {personsStr}
        </ul>
      </div>
    )
  }
}
