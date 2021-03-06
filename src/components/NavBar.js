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
   fontSize: "30px",
   marginBottom:"0",
   paddingBottom:"0",
   paddingTop:"0",
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
		<p style={{fontSize:"0.5em",marginTop:"0.1%"}}>home</p>
		
		</div>
		
        <
        /Link>{' '} <
        Link to = "Shirts"
        className = {
            classes.link
        } >
		<div className={classes.iconify} >
			<span className={"iconify"} data-icon="twemoji:t-shirt" data-inline="false"></span>
			<p style={{fontSize:"0.5em",marginTop:"0.1%"}}>shirt</p>
		</div>
        
        <
        /Link>{' '} <
        Link to = "Shoes"
        className = {
            classes.link
        } >
        <div className={classes.iconify}>
		<img style={{display:"block",height:"40px"}} src={shoes} alt={"shoe_icon"} />
		<p style={{fontSize:"0.5em",marginTop:"0.1%"}}>shoes</p>
		</div>
        <
        /Link>{' '} <
        Link to = "Jeans"
        className = {
            classes.link
        } >
		<div className={classes.iconify} >
			<span className={"iconify"} data-icon="noto-v1:jeans" data-inline="false"></span>
			<p style={{fontSize:"0.5em",marginTop:"0.1%"}}>jeans</p>
		</div>
       
        </Link> 
		<SideDrawer />
		
		<Link to = "orders" className = {classes.link} >
		<div className={classes.iconify} >
			<i className={"fas fa-box"}></i>
			<p style={{fontSize:"0.5em",marginTop:"0.1%"}}>orders</p>
		</div>
        </Link>
		
		
        </Tabs>

        <
        /AppBar>< /
        nav > {
            ' '
        } <
        /div>
    );
}
