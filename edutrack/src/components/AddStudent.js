import React,{useState} from "react";

function AddStudent({students,setStudents}){

const [name,setName]=useState("")
const [math,setMath]=useState("")
const [science,setScience]=useState("")
const [english,setEnglish]=useState("")
const [quiz,setQuiz]=useState("")
const [assessment,setAssessment]=useState("")
const [attendance,setAttendance]=useState("")

function getGrade(mark){

if(mark < 35) return "F"
if(mark < 45) return "E"
if(mark < 55) return "D"
if(mark < 65) return "C"
if(mark < 75) return "B"
if(mark < 85) return "A"
if(mark < 92) return "S"
return "O"

}

function addStudent(e){

e.preventDefault()

const m = Number(math)
const s = Number(science)
const e1 = Number(english)

const mathGrade = getGrade(m)
const scienceGrade = getGrade(s)
const englishGrade = getGrade(e1)

const avg = (m+s+e1)/3
const overallGrade = getGrade(avg)

let status="Pass"

if(m<35 || s<35 || e1<35){
status="Fail"
}

const newStudent={
name,
math:m,
science:s,
english:e1,
quiz:Number(quiz),
assessment:Number(assessment),
attendance:Number(attendance),
mathGrade,
scienceGrade,
englishGrade,
overallGrade,
status
}

const updatedStudents=[...students,newStudent]

setStudents(updatedStudents)

// 🔴 localStorage save
localStorage.setItem("students",JSON.stringify(updatedStudents))

setName("")
setMath("")
setScience("")
setEnglish("")
setQuiz("")
setAssessment("")
setAttendance("")

}

return(

<form onSubmit={addStudent} className="form">

<input placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)} />

<input placeholder="Math" value={math} onChange={(e)=>setMath(e.target.value)} />

<input placeholder="Science" value={science} onChange={(e)=>setScience(e.target.value)} />

<input placeholder="English" value={english} onChange={(e)=>setEnglish(e.target.value)} />

<input placeholder="Quiz" value={quiz} onChange={(e)=>setQuiz(e.target.value)} />

<input placeholder="Assessment" value={assessment} onChange={(e)=>setAssessment(e.target.value)} />

<input placeholder="Attendance %" value={attendance} onChange={(e)=>setAttendance(e.target.value)} />

<button>Add Student</button>

</form>

)

}

export default AddStudent