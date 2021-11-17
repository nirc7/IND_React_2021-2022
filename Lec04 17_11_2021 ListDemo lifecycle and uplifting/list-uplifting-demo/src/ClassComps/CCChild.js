import React, { Component } from 'react'

export default class CCChild extends Component {

  btnTellPapa = (num) => {
    this.props.tellPapa(77);
  }

  render() {
    return (
      <div>
        <h3>Child</h3>
        <div>id={this.props.id}</div>
        <button onClick={this.btnTellPapa}>tell papa 77</button>
      </div>
    )
  }
}
