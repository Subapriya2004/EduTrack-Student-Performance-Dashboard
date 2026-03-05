import React from "react";
import {Pie} from "react-chartjs-2";

function PassFailChart({students}){

const pass = students.filter(
s => (s.math+s.science+s.english)/3 >=35
).length;

const fail = students.length-pass;

const data = {

labels:["Pass","Fail"],

datasets:[{

data:[pass,fail],

backgroundColor:["green","red"]

}]

}

return(

<div style={{width:"300px"}}>

<Pie data={data}/>

</div>

)

}

export default PassFailChart;