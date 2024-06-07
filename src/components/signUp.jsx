import { useState } from "react";
import axios from 'axios';

function SignUp() {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function signUp() {
        axios.post('http://localhost:3030/signup', {
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.error(err));
    }

    return (
        <>
            <h1>SignUp</h1>
            <input
                type="text"
                placeholder="firstname"
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
            />
            <input
                type="text"
                placeholder="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
            />
            <input
                type="text"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={signUp}>Submit</button>
        </>
    );
}

export default SignUp;
