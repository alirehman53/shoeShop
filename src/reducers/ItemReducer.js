const initState = {
    cartItem: [],
    bill: 0,
    orderError: null
};

const ItemReducer = (state = initState, action) => {

    if (action.type === 'Add_To_Cart') {
        let newCart = action.newCart;
        let amt = 0;




        if (newCart.length !== 0) {




            for (let i = 0; i < newCart.length; i++) {
                amt += newCart[i].price * newCart[i].quantity;
            }

        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };

    } else if (action.type === 'Remove_Item') {
        let newCart = action.newCart;
        let amt = 0;




        if (newCart.length !== 0) {




            for (let i = 0; i < newCart.length; i++) {
                amt += newCart[i].price * newCart[i].quantity;
            }

        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };
    } else
    if (action.type === 'Increment_Quantity') {
        let newCart = action.newCart;
        let amt = 0;




        if (newCart.length !== 0) {




            for (let i = 0; i < newCart.length; i++) {
                amt += newCart[i].price * newCart[i].quantity;
            }

        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };
    } else if (action.type === 'Decrement_Quantity') {
        let newCart = action.newCart;
        let amt = 0;




        if (newCart.length !== 0) {




            for (let i = 0; i < newCart.length; i++) {
                amt += newCart[i].price * newCart[i].quantity;
            }

        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };

    } else if (action.type === 'PLACE_ORDER') {
        console.log("order placed successfully");

        return {
            ...state,
            orderError: "order_success"
        };



    }

    return state;
};

export default ItemReducer;