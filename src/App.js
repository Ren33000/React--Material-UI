import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Feed from "./components/Feed";
import Leftbar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import Rightbar from "./components/Rightbar";

const useStyles = makeStyles((theme) => ({}));

const App = () => {
  const classes = useStyles()
  return <div>
    <Navbar/>
    <Grid container>  
      <Grid item sm={2}> <Leftbar /> </Grid>
      <Grid item sm={7}> <Feed /> </Grid>
      <Grid item sm={3}> <Rightbar /> </Grid>
    </Grid> 
  </div>;
};

export default App;
