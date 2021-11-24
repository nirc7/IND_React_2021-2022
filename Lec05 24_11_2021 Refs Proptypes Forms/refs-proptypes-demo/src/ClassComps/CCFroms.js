import React, { Component } from 'react'

export default class CCFroms extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "insert your name"
    };
  }
  onTextChanged = (event) => {
    debugger;
    let es = event.target.value;
    let str  = es.toUpperCase().replace('6', '');
    this.setState({ userName:  str});
  }

  btnHelloUser = () => {
    alert('hello ' + this.state.userName);
    alert('hello ' + this.stam);//undefined
  }

  render() {
    return (
      <div>
        <form>
          not connected to state input <input type="text" name="stam" /><br />
          connected to state input WO onchange   <input type="text" name="userName" value={this.state.userName} /><br />
          connected to state input With onchange <input type="text" name="userName" value={this.state.userName} onChange={this.onTextChanged} /> <br />
          <button onClick={this.btnHelloUser}  >Push ME</button>
        </form>
      </div>
    )
  }
}
