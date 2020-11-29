import React from 'react';
import clsx from 'clsx';
import {
    makeStyles
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

import Divider from '@material-ui/core/Divider';

import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import CartCard from './cartCard';
import {
    removeItem
} from '../reducers/actions/RemoveItem'
import {
    incrementQuantity
} from '../reducers/actions/IncrementQuantity'

import {
    decrementQuantity
} from '../reducers/actions/DecrementQuantity'

import {
    connect
} from 'react-redux';

import {
    Link
} from 'react-router-dom';

import {
    firestoreConnect
} from 'react-redux-firebase'
import {
    compose
} from 'redux'

const useStyles = makeStyles({
    list: {
        width: '50vw',
    },
    fullList: {
        width: 'auto',
    },
	iconify: {
   fontSize: "48px",
   lineHeight: "1.5em",
   marginLeft:"5vw"
}
});



function SideDrawer(props) {
    const {
        shoes,
        shirts,
        jeans,
        cartItem
    } = props;
    console.log(cartItem);
    const classes = useStyles();
    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            event.preventDefault();

            return;
        }

        setState({
            ...state,
            [anchor]: open,
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
        Typography color = "textSecondary" > {
            ' '
        } <
        h1 style = {
            {
                margin: 'auto',
                textAlign: 'center',
            }
        } > {
            ' '
        }
        Cart {
            ' '
        } <
        /h1> < /
        Typography > <
        Divider / >

        <
        Typography color = "textSecondary" > {
            ' '
        } <
        h3 > Total Amount: Rs {
            props.bill
        } < /h3> < /
        Typography >

        {
            cartItem ? (cartItem.map((item) => {
                    let shoeItem = shoes.filter((shoe) => shoe.id === item.id);

                    if (shoeItem.length !== 0) {
                        shoeItem = shoeItem.map((shoe) => {
                            if (item.id === shoe.id) {
                                return {
                                    ...shoe,
                                    quantity: item.quantity,
                                };
                            } else {
                                return null;
                            }
                        });

                        return shoeItem.map((shoe) => ( <
                            CartCard id = {
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
                            />
                        ));
                    } else {
                        return null;
                    }
                })

            ) : null

        }

        {
            cartItem ? (cartItem.map((item) => {
                let shirtItem = shirts.filter((shirt) => shirt.id === item.id);

                if (shirtItem.length !== 0) {
                    shirtItem = shirtItem.map((shirt) => {
                        if (item.id === shirt.id) {
                            return {
                                ...shirt,
                                quantity: item.quantity,
                            };
                        } else {
                            return null;
                        }
                    });

                    return shirtItem.map((shirt) => ( <
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
                        />
                    ));
                } else {
                    return null;
                }
            })) : null
        }

        {
            cartItem ? (cartItem.map((item) => {
                    let jeanItem = jeans.filter((jean) => jean.id === item.id);

                    if (jeanItem.length !== 0) {
                        jeanItem = jeanItem.map((jean) => {
                            if (item.id === jean.id) {
                                return {
                                    ...jean,
                                    quantity: item.quantity,
                                };
                            } else {
                                return null;
                            }
                        });

                        return jeanItem.map((jean) => ( <
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
                            />
                        ));
                    } else {
                        return null;
                    }
                })

            ) : null
        }

        <
        Divider / >

        {
            cartItem ? (cartItem.length !== 0 ? ( <
                div style = {
                    {
                        marginTop: '8px',
                        textAlign: 'center',
                    }
                } >
                <
                Link to = "checkout"
                style = {
                    {
                        textDecoration: 'none',
                    }
                } >
                <
                Button variant = "outlined"
                color = "primary" >
                <
                Typography variant = "button" > Check Out < /Typography>{' '} < /
                Button > <
                /Link> < /
                div >
            ) : null) : null
        } <
        /div>
    );

    return ( <
        div >
        <
        Button variant = "contained"
        color = "default"
        style = {
            {
                marginTop: '10px'
            }
        }
        onClick = {
            toggleDrawer('right', true)
        } >
		<div classes={classes.iconify} >
        <ShoppingCartIcon / >
		</div>
        <
        /Button>{' '} <
        Drawer anchor = {
            'right'
        }
        open = {
            state['right']
        }
        onClose = {
            toggleDrawer('right', false)
        } > {
            ' '
        } {
            list('right')
        } {
            ' '
        } <
        /Drawer>{' '} < /
        div >
    );
}

function mapStateToProps(state) {
    let shirts = state.firestore.ordered.shirts ? state.firestore.ordered.shirts : null;
    let shoes = state.firestore.ordered.shoes ? state.firestore.ordered.shoes : null;
    let jeans = state.firestore.ordered.jeans ? state.firestore.ordered.jeans : null;
    let Cart = state.firebase.profile.Cart ? state.firebase.profile.Cart : null;

    let amt = 0;




    if (Cart) {


        for (let i = 0; i < Cart.length; i++) {
            amt += Cart[i].price * Cart[i].quantity;
        }

    }



    return {
        cartItem: Cart,
        shirts: shirts,
        jeans: jeans,
        shoes: shoes,
        bill: amt,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id));
        },
        incrementQuantity: (id) => {
            dispatch(incrementQuantity(id));
        },
        decrementQuantity: (id) => {
            dispatch(decrementQuantity(id));
        },
    };
}



//export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'shoes'
    }, {
        collection: 'shirts'
    }, {
        collection: 'jeans'
    }])
)(SideDrawer);