import React from "react";
import Footer from "./Footer";
import DrawerLeft from "./Drawers/DrawerLeft";
import TopDrawer from "./Drawers/TopDrawer";
import { Hidden } from "@material-ui/core";

const Main = () => {
  return (
    <div>
      {/* <Hidden only={["md", "sm","lg", "xl"]}> */}
        {/* <TopDrawer></TopDrawer> */}
      {/* </Hidden> */}
      {/* <Hidden only="xs">
       
      </Hidden> */}
       <DrawerLeft></DrawerLeft>

      <Footer></Footer>
    </div>
  );
};

export default Main;
