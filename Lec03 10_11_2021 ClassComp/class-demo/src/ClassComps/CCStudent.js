import React, { Component } from 'react';

export default class CCStudnet extends Component {
  constructor(props) {
    super(props);

    let num = 7;    //local variable
    this.number = 8;//Field
    this.state = {
      id: 7,
      name: 'avi'
    };
  }

  btnAddOne = () => {
    //this.setState({ id: 100 });
    //this.setState({ id: this.state.id + 1 });
    this.setState((prev) =>
    ({
      id: prev.id + 1,
      age: 30
    }));
    //code....
    //this.settae(....);
  }

  render() {
    return (
      <div style={{
        border: 'solid red 2px',
        margin: 15,
        padding: 10,
        fontSize: 25,
        borderRadius: 10
      }}>
        <div>CCStudent</div>
        <div>grade={this.props.grade}</div>
        <button onClick={this.btnAddOne}>AddOne</button>
        <div>Id= {this.state.id}</div>
        <div>age= {this.state.age}</div>
      </div>
    );
  }
}