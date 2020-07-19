import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
const Wire = () => {
  return (
    <div>
      <h1>Directive</h1>

      <TextField
        fullWidth
        style={{ marginTop: "20px" }}
        id="outlined-number"
        label="Amount"
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        value="123.45"
        variant="outlined"
      />

      <Button variant="contained" style={{ marginTop: "20px" }}>
        Pay Now
      </Button>
    </div>
  );
};

export default Wire;
