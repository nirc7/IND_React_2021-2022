import logo from './logo.svg';
import './App.css';
import FCPerson from './FunctionalComps/FCPerson';
import CCStudnet from './ClassComps/CCStudent';
import CCCalc from './ClassComps/CCCalc';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CCCalc/>
        <CCStudnet grade={99}/>
        <FCPerson id={7} name={"avi"} />
        <FCPerson id={8} name={"benny"} />
      </header>
    </div>
  );
}

export default App;
