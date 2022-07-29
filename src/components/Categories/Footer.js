import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";

const theme = createTheme({
  typography: {
    fontFamily: [
      "axiforma-regular",
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Roboto",
      "Helvetica",
      "Arial",
      "sans-serif",
    ].join(","),
    fontSize: 14,
  },
});

const footerTop = [
  "AboutUs",
  "UCImpact",
  "Terms & Conditions",
  "Privacy Policy",
  "Interest-Based Advertising",
  "Anti Discrimination Policy",
  "Blog",
  "Reviews",
  "NearMe",
  "Careers",
  "GiftCards",
  "ContactUs",
  "QuickLinks",
];
const AUS = ["Melbourne", "Sydney"];
const IND = [
  "Agra",
  "Ahmedabad",
  "Alwar",
  "Amritsar",
  "Aurangabad",
  "Banglore",
  "Bhopal",
  "Bhubaneswar",
  "ChandigarhTricity",
  "Chennai",
  "Coimbatore",
  "Cuttack",
  "Dehradun",
  "DelhiNCR",
  "Guntur",
  "Guwahati",
  "Gwalior",
  "Hyderabad",
  "Indore",
  "Jabalpur",
  "Jaipur",
  "Jamshedpur",
  "Jodhpur",
  "Kakinada",
  "Kanpur",
  "Karnal",
  "Kochi",
  "Kolkata",
  "Kota",
  "Lucknow",
  "Ludhiana",
  "Madurai",
  "Meerut",
  "Mumbai",
  "Mysore",
  "Nagpur",
  "Nashik",
  "Panipat",
  "Patna",
  "Prayagraj",
  "Pune",
  "Raipur",
  "Rajahmundry",
  "Ranchi",
  "Rohtak",
  "Sonipat",
  "Surat",
  "Thiruvanathapuram",
  "Udaipur",
  "Vadodara",
  "Varanasi",
  "Vijaywada",
  "Visakhapatnam",
  "Warangal",
];
const KSA = ["Jeddah", "Riyadh"];
const SGP = ["Singapore"];
const UAE = ["Abu Dhabi", "Dubai", "Sharjah"];
const USA = ["Austin"];
function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: "black", py: 3 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              borderBottom: "1px solid #424242",
            }}
          >
            {footerTop.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            
            }}
          >
            <Box sx={{ width: "100%", pt: 2  }}>
              {" "}
              <Typography
                sx={{
                  color: "white",
                  float: 'left',
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                Serving in
              </Typography>
            </Box>
            <Box sx={{ width: "100%" , padding: '3px' }}>
              {" "}
              <Typography
                sx={{
                  color: "gray",
                       float: 'left',
                  "&:hover": {
                    cursor: "pointer",

                    color: "white",
                    // backgroundColor: 'green',

                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                AUS
              </Typography>
            </Box>

            {AUS.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1  }}>
                  <Typography
                    sx={{
                      color: "gray",
                    //   backgroundColor: 'green',
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap"
            }}
          >
            <Box sx={{ width: "100%" , padding: '3px' }}>
              {" "}
              <Typography
                sx={{
                  color: "gray",
                  float: 'left',
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                IND
              </Typography>
            </Box>
            {IND.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "100%",padding: '3px' }}>
              {" "}
              <Typography
                sx={{
                  color: "gray",
                  float: 'left',
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                KSA
              </Typography>
            </Box>
            {KSA.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "100%" ,padding: '3px' }}>
              {" "}
              <Typography
                sx={{
                  color: "gray",
                  float: 'left',
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                SGP
              </Typography>
            </Box>
            {SGP.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ width: "100%"  ,padding: '3px'}}>
              <Typography
                sx={{
                  color: "gray",
                  float: 'left',
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                UAE
              </Typography>
            </Box>
            {UAE.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              borderBottom: "1px solid #424242",
            }}
          >
            <Box sx={{ width: "100%" ,padding: '3px' }}>
              {" "}
              <Typography
                sx={{
                  color: "gray",
                  float: 'left',
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                USA
              </Typography>
            </Box>
            {USA.map((item) => {
              return (
                <Box sx={{ ml: 0, mr: 5, mt: 1, mb: 1 }}>
                  <Typography
                    sx={{
                      color: "gray",
                      "&:hover": {
                        cursor: "pointer",
                        color: "white",
                      },
                    }}
                    variant="subtitle1"
                    gutterBottom
                    component="div"
                  >
                    {item}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                pt: 4,
              }}
            >
              <Box sx={{background: 'red'}}>
                <img
                  style={{ width: "150px" }}
                  src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                  loading="lazy"
                  srcSet="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
                  alt="uc"
                  // style={{ width: 100, height: 80 }}
                />
              </Box>
              <Typography
                sx={{
                  color: "gray",
                  "&:hover": {
                    cursor: "pointer",
                    color: "white",
                  },
                }}
                variant="subtitle1"
                gutterBottom
                component="div"
              >
                © 2014-22 UrbanClap Technologies India Pvt. Ltd.
              </Typography>
              <Box>
                <TwitterIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                    },
                  }}
                />
                <FacebookIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                    },
                  }}
                />
                <InstagramIcon
                  sx={{
                    color: "gray",
                    width : '40px',
                    paddingLeft: "13px",
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                    },
                  }}
                />
                <YouTubeIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                    },
                  }}
                />
                <LinkedInIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                    },
                  }}
                />
                <PinterestIcon
                  sx={{
                    color: "gray",
                    paddingLeft: "13px",
                    width : '40px',
                    "&:hover": {
                      cursor: "pointer",
                      color: "white",
                    },
                  }}
                />
              </Box>
              <Box>
                <img
                  src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f907eb0.png"
                  style={{ width: "150px" }}
                  alt="oop.png"
                />
              </Box>
              <Box>
                <img
                  src="https://images.urbanclap.com/image/upload/categories/category_v2/category_7f741d10.png"
                  style={{ width: "150px" }}
                  alt="oop.png"
                />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Footer;