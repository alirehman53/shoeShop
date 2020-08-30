import React from 'react';
import {
    connect
} from 'react-redux';



import MediaCard from "./Card";



function Shoes(props) {
    console.log(props);
    const {
        shoes
    } = props;

    return ( <
        div style = {
            {
                display: "grid",
                gridTemplateColumns: "1fr 1fr"
            }
        } >

        {
            shoes.map(
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

            )


        }

        <
        /div >
    );
}

function mapStateToProps(state) {
    return {
        shoes: state.shoes
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addToCart: (id) => {
            dispatch({
                type: "Add_To_Cart",
                id: id
            })
        }



    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Shoes);