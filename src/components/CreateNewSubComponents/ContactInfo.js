import React from "react";
import {
  Card,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {},
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

const ContactInfo = () => {
  const classes = useStyles();
  return (
    <Card className={classes.paper}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3 style={{ float: "left", padding: "20px" }}>Issuer Information</h3>
        </Grid>
        <Grid item xs={12}>
          <p>Import Existing Profile </p>
          <Tooltip title="Add" aria-label="add">
            <Fab color="primary" className={classes.fab}>
              <AddIcon />
            </Fab>
          </Tooltip>
        </Grid>

        <Grid item xs={12}>
          <img
            src={"https://via.placeholder.com/200x200"}
            style={{ float: "left", padding: 10 }}
            alt=""
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            style={{ float: "left", marginLeft: 40, height: 35 }}
          >
            Upload Image
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Address Line 1"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Address Line 2"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Postal Code "
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="City "
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="demo-simple-select-outlined-label">
              Province{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              value=""
              onChange="No data"
              label="Age"
              fullWidth
            >
              <MenuItem value="">
                <em>No Data</em>
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id="outlined-basic"
            label="Country"
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Button
            variant="outlined"
            color="primary"
            style={{ float: "right", margin: "10px" }}
          >
            {" "}
            Save Profile{" "}
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default ContactInfo;
