import React from "react";
import { TextField, Card, Grid, Button } from "@material-ui/core";

const Invite = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Card style={{ padding: "25px 20px 15px" }}>
          <Grid item xs={12} md={12}>
            <h3 style={{ padding: "20px" }}>Invite Dealers</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <h3 style={{ padding: "20px" }}>Invite Investors </h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              label="Enter Email"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Button color="secondry" style={{ margin: "20px" }}>
              Invite
            </Button>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Invite;
