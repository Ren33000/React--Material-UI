import { Container, Fab, makeStyles, Modal, Tooltip } from "@material-ui/core";
import { AddCircleOutline } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        bottom: 10,
        right: 20,
    },
    container: {
        width: 500,
        height: 550,
        backgroundColor: "white",
        position: "absolute",
        top: 0, 
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",

    }
}));

const Add = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(false)

    return (
        <>
            <Tooltip title="Add" arial-label="add" onClick={() => setOpen(true)}>
                <Fab color="primary" className={classes.fab}>
                <AddCircleOutline />
                </Fab>
            </Tooltip>
            <Modal open={open}>
                <Container className={classes.container}>My Modal</Container>
            </Modal>
        </>
    )
};

export default Add;