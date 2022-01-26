import { Avatar, Container, Divider, ImageList, ImageListItem, Link, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        position: "sticky",
        top: 0   
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
        color: "#555",
    },
    link: {
        marginRight: theme.spacing(2),
        color: "#555",
        fontSize: 16,
    },
}));

const Rightbar = () => {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <Typography className={classes.title} gutterBottom>Online Friends</Typography>
            <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
            </AvatarGroup>
            <Typography className={classes.title} gutterBottom>Gallery</Typography>
            <ImageList rowHeight={160} className={classes.imageList} cols={2}>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/breakfast.jpg" alt="image" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/vegetables.jpg" alt="image" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/burgers.jpg" alt="image" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/hats.jpg" alt="image" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/camera.jpg" alt="image" />
                </ImageListItem>
                <ImageListItem>
                    <img src="https://v4.mui.com/static/images/image-list/star.jpg" alt="image" />
                </ImageListItem>
            </ImageList>
            <Typography className={classes.title} gutterBottom>Categories</Typography>
            <Link href="#" className={classes.link}>Sport </Link>
            <Link href="#" className={classes.link}>Food </Link>
            <Divider flexItem style={{marginBottom:5}}/>
            <Link href="#" className={classes.link}>Movies </Link>
            <Link href="#" className={classes.link}>Entertainment </Link>
            <Link href="#" className={classes.link}>Cooking </Link>
        </Container>
    );
};

export default Rightbar;