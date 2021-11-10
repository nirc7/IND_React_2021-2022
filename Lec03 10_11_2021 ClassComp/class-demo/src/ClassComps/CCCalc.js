import React, { Component } from 'react';

export default class CCCalc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  chgNum1 = (e) => {
    this.setState({ num1: parseInt(e.target.value) });
  }

  chgNum2 = (e) => {
    this.setState({ num2: parseInt(e.target.value) });
  }

  btnAdd2Nums = () => {
    this.setState({ result: this.state.num1 + this.state.num2 });
  }

  render() {
    return (
      <div>
        <div>Calc</div>
        NUM1: <input type="text" onChange={this.chgNum1} />
        NUM2: <input type="text" onChange={this.chgNum2} /> <br />
        <button onClick={this.btnAdd2Nums}>+</button>
        <div>RESULT={this.state.result}</div>
      </div>
    );
  }
}