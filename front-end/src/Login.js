import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import CollapsibleExample from "./CollapsibleExample";

export default function Login() {
  const input = useRef(null);
  const navigate = useNavigate();
  function onSubmit(event) {
    event.preventDefault();
    const fetchdata = async () => {
      const username = input.current.value;
      const response = await fetch(
        `https://codeforces.com/api/user.status?handle=${username}&from=1&count=1`
      );
      console.log(response);
      if (response.ok) {
        navigate("/details", { state: { username } });
      }
    };
    fetchdata();
  }

  return (
    <div>
      <CollapsibleExample/>
      <form method="post" action="/details" onSubmit={onSubmit}>
        <input
          type="text"
          name="handle"
          id="handle"
          placeholder="Codeforces Handle"
          ref={input}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
