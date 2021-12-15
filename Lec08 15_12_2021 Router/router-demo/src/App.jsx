import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import User from './Pages/User';

function App() {
  return (
    <div className="App">

      <div style={{ fontSize: 30, margin: 10, padding: 10 }}>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to={"/menu/" + Math.floor(Math.random() * 10) }>Menu</Link>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ border: 'solid 2px red', padding:15 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu/:userId" element={<Menu />} />
            <Route path='/user' element={<User/>} />
          </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
