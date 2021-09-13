import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { Button ,useMediaQuery } from '@material-ui/core';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}



export default function SimpleModal() {
  
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const isMobile = useMediaQuery("(min-width:600px)");

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
   
      width: isMobile?600:220,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      
    },
  }));

  const classes = useStyles();



  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="simple-modal-title"> How to remove notifications before timeout? </h3>
      <p id="simple-modal-description">
       Click on the notifications to remove it.
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <div style={{position:'absolute',top:'1rem' , right:'1rem'}}>
      <Button size='small' variant='contained' color='secondary' onClick={handleOpen}>
        <ContactSupportIcon/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
