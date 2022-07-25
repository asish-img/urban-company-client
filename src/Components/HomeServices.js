import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";

const itemData = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_72d18950.png",
    title: "Appliance Repair",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1631679515206-a69389.png",
    title: "Home Painting",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6b1f5250.png",
    title: "Cleaning & Pest",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1641213886588-90a903.png",
    title: "Disinfection",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_6fbad370.png",
    title: "Home Repairs",
  },
];

export default function HomeServices() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Paper
        sx={{
          width: "60%",
          minHeight: "20%",
          mt: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          columns={{ xs: 4, sm: 12, md: 16, lg: 15 }}
          // direction="row"
          // justifyContent="center"
          // alignItems="center"
        >
          {itemData.map((item) => (
            <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
              <Stack
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "#fafafa",
                  },
                  m: 2,
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1,
                }}
              >
                <Stack sx={{ width: 40, height: 40, margin: "auto", mb: 2 }}>
                  {" "}
                  <img
                    src={`${item.img}`}
                    srcSet={`${item.img}`}
                    alt={item.title}
                    loading="lazy"
                  />
                </Stack>
                <Stack
                  sx={{
                    textAlign: "center",
                    margin: "auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.title}
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Box>
  );
}
