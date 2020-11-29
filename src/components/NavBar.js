import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import shoes from '../images/shoes.ico';


import {
    Link
} from 'react-router-dom';

import SideDrawer from './Drawer';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,

    },
    bar: {
        backgroundColor: 'grey',
        height: "10vh",
        justifyContent: "center",
        width: "100vw"
    },
    link: {
        color: '#FFF',
        fontWeight: 'bold',
    },
	iconify: {
   fontSize: "48px",
   lineHeight: "1.5em",
   marginLeft:"3vw",
   marginRight:"3vw"
}

}));





export default function SimpleTabs() {
    const classes = useStyles();

    return ( <
        div className = {
            classes.root
        } >


        <
        nav >
        <
        AppBar position = "static"
        className = {
            classes.bar
        } >
        <
        Tabs ariaLabel = "simple tabs example" >
        <
        Link to = "home"
        className = {
            classes.link
        } >
        <div className={classes.iconify}>
		<span className={"iconify"} data-icon="el:home" data-inline="false"></span>
	        <p>HOME</p>
		</div>
        <
        /Link>{' '} <
        Link to = "Shirts"
        className = {
            classes.link
        } >
		<div className={classes.iconify} >
			<span className={"iconify"} data-icon="twemoji:t-shirt" data-inline="false"></span>
	                <p>SHIRTS</p>
		</div>
        
        <
        /Link>{' '} <
        Link to = "Shoes"
        className = {
            classes.link
        } >
        <div className={classes.iconify} >
		<img src={shoes} alt={"shoe_icon"} />
	        <P>SHOES</p>
		</div>
        <
        /Link>{' '} <
        Link to = "Jeans"
        className = {
            classes.link
        } >
		<div className={classes.iconify} >
			<span className={"iconify"} data-icon="noto-v1:jeans" data-inline="false"></span>
	                <P>JEANS</P>
		</div>
       
        <
        /Link> <
        SideDrawer / > {
            ' '
        } <
        /Tabs>{' '} 

        <
        /AppBar>{' '} < /
        nav > {
            ' '
        } <
        /div>
    );
}
