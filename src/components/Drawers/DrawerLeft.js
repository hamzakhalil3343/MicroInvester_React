import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import DashboardIcon from "@material-ui/icons/Dashboard";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ExploreIcon from "@material-ui/icons/Explore";
import WorkIcon from "@material-ui/icons/Work";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Dashboard from "../Dashboard";
import KnowYourCustomers from "../KnowYourCustomers";
import { Switch, Route, Link } from "react-router-dom";
import MyListings from "../MyListings";
import Discover from "../Discover";
import InvestmentDetails from "../DiscoverSubComponents/InvestmentDetails";
import Settlement from "../DiscoverSubComponents/Settlement";
import CreateNew from "../CreateNew";
import { Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(2, 3),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const DrawerLeft = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <img
              src={require("./../../Assets/metavest-logo-offwhite.svg")}
              alt="ManiVest"
              height="30px"
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Avatar
            alt="Cindy Baker"
            src="https://pickaface.net/gallery/avatar/rayn529fdc29277d7.png"
            className={classes.large}
          />
          <p style={{ margin: 20, display: "inline" }}>UserName </p>
          <IconButton
            onClick={handleDrawerClose}
            style={{ justifyContent: "flex-end" }}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
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
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
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
      </main>
    </div>
  );
};

export default DrawerLeft;
