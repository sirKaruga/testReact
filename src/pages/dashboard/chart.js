import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineSeries,
} from "react-vis";

function Chart(props) {
  const data = [];

  for (let i = 0; i < 2; i++) {
    const series = props.chartData;

    data.push({ color: i, key: i, data: series, opacity: 0.8 });
  }

  return (
    <Card style={{ background: "rgba(0,0,0,0.5)" }}>
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
    </Card>
  );
}

function mapStateToProps(props) {
  return {
    chartData: props.lineChartData,
  };
}

export default connect(mapStateToProps)(Chart);
