import React from 'react';

import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles({
    root: {
        width: '50vw',
        marginBottom: '8px',
    },
    ara: {
        display: 'flex',
        flexBasis: 'auto',
    },
    media: {
        paddingTop: '35%',
        backgroundSize: 'contain',

        flex: 1,
    },
    content: {
        flex: 1,
    },
    type: {
        color: 'grey',
    },
    footer: {
        backgroundColor: '#37474F',
        color: 'white',
    },
    button: {
        maxWidth: '35px',
        maxHeight: '35px',
        minWidth: '35px',
        minHeight: '35px',
    },
});

function RemoveConfirmation(props) {

  const handleClose1 = () => {
    props.setOpen(false);
  };
  
  const handleClose2 = (evt) => {
    props.yes(evt);
    props.setOpen(false);
    
  };
  
  return (
    <div>
      <Dialog
        open={props.openAlert}
        onClose={handleClose1}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"WARNING"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do You Want To Remove This Item from Cart?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose1} color="secondary">
            No
          </Button>
          <Button onClick={(evt)=>handleClose2(evt)} color="secondary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}




export default function CartCard(props) {
    const classes = useStyles();
	var [openAlert, setOpen] = React.useState(false);

    const handleClick = (evt) => {
	
		props.removeItem({
        id: props.id,
		img: props.image,
        title: props.title,
        price: props.price
        });	       
		evt.stopPropagation();
    };
	
	const warningMsg = (evt)=>{
		
		setOpen(true);
		evt.stopPropagation();
		
	};

    const increment = (evt) => {
        props.incrementQuantity({
            id: props.id,
            img: props.image,
            title: props.title,
            price: props.price,
            quantity: props.quantity
        });
        evt.stopPropagation();
    };

    const decrement = (evt) => {
        props.decrementQuantity({
            id: props.id,
            img: props.image,
            title: props.title,
            price: props.price,
            quantity: props.quantity
        });
        evt.stopPropagation(evt);
    };
	
    return ( <
        Card className = {
            classes.root
        } >
        <
        CardActionArea className = {
            classes.ara
        } >
        <
        CardMedia className = {
            classes.media
        }
        image = {
            props.image
        }
        title = {
            props.title
        }
        />{' '} <
        CardContent className = {
            classes.content
        } >
        <
        Typography gutterBottom variant = "h6"
        className = {
            classes.type
        }
        component = "h6" > {
            ' '
        } {
            props.title
        } {
            ' '
        } <
        /Typography>{' '} <
        Typography variant = "body2"
        color = "textSecondary"
        className = {
            classes.type
        }
        component = "p" > {
            ' '
        } {
            'Rs-' + props.price.toString()
        } {
            ' '
        } <
        /Typography> <
        div style = {
            {
                display: 'flex',
            }
        } >
        <
        Button variant = "contained"
        color = "primary"
        onClick = {
            (evt) => increment(evt)
        }
        className = {
            classes.button
        } >
        <
        Typography gutterBottom variant = "h5"
        component = "h2" > {
            ' '
        } + {
            ' '
        } <
        /Typography>{' '} < /
        Button >

        <
        Typography gutterBottom variant = "h5"
        component = "h2"
        style = {
            {
                margin: '5px',
                color: 'grey',
            }
        } > {
            ' '
        } {
            props.quantity
        } {
            ' '
        } <
        /Typography>

        <
        Button variant = "contained"
        color = "primary"
        onClick = {
            (evt) => decrement(evt)
        }
        className = {
            classes.button
        } >
        <
        Typography gutterBottom variant = "h5"
        component = "h2" > {
            ' '
        } - {
            ' '
        } <
        /Typography>{' '} < /
        Button > <
        /div> <
        Button variant = "contained"
        color = "secondary"
        onClick = {
            (evt) => warningMsg(evt)
        } >
        <DeleteIcon /> < /
        Button > <
        /CardContent>{' '} 
		</CardActionArea > 
		<RemoveConfirmation openAlert={openAlert} setOpen={(decision)=>setOpen(decision)}  yes={(evt)=>handleClick(evt)} />
		</Card>
    );
}
