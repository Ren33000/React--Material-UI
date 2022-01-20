import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    media: {
        height: 250,
        [theme.breakpoints.down("sm")]: {
            height: 180
        }
    },
    card: {
        marginBottom: theme.spacing(5)
    }
}));

const Post = () => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia 
                className={classes.media}
                image="avatar.png"
                title="My Post"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5"> My first post</Typography>
                    <Typography variant="body2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor et odit animi, adipisci amet nesciunt odio ullam numquam, itaque tempora expedita voluptates tenetur quia pariatur impedit cum! Eum, ipsam saepe.</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>  
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="primary">Learn More</Button>

            </CardActions>
        </Card>
    )
};

export default Post;