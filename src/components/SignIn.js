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
        margin: "auto",
    },
    type: {
        color: 'gray',
		margin: "auto",
		textAlign:"center"
    },
    content: {
        display: 'grid',
        gridGap: "20px",
		margin: "auto"
    },
    button: {
        maxWidth: '35px',
        maxHeight: '35px',
        minWidth: '35px',
        minHeight: '35px',
    },
	input:{
		width:"90%",
		fontSize:"1.1em",
		padding:"0.5%",
		color:"gray",
		borderColor:"gray"
	}
	,
	label:{
		textAlign:"left"
	}
});


function Login(props) {

    const [User, setUser] = useState({
        email: '',
        password: ''
    });
	const [errors,setError] = useState({email: null,password: null});

    const classes = useStyles();
	
	const formValidation = ()=>{
            let formIsValid = true;
			let error={};

			if(User["email"] === ""){
               formIsValid = false;
			   error["email"]="Cannot be empty";
			   document.getElementById("email").style.borderColor = "red";
			   
            }else if(User["email"] !== ""){
                if(!(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(User.email))){
                  formIsValid = false;
				  setUser({...User,email: ""});
				  document.getElementById("email").value="";
				  error["email"]="invalid email format";
				  document.getElementById("email").style.borderColor = "red";
               }        
           }  
		   
		   if(User["password"] === ""){
               formIsValid = false;
			   error["password"]="Cannot be empty";
			   document.getElementById("password").style.borderColor = "red";
            }
             else if(User["password"] !== ""){
                if(User.password.length < 8){
                  formIsValid = false;
				  setUser({...User,password: ""});
				  document.getElementById("password").value="";
				  error["password"]="too short password";
				  document.getElementById("password").style.borderColor = "red";
               }        
           }  
			
           setError({email:error["email"],password:error["password"]});
           return formIsValid;
       }


    const handleChange = (e) => {
        setUser({
            ...User,
            [e.target.id]: e.target.value
        });
		
		document.getElementById(e.target.id).style.borderColor = "gray";
		document.getElementById(e.target.id).placeholder = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formValidation()){
			props.LogIn(User);
		}
    }

    const {
        errorAuth
    } = props;


    if (errorAuth === "Signin Successfull") {

        window.location.pathname = "/";
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

            errorAuth ? (errorAuth !== "Signin Successfull" ? < p > Wrong email or password < /p> : < p > Login Successfull !</p > ) : null
        } < /Typography > < /
        div >
		
		
        <
        div className = {
            classes.content
        } >


        <
        label htmlFor = "email" className={classes.label} >
        Email:

        <
        /label>

        <
        input type = "email"
        id = 'email'
        onChange = {
            handleChange
        }
         className={classes.input} placeholder={errors["email"]} required /
        >



        <
        /div>

        <
        div className = {
            classes.content
        } >

        <
        label htmlFor = "password" className={classes.label} >
        Password: <
        /label>

        <
        input type = "password"
        id = 'password'
        onChange = {
            handleChange
        }
        className={classes.input} placeholder={errors["password"]} 
		required /
        >



        <
        /div>

        <div className = {classes.content}>
        <Button variant = "contained" color = "secondary" onClick = {(evt) => handleSubmit(evt)}>LOGIN</Button>
		</div>

        </div>


        </Typography>



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