import React from "react";
import {
  Card,
  Grid,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InputSlider from "./InputSlider";

const DealType = () => {
  const useStyles = makeStyles((theme) => ({
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
    },
  }));
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
          <h3 style={{ float: "left" }}>Security Information</h3>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" style={{ width: "90%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Jurisdiction
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Jurisdiction"
            >
              <MenuItem value="Ontario">Ontario</MenuItem>
              <MenuItem value="Alberta">Alberta</MenuItem>
              <MenuItem value="British Columbia">British columbia</MenuItem>
              <MenuItem value="United states">United states</MenuItem>
              <MenuItem value="UAE">UAE</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" style={{ width: "90%" }}>
            <InputLabel id="demo-simple-select-outlined-label">
              Offering type
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Offering type"
            >
              <MenuItem value="equity">Equity</MenuItem>
              <MenuItem value="Debt">Debt</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={12}>
          <h3 style={{ float: "left" }}>Investment Description</h3>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Offering Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Offering Symbol"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Currency Denomination
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              label="Currency Denomination"
            >
              <MenuItem value="USD">USD</MenuItem>
              <MenuItem value="CAD">CAD</MenuItem>
              <MenuItem value="EUR">EUR</MenuItem>
              <MenuItem value="GBP">GBP</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Total Investment Value"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputSlider></InputSlider>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Value of each unit"
            disabled
            value="Nan"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Minimum Investment"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Maximum Investment"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label=" Investment Team"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Expected Return (IRR)"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <h3 style={{ float: "left" }}>Eligible Invester Types</h3>
        </Grid>
        <Grid item xs={12} md={12}>
          <div style={{ float: "left" }}>
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Institutional"
            />
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Accrediated"
            />
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Eligible"
            />
            <FormControlLabel
              control={<Checkbox name="checkedC" />}
              label="Retail"
            />
          </div>
        </Grid>
      </Grid>
    </Card>
  );
};

export default DealType;
