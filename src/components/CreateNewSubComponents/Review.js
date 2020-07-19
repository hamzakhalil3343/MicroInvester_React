import React from "react";
import { Grid } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Review = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <h3>Review Your Offering </h3>
      </Grid>

      <Grid item xs={12} sm={12} md={12} lg={12}>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Contact Information</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  First Name :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Last Name :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Email Address :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Phone Number :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Address Line 1 :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Address Line 2 :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Postal Code :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  City :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Province :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Country :
                </b>
                <p style={{ fontSize: 16, padding: "20px" }}> Canada</p>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Deal Type</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item xs={12} sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Token Information
                </h4>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Jurisdiction :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Offering Type :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Investment Description
                </h4>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Offering Name :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Offering Symbol :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Currency Denomination :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Total Investment Value :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                >
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Minimal Investment :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Transaction Limit :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Investment Team :
                </b>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <b style={{ float: "left", fontSize: 16, padding: "20px" }}>
                  Expected Return :
                </b>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Public Info</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Investment Description :
                </h4>
              </Grid>
              <Grid item sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Detail Description :
                </h4>
              </Grid>
              <Grid item sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>Disclaimer :</h4>
              </Grid>
              <Grid item sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Risk Factors :
                </h4>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Invite</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Dealer Invite :
                </h4>
              </Grid>

              <Grid item sm={12} md={12}>
                <h4 style={{ float: "left", padding: "20px" }}>
                  Invester Email :
                </h4>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
};

export default Review;
