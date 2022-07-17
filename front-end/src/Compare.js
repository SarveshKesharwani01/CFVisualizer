import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Chartbar from "./Chartbar";
import { PieChart, Pie } from "recharts";
import Show from "./Show";
export default function Compare() {
  const { state } = useLocation();
  const [user, setUser] = useState([]);
  const [sub, setSub] = useState([]);
  const [lang, setLang] = useState([]);
  const [rating, setRating] = useState([]);
  const [problem_num, setProblem_num] = useState([]);
  const { username1, username2 } = state;

  function Userinfo(username) {
    //console.log(username);
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
        const problem_name = new Map();
        submission_data.result.forEach((sub) => {
          let cnt = submit.get(sub.verdict) ?? 0;
          let num = language.get(sub.programmingLanguage) ?? 0;
          let cnt1 = rate.get(sub.problem.rating) ?? 0;
          let cnt2 = problem_number.get(sub.problem.index.substring(0, 1)) ?? 0;
          cnt++;
          num++;
          if (sub.verdict === "OK") {
            let val = problem_name.get(sub.problem.name);
            if (!val) {
              cnt1++;
            }
            problem_name.set(sub.problem.name, 1);
          }
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
        setSub((previous) => {
          return [{ ...previous }, { arr }];
        });
        setLang((previous) => {
          return [{ ...previous }, { arr1 }];
        });
        setRating(arr3);
        setProblem_num((previous) => {
          return [{ ...previous }, { arr5 }];
        });
        setUser((previous) => {
          return [{ ...previous }, userdata.result.reverse()];
        });
        console.log(arr3);
      };
      fetchdata();
    }, [username]);
  }

  Userinfo(username2);

  return (
    <div>
      {username1}
      {username2}
    </div>
  );
}
