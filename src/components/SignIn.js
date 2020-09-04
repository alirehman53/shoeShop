import React, {
    useState
} from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {
    connect
} from 'react-redux'
import {
    LogIn
} from '../reducers/actions/authentication'

const useStyles = makeStyles({
    root: {
        width: '90vw',
        marginBottom: '8px',
        marginTop: '100px',
        margin: "auto"
    },


    type: {
        color: 'grey',
    },
    content: {
        display: 'grid',
        gridGap: "40px"
    },

    button: {
        maxWidth: '35px',
        maxHeight: '35px',
        minWidth: '35px',
        minHeight: '35px',
    },
});



function Login(props) {

    const [User, setUser] = useState({
        email: '',
        password: ''
    });



    const classes = useStyles();


    const handleChange = (e) => {
        setUser({
            ...User,
            [e.target.id]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(User);
        props.LogIn(User);
    }

    const {
        errorAuth
    } = props;

    if (errorAuth === "Signin Successfull") {
        window.location.href = "http://localhost:3000/";
    }



    return ( <
        Card className = {
            classes.root
        } >

        <
        CardActionArea >


        <
        CardContent >





        <
        Typography gutterBottom variant = "h4"
        className = {
            classes.type
        }
        component = "h4" > LOGIN <
        /Typography>





        <
        Typography gutterBottom variant = "h6"
        className = {
            classes.type
        }
        component = "h6" >


        <
        div className = {
            classes.content
        } >

        <
        div style = {
            {
                color: "red",
                fontWeight: "bold",
                textAlign: "center"
            }
        } >
        <
        Typography > {

            errorAuth ? (errorAuth !== "Signin Successfull" ? < p > Login Failed < /p> : < p > Login Successfull !</p > ) : null
        } < /Typography > < /
        div >




        <
        div className = {
            classes.content
        } >


        <
        label htmlFor = "email" >
        Email:

        <
        /label>

        <
        input type = "email"
        id = 'email'
        onChange = {
            handleChange
        }
        />



        <
        /div>

        <
        div className = {
            classes.content
        } >

        <
        label htmlFor = "password" >
        Password: <
        /label>

        <
        input type = "password"
        id = 'password'
        onChange = {
            handleChange
        }
        />



        <
        /div>

        <
        div >



        <
        Button variant = "contained"
        color = "secondary"
        onClick = {
            (evt) => handleSubmit(evt)
        } >
        LOGIN < /
        Button >


        <
        /div>


        <
        /div>


        <
        /Typography>



        <
        /CardContent>{' '} < /
        CardActionArea > <
        /Card>
    );
}


const mapStateToProps = (s) => {

    return {
        errorAuth: s.authentication.errorAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        LogIn: (credentials) => dispatch(LogIn(credentials))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);