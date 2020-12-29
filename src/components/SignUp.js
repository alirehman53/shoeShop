import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'
import { SignUp } from '../reducers/actions/authentication'

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
		fontSize:"1em",
		padding:"0.5%",
		color:"gray",
		borderColor:"gray"
	}
	,
	
	label:{
		textAlign:"left"
	}
		
});

function Signup(props) {

    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    });
	const [errors,setError] = useState({email: "",password: "",firstName: "",lastName: ""});
	
    const classes = useStyles();
    const {
        errorAuth
    } = props;

    if (errorAuth === 'Signup Successfull') {
        window.location.pathname = "/";
    }
	
	const formValidation = ()=>{
            let formIsValid = true;
			let error={};

            if(newUser["firstName"]===""){
               formIsValid = false;
			   error["firstName"]="Cannot be empty";
			   document.getElementById("firstName").style.borderColor = "red";
            }
            else if(newUser["firstName"] !== ""){
               if(!newUser["firstName"].match(/^[a-zA-Z]+$/)){
                  formIsValid = false;
				  setNewUser({...newUser,firstName: ""});
				  document.getElementById("firstName").value="";
				  error["firstName"]="Only letters";
				  document.getElementById("firstName").style.borderColor = "red";
               }        
            }
			
			if(newUser["lastName"]===""){
               formIsValid = false;
			   error["lastName"]="Cannot be empty";
			   document.getElementById("lastName").style.borderColor = "red";
            }
            else if(newUser["lastName"] !== ""){
               if(!newUser["lastName"].match(/^[a-zA-Z]+$/)){
                  formIsValid = false;
				  setNewUser({...newUser,lastName: ""});
				  document.getElementById("lastName").value="";
				  error["lastName"]="Only letters";
				  document.getElementById("lastName").style.borderColor = "red";
               }        
            }
			
			if(newUser["email"] === ""){
               formIsValid = false;
			   error["email"]="Cannot be empty";
			   document.getElementById("email").style.borderColor = "red";
            }
             else if(newUser["email"] !== ""){
                if(!(new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(newUser.email))){
                  formIsValid = false;
				  setNewUser({...newUser,email: ""});
				  document.getElementById("email").value="";
				  error["email"]="a-z0-9@a-z0-9.com";
				  document.getElementById("email").style.borderColor = "red";
               }        
           }  
		   
		   if(newUser["password"] === ""){
               formIsValid = false;
			   error["password"]="Cannot be empty";
			   document.getElementById("password").style.borderColor = "red";
            }
             else if(newUser["password"] !== ""){
                if(newUser.password.length < 8){
                  formIsValid = false;
				  setNewUser({...newUser,password: ""});
				  document.getElementById("password").value="";
				  error["password"]="too short password";
				  document.getElementById("password").style.borderColor = "red";
               }        
           }  
			
			
			
           setError({firstName:error["firstName"],lastName:error["lastName"],email:error["email"],password:error["password"]});
           return formIsValid;
       }



    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.id]: e.target.value
        })
		document.getElementById(e.target.id).style.borderColor = "gray";
		document.getElementById(e.target.id).placeholder = "";

    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValidation()) {
            props.SignUp(newUser);
        } 
    }



    return ( 
	<Card className = {classes.root}> 
		<CardActionArea>
        <CardContent >

        <
        Typography gutterBottom variant = "h4"
        className = { classes.type }
        component = "h4" > SIGNUP < /Typography>

        <
        Typography gutterBottom variant = "h6"
        className = { classes.type }
        component = "h6" >

        <
        div className = { classes.content } >

        <
        div style = {
            { color: "red", fontWeight: "bold", textAlign: "center" } } >
        <
        Typography > { errorAuth ? (errorAuth !== 'Signup Successfull' ? < p > Signup Failed < /p> : < p > Signup Successfull !</p > ) : null } < /Typography> <
        /div>





        <div className = {classes.content} >
            <label htmlFor = "firstName" className={classes.label}> First Name < /label> 
		    <input type = "text" id = 'firstName' onChange = {handleChange} className={classes.input} placeholder={errors["firstName"]} required />
        </div>

        <div className = {classes.content}>
            <label htmlFor = "lastName" className={classes.label}>Last Name</label> 
		    <input type = "text" id = 'lastName' onChange = {handleChange} className={classes.input} placeholder={errors["lastName"]} required />
        </div>



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
        <Button variant = "contained" color = "secondary" onClick = {(evt) => handleSubmit(evt)}>SIGNUP</Button>
		</div>


        <
        /div>


        <
        /Typography>



        </CardContent>
		</CardActionArea >
		</Card>
		
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