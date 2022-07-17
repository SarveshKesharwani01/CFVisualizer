import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function Competitive() {
  const input1 = useRef(null);
  const input2 = useRef(null);
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    const fetchdata = async () => {
      const username1 = input1.current.value;
      const username2 = input2.current.value;
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
      }
    };
    fetchdata();
  }

  return (
    <div>
      <form method="post" action="/details" onSubmit={onSubmit}>
        <input
          type="text"
          name="handle"
          id="handle"
          placeholder="Handle 1"
          ref={input1}
        />
        <input
          type="text"
          name="handle"
          id="handle"
          placeholder="Handle 2"
          ref={input2}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
