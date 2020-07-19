import React from "react";

import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";

const InvestmentAmount = () => {
  return (
    <Grid container spacing={3} style={{ marginBottom: "320px" }}>
      <Grid item sm={12} xs={12} md={4} lg={4}>
        <p style={{ fontSize: 24, paddingBottom: 25 }}>Quantity</p>
        <br></br>
        <TextField
          id="outlined-full-width"
          label="Units"
          style={{ margin: 8, paddingBottom: 25 }}
          placeholder="0"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
      </Grid>
      <Grid item sm={12} xs={12} md={4} lg={4}>
        <p style={{ fontSize: 24, paddingBottom: 25 }}>Price/Unit </p>
        <br></br>
        <p style={{ fontSize: 24, paddingBottom: 25 }}>$1,000 </p>
      </Grid>
      <Grid item sm={12} xs={12} md={4} lg={4}>
        <p style={{ fontSize: 24, paddingBottom: 25 }}>Investment</p>
        <br></br>
        <p style={{ fontSize: 24, paddingBottom: 25 }}>$0</p>
      </Grid>
    </Grid>
  );
};

export default InvestmentAmount;
