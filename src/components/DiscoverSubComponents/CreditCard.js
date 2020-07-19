import React from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";

import { Grid, Button } from "@material-ui/core";

const CreditCard = () => {
  const [number, setNumber] = useState("");
  const [cvc, setcvc] = useState("");
  const [expiry, setexpiry] = useState("");
  const [name, setname] = useState("");
  const [focus, setFocus] = useState("");
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Cards
          cvc={cvc}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
          issuer="mastercard"
        />
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            id="outlined-basic"
            type="tel"
            value={number}
            label="Card Number"
            onChange={(e) => setNumber(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            id="outlined-basic"
            type="text"
            value={name}
            label="Name"
            name="name"
            onChange={(e) => setname(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            style={{ margin: 15 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            id="outlined-basic"
            type="text"
            value={cvc}
            label="Cvc"
            name="cvc"
            onChange={(e) => setcvc(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            style={{ margin: 15 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <TextField
            id="outlined-basic"
            type="date"
            value={expiry}
            name="expiry"
            onChange={(e) => setexpiry(e.target.value)}
            onFocus={(e) => setFocus(e.target.name)}
            style={{ margin: 8 }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Button variant="contained" color="secondary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CreditCard;
