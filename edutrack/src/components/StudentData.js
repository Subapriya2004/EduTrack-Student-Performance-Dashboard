import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AddStudent from "../components/AddStudent";
import StudentTable from "../components/StudentTable";

function StudentData() {

const navigate = useNavigate();

const [students, setStudents] = useState(
JSON.parse(localStorage.getItem("students")) || []
);

const [search, setSearch] = useState("");

useEffect(() => {
localStorage.setItem("students", JSON.stringify(students));
}, [students]);

return (

<div className="studentPage">

{/* Header */}

<div className="header">

<h1>Student Data</h1>

<button
className="homeBtn"
onClick={() => navigate("/dashboard")}
>
Home
</button>

</div>

{/* Search */}

<input
placeholder="Search Student"
value={search}
onChange={(e) => setSearch(e.target.value)}
/>

{/* Add Student */}

<AddStudent
students={students}
setStudents={setStudents}
/>

{/* Student Table */}

<StudentTable
students={students.filter((s) =>
s.name.toLowerCase().includes(search.toLowerCase())
)}
setStudents={setStudents}
/>

</div>

);
}

export default StudentData;