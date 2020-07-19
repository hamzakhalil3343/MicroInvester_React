import React from "react";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import BusinessCenterOutlinedIcon from "@material-ui/icons/BusinessCenterOutlined";
import DiscoverCard from "./DiscoverCard";
import { Card } from "@material-ui/core";

const Discover = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12}>
        <Card style={{ padding: 20 }}>
          <Grid item xs={12} sm={12} md={12}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQakoXGPvN8DjSQjU_ARMPaVI1dcVdCL0-l7dsyvUTxkiTTGKsX&usqp=CAU"
              alt="Discover"
              height="150px"
            />
          </Grid>
          <Grid container>
            <Grid item md={4} xs={12} style={{ padding: 10 }}>
              <TextField
                id="input-with-icon-grid"
                label="Search"
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon></SearchIcon>{" "}
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </Grid>
            <Grid item md={4} xs={12} style={{ padding: 10 }}>
              <FormControl variant="outlined" style={{ width: "50%" }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  Sort By
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  style={{ textAlign: "left" }}
                  label="Sort By"
                >
                  <MenuItem value={10}>Price</MenuItem>
                  <MenuItem value={20}>Investment Teams </MenuItem>
                  <MenuItem value={30}>Expected Returns</MenuItem>
                  <MenuItem value={20}>Cities </MenuItem>
                  <MenuItem value={30}>Minimum Investment</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item md={4} xs={12} style={{ padding: 10 }}>
              <FormControl variant="outlined" fullWidth style={{ padding: 10 }}>
                <InputLabel id="demo-simple-select-outlined-label">
                  <BusinessCenterOutlinedIcon></BusinessCenterOutlinedIcon>{" "}
                  Offerings Type{" "}
                </InputLabel>
                <Select
                  labelId="demo-simple-select-outlined-label"
                  id="demo-simple-select-outlined"
                  label="Offerings Type  icon"
                  style={{ textAlign: "left" }}
                >
                  <MenuItem value={10}>Equity</MenuItem>
                  <MenuItem value={20}>Debt </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ padding: 10 }}>
              <DiscoverCard></DiscoverCard>
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ padding: 10 }}>
              <DiscoverCard></DiscoverCard>
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ padding: 10 }}>
              <DiscoverCard></DiscoverCard>
            </Grid>
            <Grid item xs={12} sm={12} md={3} style={{ padding: 10 }}>
              <DiscoverCard></DiscoverCard>
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Discover;
