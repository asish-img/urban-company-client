import React from "react";
// import './CategoryCollection.css';
import { Box, Typography } from "@mui/material";
import MultiCarousal from "./MultiCarousal";
const NewCategoryLaunches = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "489px",
        textAlign: "center",
        // border: '1px solid red',
        // overflow: 'hidden',
      }}
    >
      <Box
        sx={{
          width: "100vw",
          height: "489px",
          borderTop: "16px solid #F2F4F6 ",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "140px",
            padding: "60px 60px 0 64px",
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: " 48px",
              margin: "0",
              color: "#212121",
            }}
          >
            New Category Launches
          </Typography>
          {/* <Typography
            sx={{
              color: "#757575",
              margin: " 4px 0 0 0",
              fontSize: "18px",
              lineHeight: "28px",
            }}
          >
            Hygienic & single use products | low-contact services
          </Typography> */}
        </Box>
        <Box
          sx={{
            // width: '100vw',
            width: "1172px",
            // backgroundColor: 'lightcyan',
            height: "229px",
            margin: "44px auto 60px auto",
            // boxSizing: 'border-box',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box sx={{ width: "1172px", position: "relative" }}>
              <Box sx={{ width: "100%", position: "relative", left: "-24px" }}>
                <MultiCarousal />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default NewCategoryLaunches;
