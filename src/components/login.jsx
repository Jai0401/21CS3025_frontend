import { useState } from "react";
import axios from 'axios';

function Login() {

    const {password, setpassword} = useState('');
    const {userID, setuserID} = useState('');

    
    function signUp() {
        axios.post(`http://localhost:3000/users/${userID}/login`,{Body:
            {
                "password": password
            }})
    }
    return (
      <>
       <h1>Login</h1>
       <input type="email" placeholder="password" onChange={()=>setpassword()}></input>
       <button onClick={signUp}>Submit</button>
      </>
    )
}
  export default Login;