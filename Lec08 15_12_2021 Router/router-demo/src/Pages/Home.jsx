import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();

    const btngo2U = () => {

        var userObj = {
            userId: 1,
            userName: "avi"
        };

        navigate('/user' ,
            { state: userObj });
    }


    const btngo2A=()=>{
        navigate('/about');
    }

    return (
        <div>
            <h2>Home</h2>
            <button onClick={btngo2U} >go 2 User W some Data</button> <br />
            <button onClick={btngo2A} >go 2 about</button>
        </div>
    )
}
