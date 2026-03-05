import React from "react";

function StudentDashboard(){

const students = JSON.parse(localStorage.getItem("students")) || [];

const currentUser = localStorage.getItem("currentUser");

/* if no user logged */

if(!currentUser){
return <h2>Please Login First</h2>
}

/* find student */

const student = students.find(
(s)=> s.name && s.name.toLowerCase() === currentUser.toLowerCase()
);

if(!student){
return <h2>No Data Found</h2>
}

return(

<div className="studentDashboard">

<h1>Student Dashboard</h1>

<div className="studentCard">

<h2>{student.name}</h2>

<p>Math : {student.math}</p>
<p>Science : {student.science}</p>
<p>English : {student.english}</p>
<p>Quiz : {student.quiz}</p>
<p>Assessment : {student.assessment}</p>
<p>Attendance : {student.attendance}%</p>

<h3>Status : {student.status}</h3>

</div>

</div>

)

}

export default StudentDashboard;