import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");

const login = () => {

/* Get all users */

const users = JSON.parse(localStorage.getItem("users")) || [];

/* Find matching user */

const foundUser = users.find(
(u)=>u.username === username && u.password === password
);

if(foundUser){

localStorage.setItem("isLoggedIn",true);
localStorage.setItem("role",foundUser.role);

/* save logged user */
localStorage.setItem("loggedUser",JSON.stringify(foundUser));

/* important line for student dashboard */
localStorage.setItem("currentUser",foundUser.username);

/* Admin login */

if(foundUser.role === "admin"){
navigate("/dashboard");
}

/* Student login */

else{
navigate("/studentDashboard");
}

}else{
alert("Invalid Login");
}

};

return (

<div className="container">

<h2>Login</h2>

<input
type="text"
placeholder="Username"
value={username}
onChange={(e)=>setUsername(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<button onClick={login}>Login</button>

<p>
Don't have account? <Link to="/signup">Signup</Link>
</p>

</div>

);
}

export default Login;