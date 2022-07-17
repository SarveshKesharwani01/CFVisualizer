import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Chartbar from "./Chartbar";
import { PieChart, Pie } from "recharts";
import Show from "./Show";
export default function Details() {
  const { state } = useLocation();
  const [user, setUser] = useState([]);
  const [sub, setSub] = useState([]);
  const [lang, setLang] = useState([]);
  const [rating, setRating] = useState([]);
  const [problem_num, setProblem_num] = useState([]);
  const { username } = state;
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        `https://codeforces.com/api/user.rating?handle=${username}`
      );
      const submission = await fetch(
        `https://codeforces.com/api/user.status?handle=${username}&from=1&count=5000`
      );
      const userdata = await response.json();
      const submission_data = await submission.json();
      const submit = new Map();
      const language = new Map();
      const rate = new Map();
      const problem_number = new Map();

      submission_data.result.forEach((sub) => {
        let cnt = submit.get(sub.verdict) ?? 0;
        let num = language.get(sub.programmingLanguage) ?? 0;
        let cnt1 = rate.get(sub.problem.rating) ?? 0;
        let cnt2 = problem_number.get(sub.problem.index.substring(0, 1)) ?? 0;
        cnt++;
        num++;
        cnt1++;
        cnt2++;
        language.set(sub.programmingLanguage, num);
        submit.set(sub.verdict, cnt);
        rate.set(sub.problem.rating, cnt1);
        problem_number.set(sub.problem.index.substring(0, 1), cnt2);
      });
      const arr = [];
      const arr1 = [];
      const arr2 = [];
      const arr4 = [];
      for (const [key, value] of submit) {
        if (key !== undefined) arr.push({ name: key, count: value });
      }
      for (const [key, value] of language) {
        if (key !== undefined) arr1.push({ name: key, count: value });
      }
      for (const [key, value] of rate) {
        if (key !== undefined) arr2.push({ name: key, count: value });
      }
      for (const [key, value] of problem_number) {
        if (key !== undefined) {
          arr4.push({ name: key, count: value });
        }
      }
      const arr3 = [...arr2].sort((a, b) => a.name - b.name);
      const arr5 = [...arr4].sort((a, b) =>
        a.name > b.name ? 1 : a.name < b.name ? -1 : 0
      );
      setSub(arr);
      setLang(arr1);
      setRating(arr3);
      setProblem_num(arr5);
      //   console.log(arr);
      //   console.log(arr1);
      //   console.log(arr3);
      console.log(arr5);
      setUser(userdata.result.reverse());
    };
    fetchdata();
  }, [username]);
  return (
    <div>
      <Chartbar data={rating} />
      <Chartbar data={problem_num} />
      <PieChart width={700} height={700}>
        <Pie data={sub} dataKey="count" outerRadius={250} fill="green">
          {" "}
        </Pie>
      </PieChart>
      <PieChart width={700} height={700}>
        <Pie data={lang} dataKey="count" outerRadius={250} fill="blue">
          {" "}
        </Pie>
      </PieChart>
      {user.map((contest, index) => (
        <Show
          key={index}
          name={contest.contestName}
          rank={contest.rank}
          old={contest.oldRating}
          new={contest.newRating}
        />
      ))}
    </div>
  );
}
