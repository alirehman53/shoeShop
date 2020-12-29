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


function OneJeans(props) {
	
	let itemId=window.location.pathname.split('/')[2];
	
	const {
        jeans,

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
        CardWrapper > {
            jeans ? jeans.map((jean) => (jean.id===itemId)?(( <
                MediaCard id = {
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
                addToCart = {
                    props.addToCart
                }
                />
            )) : null):null
        } <
        /CardWrapper>
    );
}

function mapStateToProps(state) {
    let jeans = null;
    jeans = state.firestore.ordered.jeans ? state.firestore.ordered.jeans : null;

    return {
        jeans: jeans,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item));
        },
    };
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'jeans'
    }])
)(OneJeans);









