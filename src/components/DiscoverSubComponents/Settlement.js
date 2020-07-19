import React, { useState } from "react";
import { Card, CardContent, Button, Grid } from "@material-ui/core";
import InvestmentAmount from "./InvestmentAmount";
import Acknowledge from "./Acknowledge";
import Payment from "./Payment";
import SettlementCard from "./SettlementCard";

const Settlement = () => {
  const [itemValue, setItem] = useState("InvestmentAmount");
  const checked = itemValue;
  let showData;
  if (checked === "InvestmentAmount") {
    showData = <InvestmentAmount></InvestmentAmount>;
  }
  if (checked === "ACKNOWLOEDGEMENT") {
    showData = <Acknowledge></Acknowledge>;
  }
  if (checked === "PAYMENT") {
    showData = <Payment></Payment>;
  }
  if (checked === "SATTLEMENT") {
    showData = <SettlementCard></SettlementCard>;
  }
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Card
          style={{
            textAlign: "center",
            margin: "auto",
            border: "none",
            display: "block",
            width: "90%",
          }}
        >
          <CardContent
            style={{ textAlign: "center", backgroundColor: "#07337a" }}
            dark
          >
            <Grid container>
              <Grid item xs={6} sm={3} md={3} lg={3}>
                <Button
                  style={{
                    textAlign: "left",
                    background: "#07337a",
                    color: "white",
                    border: "none",
                    padding: 2,
                  }}
                  onClick={() => setItem("InvestmentAmount")}
                  value="InvestmentAmount"
                >
                  INVESTMENT AMOUNT
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3}>
                <Button
                  style={{
                    textAlign: "left",
                    background: "#07337a",
                    color: "white",
                    border: "none",
                    padding: 2,
                  }}
                  onClick={() => setItem("ACKNOWLOEDGEMENT")}
                  value="ACKNOWLOEDGEMENT"
                >
                  ACKNOWLOEDGEMENT
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3}>
                <Button
                  style={{
                    textAlign: "left",
                    background: "#07337a",
                    color: "white",
                    border: "none",
                    padding: 2,
                  }}
                  onClick={() => setItem("PAYMENT")}
                  value="PAYMENT"
                >
                  PAYMENT
                </Button>
              </Grid>
              <Grid item xs={6} sm={3} md={3} lg={3}>
                <Button
                  style={{
                    textAlign: "left",
                    background: "#07337a",
                    color: "white",
                    border: "none",
                    padding: 2,
                  }}
                  onClick={() => setItem("SATTLEMENT")}
                  value="SATTLEMENT"
                >
                  SATTLEMENT
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          <CardContent style={{ textAlign: "center", paddingBottom: "40px" }}>
            <Grid item xs={12} md={12} sm={12} lg={12}>
              {showData}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Settlement;
