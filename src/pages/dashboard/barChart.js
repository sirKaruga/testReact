import React from "react";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalBarSeries,
  VerticalBarSeriesCanvas,
} from "react-vis";
import { connect } from "react-redux";

function barChart(props) {
  const myDATA = props.barChartData;
  const yDomain = props.barChartData.reduce(
    (res, row) => {
      return {
        max: Math.max(res.max, row.y),
        min: Math.min(res.min, row.y),
      };
    },
    { max: -Infinity, min: Infinity }
  );

  const { useCanvas } = myDATA;

  const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
  return (
    <div>
      <XYPlot
        margin={{ left: 75 }}
        xType="time"
        width={300}
        height={300}
        yDomain={[yDomain.min, yDomain.max]}
      >
        <BarSeries className="vertical-bar-series-example" data={myDATA} />
        <XAxis />
        <YAxis />
      </XYPlot>
    </div>
  );
}

function mapStateToProps(props) {
  return {
    barChartData: props.barChartData,
    useCanvas: props.barChartUseCanvas,
  };
}

export default connect(mapStateToProps)(barChart);
