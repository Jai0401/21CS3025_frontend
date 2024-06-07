import { useState } from "react";
import axios from 'axios';

function Login() {
    const [password, setPassword] = useState('');
    const [userID, setUserID] = useState('');

    function login() {
        axios.post(`http://localhost:3000/users/${userID}/login`, {
            password: password
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }

    return (
        <>
            <h1>Login</h1>
            <input
                type="text"
                placeholder="User ID"
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={login}>Submit</button>
        </>
    );
}

export default Login;
