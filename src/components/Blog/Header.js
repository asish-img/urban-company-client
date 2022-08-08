import React from 'react'
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import "./Header.css";

function Header() {
  return (
    <Box sx={{width: '100%',}}>
     
     
    <Box sx={{marginLeft:'300px'}}>
        <span onClick={() => window.scroll(0, 0)} className="">
            <img  src={"/urbanguide.png"}  alt ="" />
        {/* <img  src={process.env.PUBLIC_URL+"urbanguide.png"}  alt ="" /> */}
      </span>
      <Box sx={{background:'' , float:'right', padding:'40px', marginRight: '20px'}} >
                <TwitterIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    color: "skyblue",
                    "&:hover": {
                      cursor: "pointer",
                      color: "red",
                    },
                  }}
                />
                <FacebookIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    color: "blue",
                    "&:hover": {
                      cursor: "pointer",
                      color: "",
                    },
                  }}
                />
                <InstagramIcon
                  sx={{
                    color: "gray",
                    width : '40px',
                    paddingLeft: "13px",
                    color: "brown",
                    "&:hover": {
                      cursor: "pointer",
                      color: "",
                    },
                  }}
                />
                <YouTubeIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    color: "red",
                    "&:hover": {
                      cursor: "pointer",
                      color: "",
                    },
                  }}
                />
                <LinkedInIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    color: "skyblue",
                    "&:hover": {
                      cursor: "pointer",
                      color: "",
                    },
                  }}
                />
                <PinterestIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    color: "red",
                    "&:hover": {
                      cursor: "pointer",
                      color: "",
                    },
                  }}
                />
              </Box>
    </Box>
   
   
    </Box>
  )
}

export default Header