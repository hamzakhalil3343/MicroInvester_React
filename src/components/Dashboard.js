import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Card, CardContent } from "@material-ui/core";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ContactMailOutlinedIcon from "@material-ui/icons/ContactMailOutlined";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import PieChart from "./Charts/PieChart";
import ApexChart from "./Charts/ApexChart";
import ApexBarChart from "./Charts/ApexBarChart";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "97%",
    margin: 10,
    padding:5
  },
  CardFooter: {
    padding: theme.spacing(1),
    textAlign: "left",

    backgroundColor: "aqua",
    color: " rgb(84, 84, 84)",
  },
}));
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Card>
            <Grid container>
              <Grid item xs={2}>
                <CardContent>
                  <PermIdentityOutlinedIcon
                    style={{ fontSize: 40, paddingLeft: 5, color: "green" }}
                  ></PermIdentityOutlinedIcon>
                </CardContent>
              </Grid>
              <Grid item xs={10}>
                <CardContent style={{ textAlign: "right", fontSize: 18 }}>
                  <p>New Invester Sign Up</p> <br></br>
                  <b>105</b>
                </CardContent>
              </Grid>
              <Grid item xs={12} className={classes.CardFooter}>
                <CachedOutlinedIcon
                  style={{ margin: 15, marginLeft: 25 }}
                ></CachedOutlinedIcon>
                Update Now
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <Grid container>
              <Grid item xs={2}>
                <CardContent>
                  <TrendingUpIcon
                    style={{ fontSize: 40, paddingLeft: 5, color: "green" }}
                  ></TrendingUpIcon>
                </CardContent>
              </Grid>
              <Grid item xs={10}>
                <CardContent style={{ textAlign: "right", fontSize: 18 }}>
                  <p>Funds Raised</p> <br></br>
                  <b>$ 1.34 MM</b>
                </CardContent>
              </Grid>
              <Grid item xs={12} className={classes.CardFooter}>
                <CachedOutlinedIcon
                  style={{ margin: 15, marginLeft: 25 }}
                ></CachedOutlinedIcon>
                Update Now
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <Grid container>
              <Grid item xs={2}>
                <CardContent>
                  <ContactMailOutlinedIcon
                    style={{ fontSize: 40, paddingLeft: 5, color: "green" }}
                  ></ContactMailOutlinedIcon>
                </CardContent>
              </Grid>
              <Grid item xs={10}>
                <CardContent style={{ textAlign: "right", fontSize: 18 }}>
                  <p>KYC Approval Required</p> <br></br>
                  <b>13</b>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "left",
                  padding: 5,
                  backgroundColor: "aqua",
                  color: "rgb(84, 84, 84)",
                }}
              >
                <CachedOutlinedIcon
                  style={{ margin: 15, marginLeft: 25 }}
                ></CachedOutlinedIcon>
                Update Now
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={12} md={3}>
          <Card>
            <Grid container>
              <Grid item xs={2}>
                <CardContent>
                  <BusinessCenterOutlinedIcon
                    style={{ fontSize: 40, paddingLeft: 5, color: "green" }}
                  ></BusinessCenterOutlinedIcon>
                </CardContent>
              </Grid>
              <Grid item xs={10}>
                <CardContent style={{ textAlign: "right", fontSize: 18 }}>
                  <p>Active Offerings</p> <br></br>
                  <b>7</b>
                </CardContent>
              </Grid>
              <Grid
                item
                xs={12}
                style={{
                  textAlign: "left",
                  padding: 5,
                  backgroundColor: "aqua",
                  color: "rgb(84, 84, 84)",
                }}
              >
                <CachedOutlinedIcon
                  style={{ margin: 15, marginLeft: 25 }}
                ></CachedOutlinedIcon>
                Update Now
              </Grid>
            </Grid>
          </Card>
        </Grid>

        {/* Charts Section  */}

        <Grid item xs={12} md={12} lg={12}>
          <ApexChart></ApexChart>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <PieChart></PieChart>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <ApexBarChart></ApexBarChart>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Dashboard;
