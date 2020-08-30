import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function Ordered() {
    return ( <
        div style = {
            {
                color: 'grey',
                marginTop: '20vh',
                textAlign: 'center',
            }
        } >
        <
        Typography variant = "h1"
        component = "h1" > { ' ' }
        Order On The Way { ' ' } <
        /Typography> <
        /div>
    );
}