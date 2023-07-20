import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

export let Firsthookexecutions=()=>
{
// const[user,setUser]=useState("");

//     const printavalue=()=>
//     {
//         alert("your instagram user name is "+user);
//     }

//     const setavalue=(temp)=>
//     {
//         setUser(temp.target.value)
//     }

//     return(
//         <>
//             <input className="form-control" placeholder="enter your username" name={user} onChange={setavalue} />
//             <p>{user}</p> 
//             <button className="btn btn-outline-success" onClick={printavalue}>Get a Value</button>
//         </>
//     );
    const[studentdetails,setStudentdetails]=useState({
        studentname:"Manoj",
        studentDept:"BCA",
        studentcity:"Namakkal",
        studentcgpa:89.9
    });

    return(
        <>
        <input placeholder="enter your favoriate season" className="form-control" />
        <button className="btn btn-outline-dark fw-bold">Check your Favoriate Season</button>
    
        </>
    )
}