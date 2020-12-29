import React from 'react';

import {
    connect
} from 'react-redux';


import MediaCard from "./OneCard";
import {
    addToCart
} from '../reducers/actions/AddToCart'

import {
    firestoreConnect
} from 'react-redux-firebase'
import {
    compose
} from 'redux'
import styled from 'styled-components';


function OneShoes(props) {
	
	let itemId=window.location.pathname.split('/')[2];


    console.log(props);
    const {
        shoes,

    } = props;

    const CardWrapper = styled.div `
    display: grid;
    grid-area: content;
    grid-template-columns: 1fr 1fr;
    @media (max-width: 700px) {
      grid-template-columns: 1fr;
    }
  `;



    return ( <
        CardWrapper >

        {
            shoes ? shoes.map(
                (shoe) =>

                (shoe.id === itemId)?(<
                MediaCard id = {
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

                addToCart = {
                    props.addToCart
                }

                />):null

            ) : null


        }

        <
        /CardWrapper >
    );
}



function mapStateToProps(state) {
    let shoes = null;
    shoes = state.firestore.ordered.shoes ? state.firestore.ordered.shoes : null;

    return {
        shoes: shoes,

    }
}


function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item))
        }



    }
}


//export default connect(mapStateToProps, mapDispatchToProps)(Shoes);



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'shoes'
    }])
)(OneShoes);