import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
// import { Button } from 'bootstrap';

import { useState, useEffect } from "react";
// import adImage from "./assets/ad.jpg";
import { Button, Dialog, Typography } from '@mui/material';


 


function Rate() {
  const [showAd, setShowAd] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openAd = () => setShowAd(true);
  const closeAd = () => setShowAd(false);

  useEffect(() => {
    const interval = setTimeout(()=>setShowAd(true), 6000);
    return () => {
      clearTimeout(interval);
    };
  }, []);


  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);


  return (
    <>
     <Dialog open={showAd} onClose={closeAd}>
        <Box width="250px" height='' p={2} textAlign="center">
          <img src='https://images.pexels.com/photos/6621280/pexels-photo-6621280.jpeg?auto=compress&cs=tinysrgb&w=600' width="100%" alt="bag photos" />
          <Typography style={{ fontWeight: 700, marginTop: 10 }}>
            Enter your phone number below and avail 10% off on your first order.
          </Typography>
          <Typography variant="caption" color="textSecondary">
            You will receive a discount code via SMS on your phone number
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter Full Name"
            fullWidth
            margin="dense"
          />
          <TextField
            variant="outlined"
            placeholder="10 digit phone number"
            fullWidth
            margin="dense"
          />
          <button className='btn-primary p-2 rounded-3  mt-3' fullWidth>
            Submit
          </button>
        </Box>
      </Dialog>
    <div className='Containere' >
        <div style={{borderBottom: "1px solid #bbb"}}>
            
        <div className='row ' >
            <div className='col-6' style={{marginTop:'200px', paddingLeft:'150px'}}>
                <div>
                    <ul>
                    
                       
                        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: '50%' },
      }}
      noValidate
      autoComplete="off"

    >
           
           
           
            <input placeholder="🎆UC Safe" style={{width:'20%', borderRadius:'10px', height:'40px',padding:'10px'}}></input>
        <li>     SPA FOR Women</li>
          <li>⭐  4.81(198k)</li>
      
      
      <TextField id="outlined-basic" onClick={handleClickOpen('paper')} label="massage Guide >" variant="outlined" />
       
       
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => 
                <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_600,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1655816255734-dad6a9.jpeg' alt='...' />
               
                
              )}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
     
     
      
      
    </Box>
                    </ul>
                </div>

            </div>
           <div className='col-6' style={{paddingRight:'100px', marginTop:'50px', width:'50%',padding:'20px', paddingBottom:'10px'}}>
            <div>
                <img src='https://media.istockphoto.com/photos/do-something-nice-for-yourself-picture-id477117194?b=1&k=20&m=477117194&s=612x612&w=0&h=lE1sfzQZBoKpkncHUeEPVI8owk2q1UqdJpwGDA2GJG8=' alt='..' style={{width:'20rem ', paddingRight:'10px', borderRadius:'20px', paddingBottom:'10px'}}/>
                <img src='https://media.istockphoto.com/photos/man-giving-a-head-massage-to-his-girlfriend-picture-id939498564?b=1&k=20&m=939498564&s=612x612&w=0&h=bXPqNjztUsD_BL380bmYpazl42ar2jJCq-4Yvta6J78=' alt='..' style={{width:'20rem', paddingRight:'10px', borderRadius:'20px', paddingBottom:'10px'}}/>
                <img src='https://media.istockphoto.com/photos/closeup-of-alternative-therapy-at-the-spa-picture-id517753190?b=1&k=20&m=517753190&s=612x612&w=0&h=2nZ78kuMY_J4BZfdM18UxqhetFB-cdA9oJSL9r-9UP4=' alt='..' style={{width:'20rem', paddingRight:'10px', borderRadius:'20px', paddingBottom:'10px'}}/>
                <img src='https://media.istockphoto.com/photos/loving-little-asian-girl-massaging-on-mothers-shoulder-on-sofa-in-the-picture-id1326733735?b=1&k=20&m=1326733735&s=612x612&w=0&h=H2K6xTj3z5OjCWHWPsl3XA5tIArwyLpk3H4bHsegogM=' alt='..' style={{width:'20rem', paddingRight:'10px', borderRadius:'20px', paddingBottom:'10px'}}/>
            </div>
           </div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Rate