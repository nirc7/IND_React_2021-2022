import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  //const [values, setValues] = useState({})

  const btnCount = () => {
    setCount(7);
  }

  useEffect(() => {
    console.log('count' , count);

  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {count}
        <button onClick={btnCount}>coutn++</button>
      </header>
    </div>
  );
}

export default App;
