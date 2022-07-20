import React from "react";
import "./single.css";
import Chart from "react-google-charts";
export default function Show(props) {
  const arr = [["Contest", "Rank", "Old Rating", "New Rating", "Perfomance"]];
  const rank = [];
  const rating = [];
    for (let i = 0; i < props.table.length; i++) {
      rank.push([props.table[i].rank,props.table[i].contestId]); 
      rating.push([props.table[i].newRating-props.table[i].oldRating, props.table[i].contestId]);
      arr.push([
        props.table[i].contestName,
        props.table[i].rank,
        props.table[i].oldRating,
        props.table[i].newRating,
        props.table[i].oldRating +
          4 * (props.table[i].newRating - props.table[i].oldRating),
      ]);
    }
   rating.sort((a,b) => a[0]-b[0]);
   rank.sort((a,b) => a[0]-b[0]); 
  return (
    <div>
      <Chart chartType="Table" data={arr} width="100%" />
    </div>
  );
}
