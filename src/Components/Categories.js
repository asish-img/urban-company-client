import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

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

export default function Categories() {
  return (
    <Box
      component="span"
      sx={{
        position: "absolute",
        top: "40%",
        left: "15%",
        boxShadow: 1,
      }}
    >
      <ImageList sx={{ m: 5 }} cols={5}>
        {itemData.map((item) => (
          <Stack
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "#fafafa",
              },

              borderRadius: 1,
            }}
          >
            <Stack sx={{ width: 40, height: 40, margin: "auto", mb: 2 }}>
              <ImageListItem key={item.img}>
                <img
                  height="10"
                  width="10"
                  src={`${item.img}`}
                  srcSet={`${item.img}`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            </Stack>
            <Stack sx={{ margin: "auto" }}>{item.title}</Stack>
          </Stack>
        ))}
      </ImageList>
    </Box>
  );
}
