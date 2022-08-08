import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import Background from "../../Background";

const Beauty = (props) => {
  const [Beauty, setBeauty] = useState([]);
  const [ABeauty, setABeauty] = useState([]);

  useEffect(() => {
    if (props.data) {
      setBeauty(props.data);
      setABeauty(props.arr)
    }
  }, [props.data , props.arr]);

  console.log("beautyyyyyyyyyyyyy", ABeauty);
  return (
    <Container>
      
      <Box
        sx={{
          width: '100%',
          height: "100%",
          padding: "60px 60px 0 64px",

        }}
      > 
      <Typography sx={{width:'100%', display:'flex', padding: '10px', fontSize:'40px' ,marginBottom: '20px', borderBottom: "3px solid #bbb"}}>
        <strong>BEAUTY</strong>
    </Typography>
    {/* </Box> */}
    <div style={{display:"flex", justifyContent:"space-between"}}>
    <Box>
          
          {Beauty.map((el) => {
            return (
              <Box sx={{ width:'60%'}}>
                <img src={el.link} alt="..."  style={{width:'150%'}} />
               <div style={{marginTop:'30px'}}>
                 <h3>{el.title}</h3>
               <p>{el.subtitle}</p>
               </div>
                
                
              </Box>
            );
          })}
        </Box>
        <Box >
        {ABeauty.map((ell)=>{
          return(
            <div style={{display:"flex", padding:'10px'}}>
                <img src={ell.link} alt="..."  />
                <div style={{width:'100%'}}>
                <h6 style={{color:'red', marginRight:'60px'}}>{ell.title}</h6>
                <p>{ell.subtitle}</p>
                </div>
            </div>
          )
        })}
        </Box>
    </div>
       
      </Box>
    </Container>
  );
};

export default Beauty;
