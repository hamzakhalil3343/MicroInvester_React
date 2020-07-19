import React from "react";
import Button from "@material-ui/core/Button";

const SettlementCard = () => {
  return (
    <div style={{ height: "200px", marginBottom: "400px" }}>
      <h3 style={{ color: "blue" }}>Congratulations! </h3>
      <p>You now own a piece of Paradise REIT </p>
      <Button variant="contained" color="primary">
        Visit profile
      </Button>
    </div>
  );
};

export default SettlementCard;
