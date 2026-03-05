import React from "react"
import {useNavigate} from "react-router-dom"

function StudentTable({students,setStudents}){

const navigate = useNavigate()

function deleteStudent(index){

const updated = students.filter((_,i)=>i!==index)

setStudents(updated)

}

function editStudent(index){

const name = prompt("Name",students[index].name)
const math = prompt("Math",students[index].math)
const science = prompt("Science",students[index].science)
const english = prompt("English",students[index].english)
const quiz = prompt("Quiz",students[index].quiz)
const assessment = prompt("Assessment",students[index].assessment)
const attendance = prompt("Attendance",students[index].attendance)

const updated=[...students]

updated[index]={
...updated[index],
name,
math:Number(math),
science:Number(science),
english:Number(english),
quiz:Number(quiz),
assessment:Number(assessment),
attendance:Number(attendance)
}

setStudents(updated)

}

return(

<table className="table">

<thead>

<tr>

<th>S.No</th>

<th>Name</th>

<th>Math (100)</th>
<th>Math Grade</th>

<th>Science (100)</th>
<th>Science Grade</th>

<th>English (100)</th>
<th>English Grade</th>

<th>Quiz (10)</th>

<th>Assessment (10)</th>

<th>Attendance (%)</th>

<th>Overall Grade</th>

<th>Status</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{students.map((s,i)=>(

<tr key={i}>

<td>{i+1}</td>

<td>{s.name}</td>

<td>{s.math}</td>
<td>{s.mathGrade}</td>

<td>{s.science}</td>
<td>{s.scienceGrade}</td>

<td>{s.english}</td>
<td>{s.englishGrade}</td>

<td>{s.quiz}</td>
<td>{s.assessment}</td>

<td>{s.attendance}%</td>

<td>{s.overallGrade}</td>

<td>{s.status}</td>

<td>

<button onClick={()=>editStudent(i)}>
Edit
</button>

<button onClick={()=>deleteStudent(i)}>
Delete
</button>

</td>

</tr>

))}

</tbody>

</table>

)

}

export default StudentTable