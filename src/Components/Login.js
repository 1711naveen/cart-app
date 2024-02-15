import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [credentials, setCredentials] = useState({ username: "kminchelle", password: "0lelplR" });
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch('https://dummyjson.com/auth/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: credentials.username,  //kminchelle
                password: credentials.password  // 0lelplR
            })
        })
        const jsonData = await response.json();
        console.log(jsonData)
        if (jsonData) {
            localStorage.setItem('token', jsonData.token);
            navigate('/');
        }
    }

    const onchange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value })
    }

    return (
        <div className='container mt-5'>
            <h1>Login to Use App</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                    <input type="text" className="form-control" name='username' value={credentials.username} onChange={onchange} />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"
                        name='password' value={credentials.password} onChange={onchange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
