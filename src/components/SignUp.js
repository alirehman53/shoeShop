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
    SignUp
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



function Signup(props) {




    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
    const classes = useStyles();
    const {
        errorAuth
    } = props;

    if (errorAuth === 'Signup Successfull') {
        window.location.href = "http://localhost:3000/";

    }



    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SignUp(newUser);



    }



    return ( <
        Card className = {
            classes.root
        } > <
        CardActionArea >


        <
        CardContent >





        <
        Typography gutterBottom variant = "h4"
        className = {
            classes.type
        }
        component = "h4" > SIGNUP <
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

            errorAuth ? (errorAuth !== 'Signup Successfull' ? < p > Signup Failed < /p> : < p > Signup Successfull !</p > ) : null
        } < /Typography > < /
        div >





        <
        div className = {
            classes.content
        } >


        <
        label htmlFor = "firstName" > First Name < /label> <
        input type = "text"
        id = 'firstName'
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
        label htmlFor = "lastName" > Last Name < /label> <
        input type = "text"
        id = 'lastName'
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
        / >



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
        / >



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
        SIGNUP < /
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
    console.log(s);
    return {
        authentication: s.firebase.auth,
        errorAuth: s.authentication.errorAuth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        SignUp: (credentials) => dispatch(SignUp(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);