import React from 'react';
import {
    connect
} from 'react-redux';

import MediaCard from './Card';
import {
    addToCart
} from '../reducers/actions/AddToCart'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

function Jeans(props) {
    const {
        jeans
    } = props;

    return ( <
        div style = {
            {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
            }
        } > {
            jeans?jeans.map((jean) => ( <
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
            )):null
        } <
        /div>
    );
}

function mapStateToProps(state) {
    let jeans = null;
	jeans = state.firestore.ordered.jeans? state.firestore.ordered.jeans: null;
	
    return {
        jeans: jeans
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch(addToCart(item));
        },
    };
}

//export default connect(mapStateToProps, mapDispatchToProps)(Jeans);


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'jeans'
  }])
)(Jeans);