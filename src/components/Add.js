import { Fab, makeStyles, Tooltip } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 10,
        right: 20,
    }
}));

const Add = () => {
    const classes = useStyles()
    return (
        <Tooltip title="Add" arial-label="add">
            <Fab color="primary" className={classes.fab}>
            <AddCircleOutline />
            </Fab>
        </Tooltip>
    )
};

export default Add;