import React from 'react';
import { connect } from 'react-redux';

import MediaCard from './Card';

function Shirts(props) {
    console.log(props);
    const { shirts } = props;

    return ( <
        div style = {
            {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
            }
        } >
        {
            shirts.map((shirt) => ( <
                MediaCard id = { shirt.id }
                title = { shirt.name }
                image = { shirt.img }
                price = { shirt.price }
                addToCart = { props.addToCart }
                />
            ))
        } <
        /div>
    );
}

function mapStateToProps(state) {
    return {
        shirts: state.shirts,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id) => {
            dispatch({
                type: 'Add_To_Cart',
                id: id,
            });
        },
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Shirts);