import logo from './logo.svg';
import './App.css';
import CCFroms from './ClassComps/CCFroms';
import CCPerson from './ClassComps/CCPerson';
import CCRefs from './ClassComps/CCRefs';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCRefs/>
        <CCPerson id={7} name={"8"} />
        <CCFroms />
      </header>
    </div>
  );
}

export default App;
