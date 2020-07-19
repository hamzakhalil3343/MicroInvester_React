import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Drawer from "@material-ui/core/Drawer";
import clsx from "clsx";
import Dashboard from "../Dashboard";
import KnowYourCustomers from "../KnowYourCustomers";
import { Switch, Route, Link } from "react-router-dom";
import MyListings from "../MyListings";
import Discover from "../Discover";
import InvestmentDetails from "../DiscoverSubComponents/InvestmentDetails";
import Settlement from "../DiscoverSubComponents/Settlement";
import CreateNew from "../CreateNew";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExploreIcon from "@material-ui/icons/Explore";
import WorkIcon from "@material-ui/icons/Work";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import { Grid } from "@material-ui/core";
const anchor = "top";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const TopDrawer = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/Dashboard"
        >
          <ListItem button>
            <ListItemIcon>
              <DashboardIcon></DashboardIcon>
            </ListItemIcon>
            <ListItemText primary={"Dasboard"} />
          </ListItem>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/CreateNew"
        >
          <ListItem button>
            <ListItemIcon>
              <AddCircleOutlineIcon></AddCircleOutlineIcon>
            </ListItemIcon>
            <ListItemText primary={"Create New"} />
          </ListItem>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="/Discover"
        >
          <ListItem button>
            <ListItemIcon>
              <ExploreIcon></ExploreIcon>
            </ListItemIcon>
            <ListItemText primary={"Discover"} />
          </ListItem>
        </Link>
        <Link
          style={{ color: "inherit", textDecoration: "none" }}
          to="My_listings"
        >
          <ListItem button>
            <ListItemIcon>
              <WorkIcon></WorkIcon>
            </ListItemIcon>
            <ListItemText primary={"My Listings"} />
          </ListItem>
        </Link>
        <Link style={{ color: "inherit", textDecoration: "none" }} to="/kyc">
          <ListItem button>
            <ListItemIcon>
              <SearchTwoToneIcon></SearchTwoToneIcon>
            </ListItemIcon>
            <ListItemText primary={"Know  Customer"} />
          </ListItem>
        </Link>
      </List>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
          <Typography variant="h6" noWrap>
            <img
              src={require("./../../Assets/metavest-logo-offwhite.svg")}
              alt="ManiVest"
              height="30px"
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Switch>
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/CreateNew" component={CreateNew} />
            <Route path="/kyc" component={KnowYourCustomers} />
            <Route path="/My_listings" component={MyListings} />
            <Route path="/Discover" component={Discover} />
            <Route path="/Investment_Details" component={InvestmentDetails} />
            <Route path="/settelment" component={Settlement} />
            <Route path="/" component={Dashboard} />
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopDrawer;
