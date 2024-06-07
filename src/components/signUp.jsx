import { useState} from "react";
import axios from 'axios';


function SignUp() {
    const {firstname, setfirstname} = useState('example');
    const {lastname, setlastname} = useState('example');
    const {email, setemail} = useState('example@gmail.com');
    const {password, setpassword} = useState('1234');

    
    function signUp() {
        axios.post('http://localhost:3030/signup',{Body:
            {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "password": password
            }}).then((res)=> console.log(res.data));
    }
    return (
      <>
       <h1>SignUp</h1>
       <input type="text" placeholder="firstname" onChange={()=>setfirstname()}></input>
       <input type="text" placeholder="lastnanme" onChange={()=>setlastname()}></input>
       <input type="text" placeholder="email" onChange={()=>setemail()}></input>
       <input type="email" placeholder="password" onChange={()=>setpassword()}></input>
       <button onClick={signUp}>Submit</button>
      </>
    )
  }
  
  export default SignUp;