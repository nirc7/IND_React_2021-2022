import React from 'react';
import { useParams } from 'react-router';


export default function Menu() {
  const params = useParams();
  return (
    <div>
      <h2>Menu</h2>
      user id = {params.userId}
    </div>
  )
}
