import React from "react";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

const data = [];

for (let i = 0; i < 2; i++) {
  const series = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];

  data.push({ color: i, key: i, data: series, opacity: 0.8 });
}

export default function Example() {
  return (
    <XYPlot
      width={300}
      height={300}
      colorType="linear"
      colorDomain={[0, 9]}
      colorRange={["yellow", "orange"]}
    >
      <HorizontalGridLines />
      <VerticalGridLines />
      <XAxis />
      <YAxis />
      {data.map((props) => (
        <LineSeries {...props} />
      ))}
    </XYPlot>
  );
}
