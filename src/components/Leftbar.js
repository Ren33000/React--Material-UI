import { Container, List, Typography } from "@material-ui/core";
import { Bookmark, Camera, CameraAlt, ChildFriendlySharp, ExitToApp, FormatListNumbered, Home, LocalDiningOutlined, Person, PhoneAndroid, PlayArrow, PlayCircleFilled, Settings, Storefront, VideoCall } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container: {
        height: "100vh",
        paddingTop: theme.spacing(10),
        background: theme.palette.primary.main, 
        [theme.breakpoints.up("sm")]: {
            background: "white",
            color: "#555",
            border: "1px solid #ece7e7",
        } 
    },
    item: {
        display: "flex",
        alignItems: "center",
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(3),
            cursor: "pointer",
        }
    },
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px",
        }
    },
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        }
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
                <Person className={classes.icon} /> 
                <Typography className={classes.text}>Fiends</Typography>
            </div>
            <div className={classes.item}>
                <FormatListNumbered className={classes.icon} /> 
                <Typography className={classes.text}>Lists</Typography>
            </div>
            <div className={classes.item}>
                <CameraAlt className={classes.icon} /> 
                <Typography className={classes.text}>Camera</Typography>
            </div>
            <div className={classes.item}>
                <PlayArrow className={classes.icon} /> 
                <Typography className={classes.text}>Videos</Typography>
            </div>
            <div className={classes.item}>
                <PhoneAndroid className={classes.icon} /> 
                <Typography className={classes.text}>Apps</Typography>
            </div>
            <div className={classes.item}>
                <Bookmark className={classes.icon} /> 
                <Typography className={classes.text}>Collections</Typography>
            </div>
            <div className={classes.item}>
                <Storefront className={classes.icon} /> 
                <Typography className={classes.text}>Market Place</Typography>
            </div>
            <div className={classes.item}>
                <Settings className={classes.icon} /> 
                <Typography className={classes.text}>Settings</Typography>
            </div>
            <div className={classes.item}>
                <ExitToApp className={classes.icon} /> 
                <Typography className={classes.text}>Logout</Typography>
            </div>
        </Container>
    );
};

export default Leftbar;