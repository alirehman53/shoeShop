import React from 'react'

import {
    makeStyles
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {
    Logout
} from '../reducers/actions/authentication'

import {
    connect
} from 'react-redux'


import {
    Link
} from 'react-router-dom';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {

        backgroundColor: theme.palette.background.paper,





    },
    bar: {
        backgroundColor: 'white',
        height: "5vh"


    },
    link: {
        color: 'grey',
        fontWeight: 'bold',
        textDecoration: "none",
        fontSize: "16px",
		padding:"5px"


    }



}));

function AuthNav(props) {
    const classes = useStyles();
    const {
        authentication,
        profile
    } = props;

    return (

        <
        div style = {
            {
                display: "grid",
                gridTemplateColumns: '1fr 2fr'
            }
        } >

        <
        div > {
            "  "
        } < /div>

        <
        div className = {
            classes.root
        } >


        <
        nav >
        <
        AppBar position = "static"
        style = {
            {
                border: "none",
                boxShadow: "none"
            }
        } >

        <
        div className = {
            classes.bar
        } >

        {!authentication.uid ?
            <
            div >

            <
            Link to = "/signup"
            className = {
                classes.link
            } >
            SignUp <
            /Link>{' '} <
            Link to = "/signin"
            className = {
                classes.link
            } >

            SignIn <
            /
            Link > < /div> : <
            div

            >

            {

                profile.Admin ?
                <
                Link to = "/admin"
                className = {
                    classes.link
                } >

                Admin Panel <
                /
                Link > : null
            }



            <
            Button onClick = {
                props.Logout
            } >



            <
            Link to = "/signin"
            className = {
                classes.link
            } >

            LogOut <
            /Link>  < /
            Button >


            <
            /div>


        }

        <
        /div>

        <
        /AppBar>{' '} < /
        nav > {
            ' '
        } <
        /div>

        <
        /div>
    );
}

const mapStateToProps = (s) => {

    return {
        authentication: s.firebase.auth,
        profile: s.firebase.profile
    }
}



const mapDispatchToProps = (dispatch) => {
    return {
        Logout: () => dispatch(Logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthNav);