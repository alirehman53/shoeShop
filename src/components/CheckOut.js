import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardContent from '@material-ui/core/CardContent';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import {
    connect
} from 'react-redux';

import {
    Link
} from 'react-router-dom';
import styled from 'styled-components';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90vw',
        marginBottom: '8px',
        marginTop: '8px',
        backgroundColor: 'white',
        color: 'grey',
        margin: 'auto',
    },
    ara: {
        display: 'grid',
        gridTemplateRows: '1fr 10fr',
        gridTemplateAreas: "'header' 'content'",
    },
    content: {
        flex: 1,
    },
    type: {
        color: 'white',
    },
    form: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ColorTextFields() {
    return ( <
        form noValidate autoComplete = "off" >
        <
        div style = {
            {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
            }
        } >
        <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        First Name: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "First Name"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        Last Name: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "Last Name"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        Email: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "Email Address"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        Phone Number: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "Phone Number"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} < /
        div > {
            ' '
        } <
        Typography gutterBottom variant = "h6"
        style = {
            {
                textAlign: 'center',
            }
        }
        component = "h6" > {
            ' '
        } {
            'Shipping Address'
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} <
        div style = {
            {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
            }
        } >
        <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        Address Line - 1: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "Address Line-1"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        Address Line - 2: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "Address Line-2"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        CITY: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "city"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} <
        label >
        <
        Typography style = {
            {
                color: 'grey',
            }
        } > {
            ' '
        }
        STATE: {
            ' '
        } <
        /Typography>{' '} <
        br / >
        <
        TextField id = "filled-secondary"
        label = "state"
        variant = "filled"
        color = "secondary" /
        >
        <
        /label>{' '} < /
        div > {
            ' '
        } <
        /form>
    );
}

function Form() {
    return ( <
        Card >
        <
        CardActionArea >
        <
        CardContent >
        <
        Typography gutterBottom variant = "h6"
        style = {
            {
                textAlign: 'center',
            }
        }
        component = "h6" > {
            ' '
        } {
            'Delivery Details'
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} <
        ColorTextFields / >
        <
        /CardContent>{' '} < /
        CardActionArea > {
            ' '
        } <
        /Card>
    );
}

function Order(props) {
    return ( <
        Card >
        <
        CardActionArea >
        <
        CardContent >
        <
        Typography gutterBottom variant = "h6"
        style = {
            {
                textAlign: 'center',
            }
        }
        component = "h6" > {
            ' '
        } {
            'Order Summary'
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} <
        div style = {
            {
                display: 'grid',
                gridTemplateRows: '1fr 1fr 1fr 1fr 1fr',
            }
        } >
        <
        div >
        <
        Typography gutterBottom variant = "h6"
        style = {
            {
                color: 'grey',
            }
        }
        component = "h6" > {
            ' '
        } {
            'Payment Method: Cash On Delivery Only'
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} < /
        div > {
            ' '
        } <
        div >
        <
        Typography gutterBottom variant = "h6"
        style = {
            {
                color: 'grey',
            }
        }
        component = "h6" > {
            ' '
        } {
            'SHIPPING CHARGES: RS-69'
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} < /
        div > {
            ' '
        } <
        div >
        <
        Typography gutterBottom variant = "h6"
        style = {
            {
                color: 'grey',
            }
        }
        component = "h6" >
        SUBTOTAL: Rs - {
            props.bill
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} < /
        div > {
            ' '
        } <
        div >
        <
        Typography gutterBottom variant = "h6"
        style = {
            {
                color: 'grey',
            }
        }
        component = "h6" >
        TOTAL: RS - {
            props.bill + 69
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} < /
        div > {
            ' '
        } <
        div style = {
            {
                textAlign: 'center',
                marginTop: '8px',
            }
        } >
        <
        Link to = "/ordered"
        style = {
            {
                textDecoration: 'none',
            }
        } >
        <
        Button variant = "outlined"
        color = "secondary" >
        <
        Typography variant = "button" > PLACE ORDER < /Typography>{' '} < /
        Button > {
            ' '
        } <
        /Link>{' '} < /
        div > {
            ' '
        } <
        /div>{' '} < /
        CardContent > {
            ' '
        } <
        /CardActionArea>{' '} < /
        Card >
    );
}

function MediaCard(props) {
    const classes = useStyles();

    const CardWrapper = styled.div `
    display: grid;
    grid-area: content;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 1000px) {
      grid-template-columns: 1fr;
    }
  `;

    return ( <
        Card className = {
            classes.root
        } >
        <
        CardActionArea >
        <
        CardContent >
        <
        div className = {
            classes.ara
        } >
        <
        div >
        <
        Typography gutterBottom variant = "h4"
        style = {
            {
                color: 'grey',
                textAlign: 'center',
                gridArea: 'header',
            }
        }
        component = "h2" > {
            ' '
        } {
            'Your Order'
        } {
            ' '
        } <
        /Typography>{' '} <
        Divider style = {
            {
                backgroundColor: 'grey',
            }
        }
        />{' '} < /
        div > {
            ' '
        } <
        CardWrapper >
        <
        Form / >
        <
        Order bill = {
            props.bill
        }
        />{' '} < /
        CardWrapper > {
            ' '
        } <
        /div>{' '} < /
        CardContent > {
            ' '
        } <
        /CardActionArea>{' '} < /
        Card >
    );
}

function CheckOut(props) {
    let {
        bill
    } = props;
    return ( <
        div > {
            ' '
        } <
        MediaCard bill = {
            bill
        }
        />{' '} < /
        div >
    );
}

function mapStateToProps(state) {
    return {
        bill: state.ItemReducer.bill,
    };
}

//export default connect(mapStateToProps)(CheckOut);



export default compose(
  connect(mapStateToProps),
  firestoreConnect([{collection: 'shoes'} , {collection: 'shirts'} ,{collection: 'jeans'}])
)(CheckOut);

