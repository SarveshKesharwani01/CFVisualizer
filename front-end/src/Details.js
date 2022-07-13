import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Show from './Show'
export default function Details(){
    const {state} = useLocation();
    const [user, setUser] = useState([]);
    const {username} = state;
    useEffect(() => {
        const fetchdata = async() =>{
            const response = await fetch("https://codeforces.com/api/user.rating?handle=" + username);
            const userdata = await response.json();
            setUser(userdata.result);
   }
        fetchdata();
    }, [username]);
    console.log(user); 
    return (
        <div>
            
           {user.map((contest) => (
              <Show name={contest.contestName} rank={contest.rank} old={contest.oldRating} new={contest.newRating}/>
           ))}
        </div>
    )
    
}