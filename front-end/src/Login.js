import React, { useState } from "react";    
import { useNavigate } from "react-router-dom";


export default function Login(){
    
    const [username, setusername] = useState("");
    const navigate = useNavigate();
    function onSubmit(){
        // event.preventDefault(); 
        navigate("/details", {state: {username: username}});
    }
  
    return (
       <div> 
        <form  method="post" action="/details" onSubmit={onSubmit} >
        <input type="text" name="handle" id="handle" placeholder="Codeforces Handle" onChange={e => setusername(e.target.value)}/> 
        <button type="submit" >Submit</button>
        
        </form>
        </div>
    )
}


