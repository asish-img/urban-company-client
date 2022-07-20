import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Stack } from "@mui/material";

const itemData = [
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757635235-1a139e.png",
    title: "Salon For Women",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/supply/customer-app-supply/1635331606894-7b633f.png",
    title: "Hair,Skin & nails",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/categories/category_v2/category_1312fb60.png",
    title: "Women's Therapies",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757629780-2b2187.png",
    title: "Salon For Men",
  },
  {
    img: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_64/t_high_res_template/images/growth/home-screen/1609757731250-ba3308.png",
    title: "Men's Therapies",
  },
];

export default function CategoriesWithGrid() {
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
