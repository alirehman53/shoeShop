import React from 'react';

import {
    makeStyles
} from '@material-ui/core/styles';

import AdminCard from './adminCard';
import {
    connect
} from 'react-redux'
import {
    firestoreConnect
} from 'react-redux-firebase'
import {
    compose
} from 'redux'

import Typography from '@material-ui/core/Typography';


import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100vw',
		margin:'auto'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

function AdminPanel(props) {
    const classes = useStyles();

    const {
        order
    } = props;

    console.log(order);

    const [expanded, setExpanded] = React.useState(false);
    const [expanded2, setExpanded2] = React.useState(false);


    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleChange2 = (panel) => (event, isExpanded) => {
        setExpanded2(isExpanded ? panel : false);
    };

    return ( <
        div className = {
            classes.root
        } > {

            order ? order.map(o =>


                <
                Accordion expanded = {
                    expanded === o.id
                }
                onChange = {
                    handleChange(o.id)
                } >
                <
                AccordionSummary expandIcon = { <
                    ExpandMoreIcon / >
                }
                ariaControls = "panel1bh-content"
                id = "panel1bh-header" >
                <
                Typography className = {
                    classes.heading
                } > Ordered by < /Typography> <
                Typography className = {
                    classes.secondaryHeading
                } > {
                    o.orderDetails.firstName + " " + o.orderDetails.lastName
                } < /Typography> < /
                AccordionSummary > <
                AccordionDetails >
				
				<div   style={{display:"grid"}}>

                <
                div  >

                <
                Typography > AMOUNT: Rs {o.amount} < /Typography>
				

                </div>
				

                <div  >


                <
                Accordion expanded = {
                    expanded2 ===
                    o.id + "1"

                }
                onChange = {
                    handleChange2(o.id + "1")
                } >
                <
                AccordionSummary expandIcon = { <
                    ExpandMoreIcon / >
                }
                ariaControls = "panel1bh-content"
                id = "panel1bh-header" >
                <
                Typography className = {
                    classes.heading
                } > Customer Details < /Typography> <
                Typography className = {
                    classes.secondaryHeading
                } > {
                    o.orderDetails.email
                } < /Typography> < /
                AccordionSummary > <
                AccordionDetails >
                <
                Typography >
                first Name: {
                    o.orderDetails.firstName
                } < br / >
                last Name: {
                    o.orderDetails.lastName
                } < br / >


                email: {
                    o.orderDetails.email
                } < br / >

                phone: {
                    o.orderDetails.phone
                } < br / >
                address Line 1: {
                    o.orderDetails.addressLine1
                } < br / >
                address Line 2: {
                    o.orderDetails.addressLine2
                } < br / >
                city: {
                    o.orderDetails.city
                } < br / >
                province: {
                    o.orderDetails.province
                } < br / >

                <
                /Typography> < /
                AccordionDetails > <
                /Accordion> 
				
				</div>
				
				
				<div>


                <
                Accordion expanded = {
                    expanded2 ===
                    o.id + "2"

                }
                onChange = {
                    handleChange2(o.id + "2")
                } >
                <
                AccordionSummary expandIcon = { <
                    ExpandMoreIcon / >
                }
                ariaControls = "panel1bh-content"
                id = "panel1bh-header" >
                <
                Typography className = {
                    classes.heading
                } > Items Purchased < /Typography> 


                <
                /
                AccordionSummary > <
                AccordionDetails > {
                    o.cart ? o.cart.map(item => < AdminCard title = {
                            item.title
                        }
                        image = {
                            item.img
                        }
                        price = {
                            item.price
                        }
                        quantity = {
                            item.quantity
                        }
                        />):null

                    }


                    <
                    /
                    AccordionDetails > <
                    /Accordion> 
					
					
					</div>


                    <
                    /div>





























                    <
                    /AccordionDetails > < /
                    Accordion >







                ): null

            }









            <
            /
            div >
        );
    }







    const mapStateToProps = (s) => {
        let order = null;
        order = s.firestore.ordered.order ? s.firestore.ordered.order : null;


        return {
            order: order

        }
    };


    /*
    const mapDispatchToProps = (dispatch) => {
        return {
            SignUp: (credentials) => dispatch(SignUp(credentials))
        }
    }

    */



    export default compose(
        connect(mapStateToProps),
        firestoreConnect([{
            collection: 'order'
        }])
    )(AdminPanel);