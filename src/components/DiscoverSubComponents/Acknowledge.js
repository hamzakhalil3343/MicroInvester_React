import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { Grid } from "@material-ui/core";
const Acknowledge = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <div style={{ marginBottom: "450px" }}>
      <p>
        I understand that I can loose my investment for any reason and I cannot
        hold any third party accountable
      </p>

      <Grid container sm="12" style={{ display: "inline" }}>
        <p style={{ textAlign: "center" }}>
          <Checkbox
            checked={checked}
            style={{ textAlign: "center" }}
            onChange={handleChange}
            inputProps={{ "aria-label": "primary checkbox" }}
          ></Checkbox>
          i agree with term and conditions
        </p>
      </Grid>
    </div>
  );
};

export default Acknowledge;
