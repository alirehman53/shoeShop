import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const useStyles = makeStyles({
    root: {
        width: '50vw',
        marginBottom: "8px",
        backgroundColor: "grey",
        border: "4px solid white"

    },
    ara: {
        display: 'flex',
        flexBasis: "auto"
    },
    media: {
        height: 0,
        paddingTop: '50%', // 16:9,
        backgroundSize: "contain",
        backgroundColor: "white",


        flex: 1
    },
    content: {


        flex: 1

    },
    type: {
        color: "white",


    },
    footer: {
        backgroundColor: "#37474F",
        color: "white"
    }

});


function ItemAddedNotification(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        props.clk();
        setOpen(true);

    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return ( <
        div >
        <
        Button variant = "contained"
        color = "secondary"
        onClick = {
            () => handleClick()
        } >
        <
        Typography variant = "button" > Add To Cart < /Typography> < /
        Button > <
        Snackbar anchorOrigin = {
            {
                vertical: 'bottom',
                horizontal: 'right',
            }
        }
        open = {
            open
        }
        autoHideDuration = {
            6000
        }
        onClose = {
            handleClose
        }
        message = "Item Added To Cart"
        action = { <
            React.Fragment >
            <
            IconButton size = "small"
            ariaLabel = "close"
            color = "inherit"
            onClick = {
                handleClose
            } >
            <
            CloseIcon fontSize = "small" / >
            <
            /IconButton> < /
            React.Fragment >
        }
        /> < /
        div >
    );
}

export default function MediaCard(props) {
    const classes = useStyles();

    const handleClick = () => {
        props.addToCart(props.id);
    }

    return ( <
        Card className = {
            classes.root
        } >
        <
        CardActionArea className = {
            classes.ara
        } >
        <
        CardMedia className = {
            classes.media
        }
        image = {
            props.image
        }
        title = {
            props.title
        }
        /> <
        CardContent className = {
            classes.content
        } >
        <
        Typography gutterBottom variant = "h5"
        className = {
            classes.type
        }
        component = "h2" > {
            props.title
        } <
        /Typography> <
        Typography variant = "body2"
        className = {
            classes.type
        }
        color = "textSecondary"
        component = "p" > {
            "Rs-" + props.price.toString()
        } <
        /Typography> 




        <
        ItemAddedNotification clk = {
            handleClick
        }
        / >


        <
        /
        CardContent > <
        /CardActionArea>

        <
        /Card>
    );
}