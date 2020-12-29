import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles({
    root: {

        marginBottom: '8px',
        backgroundColor: 'white',
        border: '2px solid gray',
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
        color: 'gray',
    },
    footer: {
        backgroundColor: '#37474F',
        color: 'white',
    },
    button: {
        maxWidth: '35px',
        maxHeight: '35px',
        minWidth: '35px',
        minHeight: '35px',
    },
});


function YourOrderCard(props) {
    const classes = useStyles();
	
    return (
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
        /Typography>{' '} 
		<Typography variant = "body2" className = {classes.type} color = "textSecondary" component = "p" > 
		    {'Rs-' + props.price.toString()} 
		</Typography>
		
		<div style = {{display: 'flex'}}> 
		
        <Typography gutterBottom variant = "h5" component = "h2" style = {{margin: '5px',color: 'grey'}}>{'x'+props.quantity.toString()}</Typography>

		</div>
		
		
		</CardContent>
		

		
		</CardActionArea> 
		
		</Card >
    );
}


export default YourOrderCard;