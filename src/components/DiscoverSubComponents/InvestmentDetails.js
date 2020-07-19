import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import InvestmentStepper from "./InvestmentStepper";
import { Grid, Button } from "@material-ui/core";

const InvestmentDetails = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h1
          style={{
            textAlign: "center",
            color: "lightslategray",
            backgroundColor: "#E8EAF6",
            height: "150px",
            paddingTop: "25px",
          }}
        >
          Investment Highlights
          <br></br>
          <Link to="/settelment">
            <Button color="secondary" variant="contained">
              Invest{" "}
            </Button>
          </Link>
        </h1>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Carousel>
          <div style={{ height: "400px", width: "100%" }}>
            <img
              src={"https://wowslider.com/sliders/demo-51/data1/images/car.jpg"}
              alt=""
            />
          </div>
          <div style={{ height: "400px", width: "100%" }}>
            <img
              src={
                "https://jssors8.azureedge.net/demos/img/gallery/980x380/032.jpg"
              }
              alt=""
            />
          </div>
          <div style={{ height: "400px", width: "100%" }}>
            <img
              src={"https://www.w3schools.com/howto/img_nature_wide.jpg"}
              alt=""
            />
          </div>
        </Carousel>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <InvestmentStepper></InvestmentStepper>
      </Grid>
    </Grid>
  );
};

export default InvestmentDetails;
