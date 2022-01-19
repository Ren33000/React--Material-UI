import { Container, Typography } from "@material-ui/core";
import { Home } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10)  
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: "40px"
    }
}));

const Leftbar = () => {
    const classes = useStyles()
    return  (
        <Container className={classes.container}>
            <div className={classes.item}>
                <Home className={classes.icon} /> 
                <Typography className={classes.text}>Homepage</Typography>
            </div>

            <div className={classes.item}>
                <Home className={classes.icon} /> 
                <Typography className={classes.text}>Homepage</Typography>
            </div>

            <div className={classes.item}>
                <Home className={classes.icon} /> 
                <Typography className={classes.text}>Homepage</Typography>
            </div>

            <div className={classes.item}>
                <Home className={classes.icon} /> 
                <Typography className={classes.text}>Homepage</Typography>
            </div>
        </Container>
    );
};

export default Leftbar;