import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import {connect} from 'react-redux'
import {
    firestoreConnect
} from 'react-redux-firebase'
import {
    compose
} from 'redux'
import {receivedOrder} from '../reducers/actions/receivedOrder';
import YourOrderCard from './yourOrderCard';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
	root:{
		display:"grid",
		gridTemplateRows:"0.2fr 1fr",
		backgroundColor:"rgb(228, 225, 225)",
		border:"2px solid white"
	}
	,
    Oneorder: {
        display:"grid",
		gridTemplateColumns:"repeat( auto-fill, minmax(250px, 1fr) )"
    },
	bill:{
		margin:"auto",
		textAlign:"center"
	},
	button:{
		backgroundColor:"rgb(252, 137, 6)",
		color:"rgb(95, 93, 93)",
		border:'none',
		borderRadius:"20px",
		height:"50px",
		marginRight:"10%",
		marginBottom:"2%",
		marginTop:"2%",
		fontWeight:"bolder",
		width:"50%",
		fontSize:"1em",
		outline:"none"
		
	}
	
	,
	detail:{
		display:"grid",
		gridTemplateColumns:"1fr 0.5fr"
	}
});



function YourOrders(props){
	const {order} = props; 
	const classes = useStyles();
	console.log(order);
	
	const Button = styled.button `
	
	&:hover{
		background-color:gray;
		color:white
		
	}
	
	&:active{
		background-color:white;
		color:black
	}
    
    @media (max-width: 700px) {
      width:80%
    }
  `;
  
	return (<div>
	            
	            {order?order.map( (oneOrder)=>{
					
					if(! oneOrder.received ){
					
					return (
					    <div key={oneOrder.id} className={classes.root}>
						
						<div className={classes.detail}>
					        <Typography gutterBottom variant = "h5" component = "h2" style = {{margin: '5px',color:'rgb(95, 93, 93)'}}>
						        {"Bill : RS-"+oneOrder.amount.toString()}
						    </Typography>
						    <Button  className={classes.button} onClick={()=>props.receivedOrder(oneOrder)}> received</Button>
						</div>
						
					    <div className={classes.Oneorder} >
						
						{oneOrder.cart?oneOrder.cart.map( (cartItem)=>{
						        return <YourOrderCard title={cartItem.title} image={cartItem.img} price={cartItem.price} quantity={cartItem.quantity} />; }):null
					    }
					    </div>
						</div>
						);
					}else{
						
						return null;
					}
						
						
						
				    }):null
				}
				
				{order?order.map( (oneOrder)=>{
					
					if(oneOrder.received ){
					
					return (
					    <div key={oneOrder.id} className={classes.root} style={{opacity:"0.3"}}>
						
						<div className={classes.detail}>
					        <Typography gutterBottom variant = "h5" component = "h2" style = {{margin: '5px',color:'rgb(95, 93, 93)'}}>
						        {"Bill : RS-"+oneOrder.amount.toString()}
						    </Typography>
						    <Button  className={classes.button}>delivered</Button>
						</div>
						
					    <div className={classes.Oneorder} >
						
						{oneOrder.cart?oneOrder.cart.map( (cartItem)=>{
						        return <YourOrderCard title={cartItem.title} image={cartItem.img} price={cartItem.price} quantity={cartItem.quantity} />; }):null
					    }
					    </div>
						</div>
						);
					}else{
						
						return null;
					}
						
						
						
				    }):null
				}
				
				
				
				
	        </div>);

}

  const mapStateToProps = (s) => {
        let order = null;
        order = s.firestore.ordered.order ? s.firestore.ordered.order : null;
		let userID = s.firebase.auth.uid ? s.firebase.auth.uid : null;
		let yourOrder = [];
		
		if ( order && userID){
		
		
		for(let i=0;i<order.length;i++){
			if(order[i].userId === userID){
				yourOrder.push(order[i]);
			}
		}
		
		}
		


        return {
            order:yourOrder
        }
    };


    function mapDispatchToProps(dispatch) {
    return {
        receivedOrder: (order) => {
            dispatch(receivedOrder(order));
        }
    };
}



    export default compose(
        connect(mapStateToProps,mapDispatchToProps),
        firestoreConnect([{
            collection: 'order'
        }])
    )(YourOrders);
