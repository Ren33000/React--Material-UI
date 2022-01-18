import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block",
        },
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none",
        },
    }
}));

const Navbar = () => {
  const classes = useStyles()
  return (
      <AppBar>  
          <Toolbar> 
            <Typography variant="h6" className={classes.logoLg}>Lama Dev</Typography>
            <Typography variant="h6" className={classes.logoSm}>LAMA</Typography>
          </Toolbar>
      </AppBar>
  )
};

export default Navbar;
