import React, {
    useState
} from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import {
    connect
} from 'react-redux';

import {
    firestoreConnect
} from 'react-redux-firebase'
import {
    compose
} from 'redux'
import {
    PlaceOrder
} from '../reducers/actions/PlaceOrder'
import {Link} from 'react-router-dom';

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
        } > {
            ' '
        } < /
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

function ColorTextFields(props) {

    const [checkout, setCheckout] = useState({

        email: '',
        firstName: '',
        lastName: '',
        city: "",
        province: "",
        addressLine1: "",
        addressLine2: "",
        phone: ""




    });

    if (props.err) {
		document.getElementById("link").click();
    }


    const handleChange = (e) => {

        setCheckout({
            ...checkout,
            [e.target.id]: e.target.value
        })


    };

    const handleSubmit = (e) => {
        e.preventDefault();


        props.PlaceOrder(checkout);







    }








    return ( <
        form autoComplete = "off"
        onSubmit = {
            handleSubmit
        } >
        <
        div style = {
            {
                display: 'grid',


            }
        } >
		<Link id ="link" style={{display:"none"}} to="/ordered"></Link> 
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
        TextField id = "firstName"
        type = "text"
        label = "First Name"
        variant = "filled"
        required

        onChange = {
            handleChange
        }
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
        TextField id = "lastName"
        type = "text"
        label = "Last Name"
        variant = "filled"
        required onChange = {
            handleChange
        }
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
        TextField id = "email"
        type = "email"
        label = "Email Address"
        variant = "filled"
        required onChange = {
            handleChange
        }
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
        TextField id = "phone"
        pattern = "[0-9]*"
        type = "text"
        label = "Phone Number"
        variant = "filled"
        required onChange = {
            handleChange
        }
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
        TextField id = "addressLine1"
        type = "text"
        label = "Address Line-1"
        variant = "filled"
        required onChange = {
            handleChange
        }
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
        TextField id = "addressLine2"
        type = "text"
        label = "Address Line-2"
        required variant = "filled"
        onChange = {
            handleChange
        }
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
        TextField id = "city"
        type = "text"
        label = "city"
        variant = "filled"
        required onChange = {
            handleChange
        }
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
        TextField id = "province"
        type = "text"
        label = "province"
        variant = "filled"
        required onChange = {
            handleChange
        }
        color = "secondary" /
        >
        <
        /label>{' '} < /
        div >

        <
        div >

        <
        Order bill = {
            props.bill
        }
        />

        <
        /div>

        <
        div style = {
            {
                margin: "auto",
                marginTop: "10px"

            }
        } >


        <

        TextField type = "submit"
        variant = "outlined"
        color = "secondary"
        value = "PLACE-ORDER" /
        >

        <
        /div>


        <
        /div>


        <
        /form>
    );
}

function Form(props) {

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
        ColorTextFields PlaceOrder = {
            props.PlaceOrder
        }
        err = {
            props.err
        }

        bill = {
            props.bill
        }
        / > < /
        CardContent > {
            ' '
        } < /
        CardActionArea > {
            ' '
        } <
        /Card>
    );
}



function MediaCard(props) {
    const classes = useStyles();


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
        div >
        <
        Form

        bill = {
            props.bill
        }
        PlaceOrder = {
            props.PlaceOrder
        }
        err = {
            props.err
        }

        / >  <
        div

        style = {
            {

                textAlign: "center",
                justifyContent: "center",
                margin: "auto"
            }
        } >




        <
        /div>




        {
            ' '
        } < /
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

        PlaceOrder = {
            props.PlaceOrder
        }

        err = {
            props.orderError
        }


        />

        </div >
    );
}

function mapStateToProps(state) {
    let Cart = state.firebase.profile.Cart ? state.firebase.profile.Cart : null;

    let amt = 0;

    if (Cart) {


        for (let i = 0; i < Cart.length; i++) {
            amt += Cart[i].price * Cart[i].quantity;
        }

    }

    return {
        bill: amt,
        orderError: state.ItemReducer.orderError

    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        PlaceOrder: (order) => dispatch(PlaceOrder(order))
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'shoes'
    }, {
        collection: 'shirts'
    }, {
        collection: 'jeans'
    }])
)(CheckOut);