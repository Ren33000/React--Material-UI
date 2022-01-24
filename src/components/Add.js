import { Button, Container, Fab, FormControlLabel, FormLabel, makeStyles, MenuItem, Modal, Radio, RadioGroup, TextField, Tooltip } from "@material-ui/core";
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
        [theme.breakpoints.down("sm")]: {
            width: "100vwh",
            height: "100vh",
        }

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
                <Container className={classes.container}>
                    <form className={classes.form} autocomplete="off">
                        <div className={classes.item}>
                            <TextField id="standard-basic" label="Title" size="small" style={{width: "100%"}} />
                        </div>
                        <div className={classes.item}>
                            <TextField 
                                id="outlined-multiline-static"
                                multiline
                                rows={4}
                                defaultValue="Tell your story..."
                                variant="outlined"
                                label="Description" 
                                size="small" 
                                style={{width: "100%"}} />
                        </div>
                        <div div className={classes.item}>
                            <TextField select label="visibility" value="Public">
                                <MenuItem value="Public">Public</MenuItem>
                                <MenuItem value="Private">Private</MenuItem>
                                <MenuItem value="Unlisted">Unlisted</MenuItem>
                            </TextField>
                        </div>
                        <div className={classes.item}>
                            <FormLabel component="legend">Who can comment?</FormLabel>
                            <RadioGroup>
                                <FormControlLabel value="Everybody" control={<Radio size="small" />} label="Everybody" />
                                <FormControlLabel value="my friends" control={<Radio size="small" />} label="My friends" />
                                <FormControlLabel value="nobody" control={<Radio size="small" />} label="Nobody" />
                                <FormControlLabel value="Custom" disabled control={<Radio size="small" />} label="Custom(Premium)" />
                            </RadioGroup>
                        </div>
                        <div className={classes.item}>
                            <Button variant="outlined" color="primary">Create</Button>
                            <Button variant="outlined" color="secondary">Cancel</Button>

                        </div>
                    </form>
                </Container>
            </Modal>
        </>
    )
};

export default Add;