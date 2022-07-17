import React from "react";

export default function Show(props) {
  return (
    <div>
      <table style={{ width: "100%" }}>
        <tr>
          <th>{props.name}</th>
          <th>{props.rank}</th>
          <th>{props.old}</th>
          <th>{props.new}</th>
          <th>{props.old + 4 * (props.new - props.old)}</th>
        </tr>
      </table>
    </div>
  );
}
