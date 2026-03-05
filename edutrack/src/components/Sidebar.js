import {Link} from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h2>EduTrack</h2>

<Link to="/dashboard">Dashboard</Link>

<Link to="/chart">Charts</Link>

</div>

)

}

export default Sidebar;