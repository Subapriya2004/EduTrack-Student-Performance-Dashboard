import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

const navigate = useNavigate();

const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
const [role,setRole] = useState("student");

const signup = ()=>{

const users = JSON.parse(localStorage.getItem("users")) || [];

const exist = users.find(u=>u.username===username);

if(exist){
alert("User already exists");
return;
}

const newUser={
username,
password,
role
};

users.push(newUser);

localStorage.setItem("users",JSON.stringify(users));

alert("Signup Success");

navigate("/login");

}

return(

<div className="container">

<h2>Signup</h2>

<input
placeholder="Username"
onChange={(e)=>setUsername(e.target.value)}
/>

<br/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<br/>

<select onChange={(e)=>setRole(e.target.value)}>

<option value="student">Student</option>
<option value="admin">Admin</option>

</select>

<br/>

<button onClick={signup}>Signup</button>

</div>

)

}

export default Signup;