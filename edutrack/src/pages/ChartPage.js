import React from "react";
import {useLocation} from "react-router-dom";
import {Bar} from "react-chartjs-2";
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function ChartPage(){

const location = useLocation();

const s = location.state;

const data={
labels:["Math","Science","English","Quiz","Assessment","Attendance"],

datasets:[{
label:"Student Performance",
data:[
s.math,
s.science,
s.english,
s.quiz,
s.assessment,
s.attendance
]
}]
};

return(

<div>

<h2>{s.name} Performance</h2>

<p><b>Attendance:</b> {s.attendance}%</p>
<p><b>Grade:</b> {s.grade}</p>

<Bar data={data}/>

</div>

)

}

export default ChartPage;
