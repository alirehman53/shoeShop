import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import sound from '../audio/notify.mp3';
import ReactAudioPlayer from 'react-audio-player';


const useStyles = makeStyles({
    root: {

        marginBottom: '8px',
        backgroundColor: 'grey',
        border: '4px solid white',
    },
    ara: {
        display: 'flex',
        flexBasis: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '50%', // 16:9,
        backgroundSize: 'contain',
        backgroundColor: 'white',

        flex: 1,
    },
    content: {
        flex: 1,
    },
    type: {
        color: 'white',
    },
    footer: {
        backgroundColor: '#37474F',
        color: 'white',
    }
});

function ItemAddedNotification(props) {
    const [open, setOpen] = React.useState(false);

    const handleClick = (event) => {
		event.preventDefault();
        props.clk();
        if (props.auth.uid) {
            setOpen(true);
        }


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
            (event) => handleClick(event)
        } >
        <
        Typography variant = "button" > Add To Cart < /Typography>{' '} < /
        Button > {
            ' '
        } <
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
            3000
        }
        onClose = {
            handleClose
        }
        message = "Item Added To Cart"
        action = { <
            React.Fragment >
            <
            IconButton
            size = "small"
            ariaLabel = "close"
            color = "inherit"
            onClick = {
                handleClose
            } >
            <
            CloseIcon fontSize = "small" / >
            <
            /IconButton>{' '} < /
            React.Fragment >
        }
        />{' '} < /
        div >
    );
}

function MediaCard(props) {
    const classes = useStyles();
    const {
        authentication
    } = props;

    const handleClick = () => {
        if (!authentication.uid) {
            alert("Login Please");

        } else {
            props.addToCart({
                id: props.id,
                img: props.image,
                title: props.title,
                price: props.price
            });
			document.getElementById("audio"+props.id).play();

        }


    };
	

    return (
	<Link to={props.id.toString()} style={{textDecoration:"none"}}>
	    <Card className = {
            classes.root
        } >
        <CardActionArea className = {
            classes.ara
        } >
		
		
		 <CardMedia className={classes.media}
        image = {
            props.image
        }
        title = {
            props.title
        }
        >
		
		</CardMedia>
		
		

		<CardContent className = {
            classes.content
        } >
        <
        Typography gutterBottom variant = "h6"
        className = {classes.type}
        component = "h6" > {
            ' '
        } {
            props.title
        } {
            ' '
        } <
        /Typography>{' '} <
        Typography variant = "body2"
        className = {
            classes.type
        }
        color = "textSecondary"
        component = "p" > {
            ' '
        } {
            'Rs-' + props.price.toString()
        } {
            ' '
        } <
        /Typography> 
		
		<ItemAddedNotification auth = {authentication} clk = {handleClick}/> 
		<ReactAudioPlayer id={"audio"+props.id} src={sound} />
		
		
		</CardContent>
		

		
		</CardActionArea> 
		
		</Card >
		</Link>
    );
}



function mapStateToProps(state) {

    return {
        authentication: state.firebase.auth

    };
};


//export default connect(mapStateToProps, mapDispatchToProps)(Shoes);



export default connect(mapStateToProps)(MediaCard);