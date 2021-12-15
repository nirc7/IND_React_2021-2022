import React from 'react';
import { useLocation } from 'react-router-dom';


export default function User(props) {
  const { state } = useLocation();
  console.log(state);
  let userObj = state;

  return (
    <div>
      <h2>User</h2>
      user ID = {userObj.userId} <br />
      user name = {userObj.userName}
    </div>
  )
}
