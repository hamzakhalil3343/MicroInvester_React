import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import { Grid } from "@material-ui/core";
const ApexChart = () => {
  const [state] = useState({
    series: [
      {
        name: "series1",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
      {
        name: "series2",
        data: [11, 32, 45, 32, 34, 52, 41],
      },
    ],
    options: {
      title: {
        text: "Invester Interaction",
        horizontalAlign: "left",
        fontSize: 50,
        padding: 10,
      },
      chart: {
        height: 200,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  });
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ReactApexCharts
          options={state.options}
          series={state.series}
          type="area"
          height={350}
        />
      </Grid>
    </Grid>
  );
};

export default ApexChart;
