import React, { useState } from "react";

import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@material-ui/core";
const items = [
  {
    tab: "Investment Overview",
    content:
      "Investment Highlights: Reliable monthly distributions (currently 8% per annum paid monthly /n Capital growth potential (target 3-5%) /n Tax-advantaged structure /n Eligibility for RRSPs, TFSAs, RRIFs, RESPs /n Dividend reinvestment plan (DRIP) available /n ",
  },
  {
    tab: "Issuer Information",
    content:
      "ABOUT JUSTIN TRUMP - Ms. TRUMP is founder and President of Loop Mortgages and several other real estate companies. She has been active in the real estate industry for over 25 years with expertise in mortgage financing and real estate investment. Ms. TRUMP has been investing in real estate since the age of 18 and has acquired various multi-residential and commercial investments over the years. Ms. TRUMP provides mortgage finance and advisory services in the residential, multi-residential and commercial real estate sectors to borrowers, and to both private and institutional lenders. Over the last 20 years, Ms. TRUMP has arranged and coordinated mortgage funding in excess of $1.5 billion, including commercial properties, multi-residential properties, land, developments, mezzanine financing and construction financing. Ms. TRUMP’s success can be attributed to her constant drive to assist clients to achieve their financial goals.",
  },
  {
    tab: "Disclaimer",
    content:
      "The information contained herein and any related presentation has been compiled by Metavest Capital Inc. and its related entities (together called Metavest), from sources believed to be reliable, but in any event, no representations or warranties, express or implied, are made by Metavest or any other person as to their accuracy, completeness, or correctness. It is acknowledged that no party shall be entitled to rely on the accuracy or completeness of the confidential information contained herein and will be entitled to rely solely on those representations and warranties as may be included in any definitive written agreement with respect to the proposed transaction, subject to those limitations and restrictions as may be contained therein. Any Offering Documents will supercede any information presented herein. The final Subscription Agreement, Term Sheet, Offering Memoranda, and Limited Partnership Agreement, collectively the Offering Documents, will always supercede any information presented herein.",
  },
  {
    tab: "Risk Factors",
    content:
      "The business of Paradise REIT is substantially dependent on the acquisition of the Pending Properties in the short term, and upon growing the portfolio of properties over the long term. Although Paradise REIT has entered into an agreement to acquire the Pending Properties as described elsewhere in this Offering Memorandum, Paradise REIT has not waived the conditions to closing in respect of the Pending Properties, which remain subject to due diligence and upon completion of the Offering. There can be no assurance that Paradise REIT will acquire the Pending Properties. The acquisition of additional properties in the future will be dependent on Paradise REIT raising new capital and mortgage financing for that purpose, both of which involve significant uncertainty. There is no assurance that Paradise REIT will be able to raise additional capital in the future, or the terms upon which such capital can be raised. In addition, there is no assurance that Paradise REIT will be able to obtain sufficient mortgage loans to finance future acquisitions, or if available, that Paradise REIT will be able to obtain mortgage loans on commercially reasonable terms. There can be no assurance that Paradise REIT will acquire additional properties in the future.",
  },
  {
    tab: "Documents",
    content:
      "All documents contained here in are confidential and should not be shared with any unauthorized personnel withour prior written permission",
  },
];

const InvestmentStepper = () => {
  const [data, setData] = useState(
    "Investment Highlights: Reliable monthly distributions (currently 8% per annum paid monthly /n Capital growth potential (target 3-5%) /n Tax-advantaged structure /n Eligibility for RRSPs, TFSAs, RRIFs, RESPs /n Dividend reinvestment plan (DRIP) available /n"
  );
  return (
    <div>
      <Card style={{ textAlign: "center" }}>
        <CardContent
          style={{
            textAlign: "left",
            paddingLeft: 100,
            backgroundColor: "#07337a",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              {items.map((item) => {
                return (
                  <Button
                    style={{
                      background: "inherit",
                      height: "20px",
                      border: "none",
                      color: "white",
                    }}
                    value={item.content}
                    onClick={() => setData(item.content)}
                  >
                    {item.tab}
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </CardContent>
        <CardContent
          style={{
            textAlign: "center",
            paddingBottom: "40px",
            paddingLeft: "50px",
          }}
        >
          {data}
        </CardContent>
        <Link to="/settelment">
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: 10, padding: "5 10 5 10" }}
          >
            Invest{" "}
          </Button>
        </Link>
      </Card>
    </div>
  );
};

export default InvestmentStepper;
