
export default function FCPerson(props) {

  let num = 7;
  num++;
  num += props.id;
  console.log(num);
  //props.id=9; //ERROR  -- READ ONLY!!!

  if (props.id !== 7) {
    return <div>im 8!!!</div>
  }

  function btnAddOne() {
    num++;
    console.log(num);
  }

  function chgTxt(e) {
    console.log(e.target.value);
  }

  return (
    <div style={{
      border: 'solid green 2px',
      margin: 15,
      padding: 10,
      fontSize: 25,
      borderRadius: 10
    }}>
      <div>FCPerson</div>
      <div>ID={props.id}</div>
      <div>NAME={props.name}</div>
      <div>Num={num}</div>
      <button onClick={btnAddOne}>Add One</button>
      <input type="text" onChange={chgTxt} />
    </div>
  );
}