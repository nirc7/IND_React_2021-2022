import logo from './logo.svg';
import './App.css';

const apiUrl = 'http://localhost:53742/api/students/';

function App() {


  const btnGetAll = () => {

    console.clear();

    fetch(apiUrl, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          result.map(st => console.log(st.Name));
          console.log('result[0].FullName=', result[0].Name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnGetByID = () => {

    console.clear();

    fetch(apiUrl + "2", {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result[0].FullName=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPOST = () => {

    console.clear();


    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 77,
      Name: 'nir',
      Grade: 77
    };


    fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result[0].FullName=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnDelete = () => {

    console.clear();

    fetch(apiUrl + "2", {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);        
      },
        (error) => {
          console.log("err post=", error);
        });
  }

  const btnPut = () => {

    console.clear();


    const s = { //pay attention case sensitive!!!! should be exactly as the prop in C#!
      Id: 77,
      Name: 'nir',
      Grade: 77
    };


    fetch(apiUrl + "2", {
      method: 'PUT',
      body: JSON.stringify(s),
      headers: new Headers({
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json; charset=UTF-8'
      })
    })
      .then(res => {
        console.log('res=', res);
        console.log('res.status', res.status);
        console.log('res.ok', res.ok);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch btnFetchGetStudents= ", result);
          console.log('result[0].FullName=', result.Name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={btnGetAll}>Get ALL</button>
        <button onClick={btnGetByID}>Get 2</button>
        <button onClick={btnPOST}>POST</button>
        <button onClick={btnDelete}>Delete</button>
        <button onClick={btnPut}>Put</button>
      </header>
    </div>
  );
}

export default App;
