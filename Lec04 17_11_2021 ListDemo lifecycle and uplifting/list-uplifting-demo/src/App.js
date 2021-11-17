import logo from './logo.svg';
import './App.css';
import CCParent from './ClassComps/CCParent';
import CCListDemo from './ClassComps/CCListDemo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCListDemo/> <br /> <br />
        <CCParent />
      </header>
    </div>
  );
}

export default App;
