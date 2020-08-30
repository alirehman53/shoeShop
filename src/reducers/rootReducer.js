import shoe1 from '../images/shoe/shoe1.jpg';
import shoe2 from '../images/shoe/shoe2.jpeg';
import shoe3 from '../images/shoe/shoe3.png';
import shoe4 from '../images/shoe/shoe4.jpeg';
import shoe5 from '../images/shoe/shoe5.jpg';
import shoe6 from '../images/shoe/shoe6.jpg';
import shoe7 from '../images/shoe/shoe7.jpg';
import shoe8 from '../images/shoe/shoe8.jpg';
import shirt1 from '../images/shirts/shirt1.png';
import shirt2 from '../images/shirts/shirt2.jpg';
import shirt3 from '../images/shirts/shirt3.jpg';
import shirt4 from '../images/shirts/shirt4.jpeg';
import shirt5 from '../images/shirts/shirt5.jpg';
import shirt6 from '../images/shirts/shirt6.jpg';
import shirt7 from '../images/shirts/shirt7.jpg';
import shirt8 from '../images/shirts/shirt8.jpg';

import jeans1 from '../images/jeans/jean1.jpg';
import jeans2 from '../images/jeans/jean2.jpg';
import jeans3 from '../images/jeans/jean3.jpg';
import jeans4 from '../images/jeans/jean4.jpg';
import jeans5 from '../images/jeans/jean5.jpg';
import jeans6 from '../images/jeans/jean6.jpg';
import jeans7 from '../images/jeans/jean7.jpg';
import jeans8 from '../images/jeans/jean8.jpg';

const initState = {
    shoes: [{
            id: 1,
            name: 'shoe1',
            img: shoe1,
            price: 2000,
        },
        {
            id: 2,
            name: 'shoe2',
            img: shoe2,
            price: 2090,
        },
        {
            id: 3,
            name: 'shoe3',
            img: shoe3,
            price: 4999,
        },
        {
            id: 4,
            name: 'shoe4',
            img: shoe4,
            price: 1599,
        },
        {
            id: 5,
            name: 'shoe5',
            img: shoe5,
            price: 2000,
        },
        {
            id: 6,
            name: 'shoe6',
            img: shoe6,
            price: 3000,
        },
        {
            id: 7,
            name: 'shoe7',
            img: shoe7,
            price: 5000,
        },
        {
            id: 8,
            name: 'shoe8',
            img: shoe8,
            price: 4500,
        },
    ],

    shirts: [{
            id: 9,
            name: 'shirt1',
            img: shirt1,
            price: 2000,
        },
        {
            id: 10,
            name: 'shirt2',
            img: shirt2,
            price: 3000,
        },
        {
            id: 11,
            name: 'shirt3',
            img: shirt3,
            price: 4000,
        },
        {
            id: 12,
            name: 'shirt4',
            img: shirt4,
            price: 1000,
        },
        {
            id: 13,
            name: 'shirt5',
            img: shirt5,
            price: 2500,
        },
        {
            id: 14,
            name: 'shirt6',
            img: shirt6,
            price: 1700,
        },
        {
            id: 15,
            name: 'shirt7',
            img: shirt7,
            price: 1999,
        },
        {
            id: 16,
            name: 'shirt8',
            img: shirt8,
            price: 2909,
        },
    ],
    jeans: [{
            id: 17,
            name: 'jeans1',
            img: jeans1,
            price: 2000,
        },
        {
            id: 18,
            name: 'jeans2',
            img: jeans2,
            price: 1000,
        },
        {
            id: 19,
            name: 'jeans3',
            img: jeans3,
            price: 4000,
        },
        {
            id: 20,
            name: 'jeans4',
            img: jeans4,
            price: 5000,
        },
        {
            id: 21,
            name: 'jeans5',
            img: jeans5,
            price: 3000,
        },
        {
            id: 22,
            name: 'jeans6',
            img: jeans6,
            price: 2500,
        },
        {
            id: 23,
            name: 'jeans7',
            img: jeans7,
            price: 1500,
        },
        {
            id: 24,
            name: 'jeans8',
            img: jeans8,
            price: 1599,
        },
    ],
    cartItem: [],
    bill: 0,
};

