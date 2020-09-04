import React from 'react';
import {
    connect
} from 'react-redux';




import MediaCard from "./Card";
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

function Shoes(props) {
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

                <
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

                />

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
)(Shoes);