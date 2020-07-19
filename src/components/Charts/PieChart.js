import React, { useState } from "react";
import ReactApexCharts from "react-apexcharts";
import { Grid } from "@material-ui/core";

const PieChart = () => {
  const [state] = useState({
    series: [62, 32, 6],
    options: {
      title: {
        text: "Invester Demographics",
      },
      chart: {
        width: 380,
        type: "pie",
        position: "center",
      },
      labels: ["Team A", "Team B", "Team C"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 300,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  });
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ReactApexCharts
          options={state.options}
          series={state.series}
          type="pie"
          height={400}
        />

        {/* <Hidden only={["md", "sm", "xl"]}>
          <ReactApexCharts
            options={state.options}
            series={state.series}
            type="pie"
            height={320}
          />
        </Hidden> */}
      </Grid>
    </Grid>
  );
};

export default PieChart;
