import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AppBar from "@material-ui/core/AppBar";
const Footer = () => {
  return (
    <AppBar
      position="relative"
      color="primary"
      style={{ bottom: 0, top: "auto" }}
    >
      <p style={{ padding: 20 }}>
        <FacebookIcon style={{ color: "white", fontSize: 35 }}></FacebookIcon>
        <LinkedInIcon style={{ color: "white", fontSize: 35 }}></LinkedInIcon>
      </p>

      <br></br>
      <p style={{ color: "white" }}>
        Tranforming Private Capital Markets, One Transaction at a Time
      </p>
      <hr></hr>
      <p style={{ color: "white" }}>© MetaVest 2020</p>
    </AppBar>
  );
};

export default Footer;
