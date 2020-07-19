import React from "react";
import { Card, TextField, Grid } from "@material-ui/core";
import { FilePond } from "react-filepond";
import "filepond/dist/filepond.min.css";
const PublicInfo = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={12}>
        <Card style={{ padding: 20 }}>
          <Grid item xs={12} md={12}>
            <h3 style={{ float: "left" }}>Upload Pictures</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <FilePond></FilePond>
          </Grid>
          <Grid item xs={12} md={12}>
            <h3 style={{ float: "left" }}>Upload Documents</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <FilePond allowMultiple={true}></FilePond>
          </Grid>
          <Grid item xs={12} md={12}>
            <h3 style={{ float: "left", padding: 10 }}>Investor Summary</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              size="medium"
              rows={5}
              multiline={true}
              label="Write a short summary to grab the attention of investors"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <h3 style={{ float: "left", padding: 10 }}>Detail Description</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              size="medium"
              rows={5}
              multiline={true}
              label="Lay out the plan and vision for this investment"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <h3 style={{ float: "left", padding: 10 }}>Desclaimer</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              size="medium"
              rows={5}
              multiline={true}
              label="Disclaimer Details here"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <h3 style={{ float: "left", padding: 10 }}>Risk Factors</h3>
          </Grid>
          <Grid item xs={12} md={12}>
            <TextField
              id="outlined-basic"
              size="medium"
              rows={5}
              multiline={true}
              label="Risk Factors details here"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default PublicInfo;
