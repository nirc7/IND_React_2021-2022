import React from 'react';

export default function FCPerson(props) {
    return (
        <div>
            <div>Person</div>
            <div>id={props.id}</div>
            <div>name={props.name}</div>
        </div>
    );
}
