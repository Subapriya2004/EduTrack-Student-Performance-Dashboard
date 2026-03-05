import React from "react";
import { useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function Dashboard(){

const navigate = useNavigate();

const students = JSON.parse(localStorage.getItem("students")) || [];

const totalStudents = students.length;

const passStudents = students.filter(
(s)=>s.status === "Pass"
).length;

const failStudents = students.filter(
(s)=>s.status === "Fail"
).length;

/* Pass Fail Chart */

const data = {
labels:["Pass Students","Fail Students"],
datasets:[
{
label:"Students",
data:[passStudents,failStudents]
}
]
};

/* Subject Average */

const avgMath =
students.reduce((a,b)=>a+(b.math||0),0)/(students.length||1)

const avgScience =
students.reduce((a,b)=>a+(b.science||0),0)/(students.length||1)

const avgEnglish =
students.reduce((a,b)=>a+(b.english||0),0)/(students.length||1)

const avgQuiz =
students.reduce((a,b)=>a+(b.quiz||0),0)/(students.length||1)

const avgAssessment =
students.reduce((a,b)=>a+(b.assessment||0),0)/(students.length||1)

/* Subject Chart */

const subjectData = {
labels:["Math","Science","English","Quiz","Assessment"],
datasets:[
{
label:"Average Marks",
data:[
avgMath,
avgScience,
avgEnglish,
avgQuiz,
avgAssessment
]
}
]
};

const options = {
responsive:true,
maintainAspectRatio:false
};

const logout = ()=>{
localStorage.removeItem("isLoggedIn");
navigate("/");
};

return(

<div className="dashboard">

<div className="header">

<h1>EduTrack – Student Performance Dashboard</h1>

<div className="navButtons">

<button
onClick={()=>navigate("/students")}
>
Student Data
</button>

<button
onClick={logout}
>
Logout
</button>

</div>

</div>

<div className="cards">

<div className="card">
<h3>Total Students</h3>
<p>{totalStudents}</p>
</div>

<div className="card">
<h3>Pass Students</h3>
<p>{passStudents}</p>
</div>

<div className="card">
<h3>Fail Students</h3>
<p>{failStudents}</p>
</div>

</div>

{/* Charts */}

<div className="charts">

<div className="chartBox">

<h3>Pass / Fail</h3>

<div className="pieSize">
<Pie data={data} options={options}/>
</div>

</div>

<div className="chartBox">

<h3>Subject Performance</h3>

<div className="pieSize">
<Pie data={subjectData} options={options}/>
</div>

</div>

</div>

</div>

)

}

export default Dashboard;