const rootReducer = (state = initState, action) => {
    if (action.type === 'Add_To_Cart') {
        let newCart = state.cartItem;
        let existence = newCart.filter((item) => item.id === action.id);

        if (existence.length === 0) {
            newCart = newCart.concat([{
                id: action.id,
                quantity: 1,
            }, ]);
            let AllItem = state.shoes;
            AllItem = AllItem.concat(state.shirts).concat(state.jeans);
            let amt = 0;

            let cartItemId = newCart.map((item) => item.id);

            let cartItem = AllItem.filter((item) => cartItemId.includes(item.id));

            if (cartItem.length !== 0) {
                cartItem = cartItem.map((item) => {
                    let cart = newCart.filter((item1) => item1.id === item.id);

                    return {
                        ...item,
                        quantity: cart[0].quantity,
                    };
                });

                for (let i = 0; i < cartItem.length; i++) {
                    amt += cartItem[i].price * cartItem[i].quantity;
                }
            }

            return {
                ...state,
                cartItem: newCart,
                bill: amt,
            };
        }
    } else if (action.type === 'Remove_Item') {
        let newCart = state.cartItem.filter((item) => item.id !== action.id);
        let AllItem = state.shoes;
        AllItem = AllItem.concat(state.shirts).concat(state.jeans);
        let amt = 0;

        let cartItemId = newCart.map((item) => item.id);

        let cartItem = AllItem.filter((item) => cartItemId.includes(item.id));

        if (cartItem.length !== 0) {
            cartItem = cartItem.map((item) => {
                let cart = newCart.filter((item1) => item1.id === item.id);

                return {
                    ...item,
                    quantity: cart[0].quantity,
                };
            });

            for (let i = 0; i < cartItem.length; i++) {
                amt += cartItem[i].price * cartItem[i].quantity;
            }
        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };
    } else if (action.type === 'Increment_Quantity') {
        let AllItem = state.shoes;
        AllItem = AllItem.concat(state.shirts).concat(state.jeans);
        let amt = 0;

        let item = state.cartItem.find((item) => item.id === action.id);
        item.quantity += 1;

        let newCart = state.cartItem.filter((item) => item.id !== action.id);
        newCart = newCart.concat([item]);

        let cartItemId = newCart.map((item) => item.id);

        let cartItem = AllItem.filter((item) => cartItemId.includes(item.id));

        if (cartItem.length !== 0) {
            cartItem = cartItem.map((item) => {
                let cart = newCart.filter((item1) => item1.id === item.id);

                return {
                    ...item,
                    quantity: cart[0].quantity,
                };
            });

            for (let i = 0; i < cartItem.length; i++) {
                amt += cartItem[i].price * cartItem[i].quantity;
            }
        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };
    } else if (action.type === 'Decrement_Quantity') {
        let AllItem = state.shoes;
        AllItem = AllItem.concat(state.shirts).concat(state.jeans);
        let amt = 0;

        let item = state.cartItem.find((item) => item.id === action.id);
        if (item.quantity > 1) {
            item.quantity -= 1;
        }

        let newCart = state.cartItem.filter((item) => item.id !== action.id);
        newCart = newCart.concat([item]);

        let cartItemId = newCart.map((item) => item.id);

        let cartItem = AllItem.filter((item) => cartItemId.includes(item.id));

        if (cartItem.length !== 0) {
            cartItem = cartItem.map((item) => {
                let cart = newCart.filter((item1) => item1.id === item.id);

                return {
                    ...item,
                    quantity: cart[0].quantity,
                };
            });

            for (let i = 0; i < cartItem.length; i++) {
                amt += cartItem[i].price * cartItem[i].quantity;
            }
        }

        return {
            ...state,
            cartItem: newCart,
            bill: amt,
        };
    }

    return state;
};

export default rootReducer;