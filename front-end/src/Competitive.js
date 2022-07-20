import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ResponsiveContainer } from "recharts";
import CollapsibleExample from "./CollapsibleExample";
import Compareinput from "./input/Compareinput";
export default function Competitive() {
  const [username1,setUsername1] = useState(""); 
  const [username2, setUsername2] = useState(""); 
  const [exist1,setexist1] = useState(true);
  const [exist2,setexist2] = useState(true);
  function setUser1(val){
    setUsername1(val);
  }
  function setUser2(val){
    setUsername2(val); 
  }
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    const fetchdata = async () => {
      setexist1(true);
      setexist2(true);
      const response1 = await fetch(
        `https://codeforces.com/api/user.status?handle=${username1}&from=1&count=1`
      );
      const response2 = await fetch(
        `https://codeforces.com/api/user.status?handle=${username2}&from=1&count=1`
      );
      console.log(response1, response2);
      if (response1.ok && response2.ok) {
        navigate("/comparedetails", {
          state: { username1: username1, username2: username2 },
        });
      }else{
        if(response1.ok === false)setexist1(false);
        if(response2.ok === false)setexist2(false);
      }
    };
    fetchdata();
  }

  return (
    <div>
    
      <CollapsibleExample />
      <form method="post" action="/comparedetails" onSubmit={onSubmit} className="styling">
        <Compareinput setuser1={setUser1} setuser2={setUser2} setsubmit={onSubmit} exist1={exist1} exist2={exist2}/>
      </form>
    </div>
  );
}
