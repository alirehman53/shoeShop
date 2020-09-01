import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


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
        <
        Tab label = "Home" / >
        <
        /Link>{' '} <
        Link to = "Shirts"
        className = {
            classes.link
        } >
        <
        Tab label = "Shirts" / >
        <
        /Link>{' '} <
        Link to = "Shoes"
        className = {
            classes.link
        } >
        <
        Tab label = "Shoes" / >
        <
        /Link>{' '} <
        Link to = "Jeans"
        className = {
            classes.link
        } >
        <
        Tab label = "Jeans" / >
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