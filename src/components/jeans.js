import React from 'react';
import { connect } from 'react-redux';

import MediaCard from './Card';

function Jeans(props) {
    const { jeans } = props;

    return ( <
        div style = {
            {
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
            }
        } >
        {
            jeans.map((jean) => ( <
                MediaCard id = { jean.id }
                title = { jean.name }
                image = { jean.img }
                price = { jean.price }
                addToCart = { props.addToCart }
                />
            ))
        } <
        /div>
    );
}

function mapStateToProps(state) {
    return {
        jeans: state.jeans,
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

export default connect(mapStateToProps, mapDispatchToProps)(Jeans);