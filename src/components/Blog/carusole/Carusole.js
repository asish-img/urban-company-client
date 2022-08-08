import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./carusole.css";

const handleDragStart = (e) => e.preventDefault();

const Carusole = (props) => {
  const [credits, setCredits] = useState([]);
  console.log(">>>>....ttttttttt", props.data);

  const items = credits.map((c) => (
    
    <div className="carouselItem">
    
      <img
        src={c.link ? c.link : ""}
        // src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem__img"
      />
      <b className="carouselItem__txt">{c?.name}</b>
      <div className="color">
        <h6 
        >{c.title}</h6>
      </div>
        
        <div>
            <p className="pra">{c.subtitle}</p>
        </div>
    </div>
  ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    1024: {
      items: 4,
    },
  };

  useEffect(() => {
    if (props.data) setCredits(props.data);
    // eslint-disable-next-line
  }, [props.data]);

  return (
    <Container>
        
<Box>
    <Typography sx={{width:'100%', display:'flex', padding: '10px', fontSize:'40px' ,marginBottom: '20px', borderBottom: "3px solid #bbb"}}>
        <strong>LATEST POSTS</strong>
    </Typography>
    
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
      />
        
        </Box> 
        </Container>
  );
};

export default Carusole;
