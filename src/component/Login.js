import React from 'react';
import "./Login.css";
import {auth,provider} from "../firebase";
function Login() {
 
    const signIn = () => {
        // sign in
    }
     
  return <div className="login" >
      <div className="login_logo" >
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"  ></img>
     <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-2019.jpg"></img>
     </div>
     <button  type="submit" onClick={signIn} >Sign in</button>
       </div>;
}

export default Login;
