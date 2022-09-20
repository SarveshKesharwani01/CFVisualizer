import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  LabelList,
  Legend,
  ResponsiveContainer,
} from "recharts";

function ChartbarCompare(props) {
  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={500}
        height={300}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          stroke="#c4a88a"
          dataKey="name"
          style={{ fontFamily: "'Cormorant SC', serif", color: "white" }}
        />
        <YAxis
          domain={[0, "dataMax+150"]}
          stroke="#c4a88a"
          style={{ fontFamily: "'Cormorant SC', serif", color: "#c4a88a" }}
        ></YAxis>
        <Tooltip />
        <Legend wrapperStyle={{ fontFamily: "'Cormorant SC', serif" }} />
        <Bar dataKey={props.var1} fill="#ffdc73">
          <LabelList
            stroke="#c4a88a"
            dataKey={props.var1}
            position="top"
            style={{ fontFamily: "'Cairo', sans-serif", color: "#c4a88a" }}
          />
        </Bar>
        <Bar dataKey={props.var2} fill="#bf9b30">
          <LabelList
            stroke="#c4a88a"
            dataKey={props.var2}
            position="top"
            style={{ fontFamily: "'Cairo', sans-serif", color: "#c4a88a" }}
          />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

export default ChartbarCompare;
