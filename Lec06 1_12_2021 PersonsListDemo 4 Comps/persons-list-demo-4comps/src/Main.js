import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FCPersonsList from './FunctioanlComps/FCPersonsList';
import FCInputName from './FunctioanlComps/FCInputName';

const persons = [{ id: 1, name: 'avi' }, { id: 2, name: 'benny' }, { id: 3, name: 'charlie' }];
//const persons = [];

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: persons,
      count: persons.length
    }
  }

  getName = (newName) => {
    let newCount = this.state.count + 1;
    let newPersons = [...this.state.persons, { id: newCount, name: newName }];

    this.setState({
      persons: newPersons,
      count: newCount
    });
  }


  getId2Del = (id) => {
    let newPersons = this.state.persons.filter(per => per.id !== id);
    this.setState({ persons: newPersons });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <FCInputName sendName={this.getName} />
          <FCPersonsList persons={this.state.persons} sendId2Del={this.getId2Del} />
        </header>
      </div>
    );
  }
}
