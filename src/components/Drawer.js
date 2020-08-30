import React from 'react';
import clsx from 'clsx';
import {
    makeStyles
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import CartCard from "./cartCard";

import shirt1 from '../images/shirts/shirt1.png';
import {
    connect
} from 'react-redux';

import {
    Link
} from 'react-router-dom';



const useStyles = makeStyles({
    list: {
        width: "50vw",
    },
    fullList: {
        width: 'auto',
    },
});

function SideDrawer(props) {
    const {
        shoes,
        shirts,
        jeans,
        cartItem
    } = props;
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });




    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            event.preventDefault();

            return;
        }

        setState({
            ...state,
            [anchor]: open
        });
    };

    const list = (anchor) => ( <
            div className = {
                clsx(classes.list, {
                    [classes.fullList]: anchor === 'top' || anchor === 'bottom',
                })
            }
            role = "presentation"
            onClick = {
                toggleDrawer(anchor, false)
            }
            onKeyDown = {
                toggleDrawer(anchor, false)
            } >
            <
            Typography color = "textSecondary" > < h1 style = {
                {
                    margin: "auto",
                    textAlign: "center"
                }
            } > Cart < /h1>< /Typography >
            <
            Divider / >

            <
            Typography color = "textSecondary" > < h3 > Total Amount: Rs {
                props.bill
            } < /h3>< /Typography >


            {
                cartItem.map(
                    (item) => {

                        let shoeItem = shoes.filter(shoe => shoe.id == item.id);


                        if (shoeItem.length != 0) {

                            shoeItem = shoeItem.map(shoe => {
                                if (item.id == shoe.id) {
                                    return {
                                        ...shoe,
                                        quantity: item.quantity
                                    }
                                }

                            });

                            return (
                                shoeItem.map(shoe =>

                                    <
                                    CartCard

                                    id = {
                                        shoe.id
                                    }


                                    title = {
                                        shoe.name
                                    }
                                    image = {
                                        shoe.img
                                    }
                                    price = {
                                        shoe.price
                                    }

                                    quantity = {
                                        shoe.quantity
                                    }

                                    removeItem = {
                                        props.removeItem
                                    }

                                    decrementQuantity = {
                                        props.decrementQuantity
                                    }

                                    incrementQuantity = {
                                        props.incrementQuantity
                                    }

                                    /> )
                                );
                            }
                            else {
                                return null;
                            }

                        }
                    )
                }


                {
                    cartItem.map(
                        (item) => {

                            let shirtItem = shirts.filter(shirt => shirt.id == item.id);


                            if (shirtItem.length != 0) {

                                shirtItem = shirtItem.map(shirt => {
                                    if (item.id == shirt.id) {
                                        return {
                                            ...shirt,
                                            quantity: item.quantity
                                        }
                                    }

                                });

                                return (
                                    shirtItem.map(shirt =>

                                        <
                                        CartCard id = {
                                            shirt.id
                                        }

                                        title = {
                                            shirt.name
                                        }
                                        image = {
                                            shirt.img
                                        }
                                        price = {
                                            shirt.price
                                        }

                                        removeItem = {
                                            props.removeItem
                                        }

                                        quantity = {
                                            shirt.quantity
                                        }

                                        decrementQuantity = {
                                            props.decrementQuantity
                                        }

                                        incrementQuantity = {
                                            props.incrementQuantity
                                        }



                                        /> )
                                    );
                                }
                                else {
                                    return null;
                                }

                            }
                        )
                    }


                    {
                        cartItem.map(
                            (item) => {

                                let jeanItem = jeans.filter(jean => jean.id == item.id);



                                if (jeanItem.length != 0) {

                                    jeanItem = jeanItem.map(jean => {
                                        if (item.id == jean.id) {
                                            return {
                                                ...jean,
                                                quantity: item.quantity
                                            }
                                        }

                                    });

                                    return (

                                        jeanItem.map(jean =>

                                            <
                                            CartCard id = {
                                                jean.id
                                            }

                                            title = {
                                                jean.name
                                            }
                                            image = {
                                                jean.img
                                            }
                                            price = {
                                                jean.price
                                            }

                                            quantity = {
                                                jean.quantity
                                            }

                                            removeItem = {
                                                props.removeItem
                                            }

                                            decrementQuantity = {
                                                props.decrementQuantity
                                            }

                                            incrementQuantity = {
                                                props.incrementQuantity
                                            }

                                            /> )
                                        );
                                    }
                                    else {
                                        return null;
                                    }

                                }
                            )
                        }






                        <
                        Divider / >


                            {
                                cartItem.length != 0 ?
                                <
                                div style = {
                                    {

                                        marginTop: "8px",
                                        textAlign: "center"
                                    }
                                } >

                                <
                                Link to = "checkout"
                                style = {
                                    {
                                        textDecoration: "none"
                                    }
                                } >

                                <
                                Button variant = "outlined"
                                color = "primary"


                                >
                                <
                                Typography variant = "button" > Check Out < /Typography> < /
                                Button >

                                <
                                /Link>

                                <
                                /div>

                                :
                                    null


                            }



                        <
                        /
                        div >
                    );

                    return ( <
                        div >

                        <
                        Button variant = "contained"
                        color = "default"
                        style = {
                            {
                                margin: "auto",
                                padding: "10px"

                            }
                        }
                        onClick = {
                            toggleDrawer("right", true)
                        } >
                        <
                        ShoppingCartIcon / >
                        <
                        /Button> <
                        Drawer anchor = {
                            "right"
                        }
                        open = {
                            state["right"]
                        }
                        onClose = {
                            toggleDrawer("right", false)
                        } > {
                            list("right")
                        } <
                        /Drawer>  </div >
                    );
                }


                function mapStateToProps(state) {
                    return {
                        cartItem: state.cartItem,
                        shirts: state.shirts,
                        jeans: state.jeans,
                        shoes: state.shoes,
                        bill: state.bill

                    }
                }


                function mapDispatchToProps(dispatch) {
                    return {
                        removeItem: (id) => {
                            dispatch({
                                type: "Remove_Item",
                                id: id
                            })
                        },
                        incrementQuantity: (id) => {
                            dispatch({
                                type: "Increment_Quantity",
                                id: id
                            })
                        },
                        decrementQuantity: (id) => {
                            dispatch({
                                type: "Decrement_Quantity",
                                id: id
                            })
                        }
                    }
                }


                export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);