import React from 'react';
import {
    connect
} from 'react-redux';
import {
    addToCart
} from '../reducers/actions/AddToCart'
import MediaCard from './Card';
import {
    firestoreConnect
} from 'react-redux-firebase'
import {
    compose
} from 'redux'
import styled from 'styled-components';

function Shirts(props) {
    console.log(props);
    const {
        shirts
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
            shirts ? shirts.map(
                (shirt) => <
                MediaCard id = {
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
                addToCart = {
                    props.addToCart
                }
                />

            ) : null
        } <
        /CardWrapper>
    );
}

function mapStateToProps(state) {
    let shirts = state.firestore.ordered.shirts ? state.firestore.ordered.shirts : null;
    return {
        shirts: shirts

    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => dispatch(addToCart(item)),
    };
}

//export default connect(mapStateToProps, mapDispatchToProps)(Shirts);





export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    firestoreConnect([{
        collection: 'shirts'
    }])
)(Shirts);