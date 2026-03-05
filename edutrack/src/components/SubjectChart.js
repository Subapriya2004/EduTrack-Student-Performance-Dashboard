import React from "react";
import {Bar} from "react-chartjs-2";

function SubjectChart({student}){

const data={

labels:["Math","Science","English"],

datasets:[{

label:"Marks",

data:[
student.math,
student.science,
student.english
],

backgroundColor:[
"blue",
"green",
"orange"
]

}]

}

return(

<div style={{width:"400px"}}>

<Bar data={data}/>

</div>

)

}

export default SubjectChart;