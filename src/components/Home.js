import React from 'react';

import shop from '../images/shopImg.jpg';
import shirt from '../images/shirt1.jpg';
import shoe from '../images/shoe1.jpg';
import jean from '../images/jean1.jpg';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';
import { Icon } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';

const useStyles = makeStyles({
    root: {
        width: '100vw',
        marginBottom: '8px',
    },
    ara: {
        display: 'flex',
        flexBasis: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '26.25%',
        backgroundSize: 'contain',
        flex: 1,
    },
    content: {
        flex: 1,
    },
    type: {
        color: '#B0BEC5',
        textAlign: 'center',
    },
    footer: {
        backgroundColor: '#37474F',
        color: 'white',
    },
});

function MediaCard(props) {
    const classes = useStyles();

    return ( <
        Card className = { classes.root } >
        <
        CardActionArea className = { classes.ara } >
        <
        CardMedia className = { classes.media }
        image = { props.image }
        title = { props.title }
        />{' '} <
        CardContent className = { classes.content } >
        <
        Typography gutterBottom variant = "h5"
        component = "h2" > { ' ' } { props.title } { ' ' } <
        /Typography>{' '} <
        Typography variant = "body2"
        color = "textSecondary"
        component = "p" > { ' ' } { props.description } { ' ' } <
        /Typography>{' '} <
        /CardContent>{' '} <
        /CardActionArea>{' '} <
        /Card>
    );
}

function HeadingCard(props) {
    const classes = useStyles();

    return ( <
        Card className = { classes.root } >
        <
        CardActionArea className = { classes.ara } >
        <
        CardContent className = { classes.content }
        style = {
            {
                color: '#B0BEC5',
                textAlign: 'center',
            }
        } >
        <
        Typography gutterBottom variant = "h5"
        component = "h2" > { ' ' } { props.title } { ' ' } <
        /Typography>{' '} <
        Typography variant = "body2"
        color = "textSecondary"
        component = "p" > { ' ' } { props.description } { ' ' } <
        /Typography>{' '} <
        /CardContent>{' '} <
        /CardActionArea>{' '} <
        /Card>
    );
}

function BottomCard(props) {
    const classes = useStyles();

    return ( <
        Card className = { classes.root }
        style = {
            {
                backgroundColor: '#37474F',
                color: 'white',
            }
        } >
        <
        CardActionArea >
        <
        CardContent className = { classes.ara } >
        <
        Typography variant = "body2"
        color = "white"
        component = "p"
        className = { classes.content } >
        copyright© 2018 all rights reserved { ' ' } <
        /Typography>{' '} <
        div className = {
            (classes.content, classes.ara) } >
        <
        Icon > facebook < /Icon> <InstagramIcon / >
        <
        TwitterIcon / >
        <
        RedditIcon / >
        <
        /div>{' '} <
        /CardContent>{' '} <
        /CardActionArea>{' '} <
        /Card>
    );
}

function Home() {
    return ( <
        div >
        <
        img src = { shop }
        alt = { 'shop' }
        style = {
            {
                width: '100vw',
                height: '100vh',
                marginBottom: '5px',
            }
        }
        />{' '} <
        HeadingCard title = { 'Collection For Real Gentlemen' }
        description = {
            'When it comes to choosing an outfit for your favourite companion.You want a high-quality product that is both durable and comfortable. We offer wide range of cotton shirts, jeans and shoes from high end luxury styles to original for all types of activities'
        }
        />{' '} <
        MediaCard image = { shirt }
        title = { 'Shirt' }
        description = {
            "Cotton shirts breathe better than clothing made with synthetic materials, and are less prone to retaining odors and losing shape.Even better — cotton t-shirts are low maintenance and dont have a ton of washing instructions. It's a soft, familiar fabric that everyone can believe in."
        }
        />{' '} <
        MediaCard image = { shoe }
        title = { 'Shoes' }
        description = {
            'For many, the cost of high-quality shoes may seem uncomfortably high. Premium shoes are worth the price, though—they boast a high level of wearing comfort and are significantly longer-lasting than their cheaply mass-produced counterparts. When considered in the long term, purchasing quality shoes is actually easier on the wallet'
        }
        />{' '} <
        MediaCard image = { jean }
        title = { 'Jeans' }
        description = {
            "In case you haven't noticed, we have a lot of different jeans. Here, we breakdown exactly what makes each fit unique. Get the lowdown on our jeans. Then shop your next favorite."
        }
        />{' '} <
        BottomCard / >
        <
        /div>
    );
}

export default Home;