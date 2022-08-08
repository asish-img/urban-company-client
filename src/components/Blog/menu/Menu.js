import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Container } from "@mui/material";
import { grid, padding } from "@mui/system";
import VideoPlayer from 'react-video-js-player'

function Menu(props) {
  const [value, setValue] = useState("5");
  const [data, setdata] = useState([]);
  const [Interior, setInterior] = useState([]);
  const [Tug, setTug] = useState([]);
  const [HUMANS, setHUMANS] = useState([]);
  const [INSIDE, setINSIDE] = useState([]);
  const [Urban, setUrban] = useState([]);

  useEffect(() => {
    if (props.arr || props.arr1) {
      setdata(props.arr);
    }
  }, [props.arr, props.arr1]);

  console.log("7777777766666666", props);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1", padding: "40px" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="BEAUTY" value="1" />
            <Tab label="MEN" value="2" />
            <Tab label="INTERIORS" value="3" />
            <Tab label="HUMANS OF URBAN COMPANY" value="4" />
            <Tab label="INSIDE URBAN COMPANY" value="5" />
            <Tab label="TUG VIDEOS" value="6" />
            <Tab label="URBANCOMPANY.COM" value="7" />
          </TabList>
        </Box>
        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            float: "left",
            width: "100%",
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel value="1" sx={{ padding: 0, width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <img
                  src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/26153759/beauty.png"
                  alt="...."
                  style={{
                    float: "",
                    marginRight: "",
                    width: "100%",
                    height: "40vh",
                  }}
                />
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "70px",
                    left: "40%",
                    fontSize: "70px",
                    padding: "0px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  BEAUTY
                </Box>
              </Box>
              <Box>
                {data.map((el) => {
                  return (
                    <div className="row">
                      <div className="col-lg-6  offset-lg-3 mt-3">
                        <div
                          className="card"
                          style={{
                            width: "100% ",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={el.link}
                            className="card-img-top"
                            alt="..."
                            style={{ width: "50%", height: "40vh" }}
                          />
                          <div
                            className="card-body "
                            style={{ padding: "27px 80px" }}
                          >
                            <h5
                              className="card-title"
                              style={{ textDecoration: "underline" }}
                            >
                              {el.subtitle}
                            </h5>
                            <p className="card-text  mt-3">{el.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    //     <div style={{display:"flex" ,width:'100%', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                    //     <img  src={el.link} alt='' style={{width:'20%', padding:'5px', height:'30vh'}}/>
                    //     <div >
                    //         <strong
                    //         style={{width:" 30%" , marginBottom:'px', textTransform:'capitalize',marginLeft:'',  color:" #222",
                    //         textDecoration: "underline", lineHeight:'2.5', fontWeight:'700'}}>{el.subtitle}</strong>
                    //         <p  style={{marginTop:'30px' , width:'40%' , marginLeft:'40px'}}>{el.title}</p>
                    //     </div>

                    // </div>
                  );
                })}
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            float: "left",
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel value="2" sx={{ padding: "0px", width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <img
                  src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/26153759/beauty.png"
                  alt="...."
                  style={{
                    float: "",
                    marginRight: "",
                    width: "100%",
                    height: "40vh",
                  }}
                />
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "70px",
                    left: "40%",
                    fontSize: "70px",
                    padding: "10px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  MEN
                </Box>
              </Box>
              <Box>
                {props?.arr1?.map((ml) => {
                  return (
                    <div className="row">
                      <div className="col-lg-6  offset-lg-3 mt-3">
                        <div
                          className="card"
                          style={{
                            width: "100% ",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={ml.link}
                            className="card-img-top"
                            alt="..."
                            style={{ width: "50%", height: "40vh" }}
                          />
                          <div
                            className="card-body "
                            style={{ padding: "27px 80px" }}
                          >
                            <h5
                              className="card-title"
                              style={{ textDecoration: "underline" }}
                            >
                              {ml.title}
                            </h5>
                            <p className="card-text  mt-3">{ml.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    //     <div style={{display:"flex" ,width:'100%', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                    //     <img  src={el.link} alt='' style={{width:'20%', padding:'5px', height:'30vh'}}/>
                    //     <div >
                    //         <strong
                    //         style={{width:" 30%" , marginBottom:'px', textTransform:'capitalize',marginLeft:'',  color:" #222",
                    //         textDecoration: "underline", lineHeight:'2.5', fontWeight:'700'}}>{el.subtitle}</strong>
                    //         <p  style={{marginTop:'30px' , width:'40%' , marginLeft:'40px'}}>{el.title}</p>
                    //     </div>

                    // </div>
                  );
                })}
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            float: "left",
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel value="3" sx={{ padding: 0, width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <img
                  src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/26153934/interior.png"
                  alt="...."
                  style={{
                    float: "",
                    marginRight: "",
                    width: "100%",
                    height: "40vh",
                  }}
                />
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "70px",
                    left: "40%",
                    fontSize: "70px",
                    padding: "10px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  INTERIORS
                </Box>
              </Box>
              <Box>
                {props.arr2.map((el) => {
                  return (
                    <div className="row">
                      <div className="col-lg-6  offset-lg-3 mt-3">
                        <div
                          className="card"
                          style={{
                            width: "100% ",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={el.link}
                            className="card-img-top"
                            alt="..."
                            style={{ width: "50%", height: "40vh" }}
                          />
                          <div
                            className="card-body "
                            style={{ padding: "27px 80px" }}
                          >
                            <h5
                              className="card-title"
                              style={{ textDecoration: "underline" }}
                            >
                              {el.title}
                            </h5>
                            <p className="card-text  mt-3">{el.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    //     <div style={{display:"flex" ,width:'100%', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                    //     <img  src={el.link} alt='' style={{width:'20%', padding:'5px', height:'30vh'}}/>
                    //     <div >
                    //         <strong
                    //         style={{width:" 30%" , marginBottom:'px', textTransform:'capitalize',marginLeft:'',  color:" #222",
                    //         textDecoration: "underline", lineHeight:'2.5', fontWeight:'700'}}>{el.subtitle}</strong>
                    //         <p  style={{marginTop:'30px' , width:'40%' , marginLeft:'40px'}}>{el.title}</p>
                    //     </div>

                    // </div>
                  );
                })}
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            // float: "left",
            // background:'blue'
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel sx={{ padding: 0, width: "100%" }} value="4">
              <Box sx={{ width: "100%" }}>
                <img
                  src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/20174149/Category-Header-Humans-of-UC-1.jpg"
                  alt="...."
                  style={{
                    float: "",
                    marginRight: "",
                    width: "100%",
                    height: "30vh",
                  }}
                />
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "30px",
                    left: "30%",
                    fontSize: "50px",
                    padding: "60px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  HUMANS OF URBAN COMPANY
                </Box>
              </Box>
              <Box>
                {props.arr3.map((el) => {
                  return (
                    <div className="row">
                      <div className="col-lg-6  offset-lg-3 mt-3">
                        <div
                          className="card"
                          style={{
                            width: "100% ",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={el.link}
                            className="card-img-top"
                            alt="..."
                            style={{ width: "50%", height: "40vh" }}
                          />
                          <div
                            className="card-body "
                            style={{ padding: "27px 80px" }}
                          >
                            <h5
                              className="card-title"
                              style={{ textDecoration: "underline" }}
                            >
                              {el.title}
                            </h5>
                            <p className="card-text  mt-3">{el.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    //     <div style={{display:"flex" ,width:'100%', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                    //     <img  src={el.link} alt='' style={{width:'20%', padding:'5px', height:'30vh'}}/>
                    //     <div >
                    //         <strong
                    //         style={{width:" 30%" , marginBottom:'px', textTransform:'capitalize',marginLeft:'',  color:" #222",
                    //         textDecoration: "underline", lineHeight:'2.5', fontWeight:'700'}}>{el.subtitle}</strong>
                    //         <p  style={{marginTop:'30px' , width:'40%' , marginLeft:'40px'}}>{el.title}</p>
                    //     </div>

                    // </div>
                  );
                })}
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            // float: "left",
            // background:'blue'
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel sx={{ padding: 0, width: "100%" }} value="5">
              <Box sx={{ width: "100%" }}>
                <img
                  src="https://de927adv5b23k.cloudfront.net/wp-content/uploads/2019/05/20174959/CategoryBanner-UCSpeak.jpg"
                  alt="...."
                  style={{
                    float: "",
                    marginRight: "",
                    width: "100%",
                    height: "30vh",
                  }}
                />
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "30px",
                    left: "25%",
                    fontSize: "50px",
                    padding: "60px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  INSIDE URBAN COMPANY
                </Box>
              </Box>
              <Box>
                {props.arr4.map((el) => {
                  return (
                    <div className="row">
                      <div className="col-lg-6  offset-lg-3 mt-3">
                        <div
                          className="card"
                          style={{
                            width: "100% ",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={el.link}
                            className="card-img-top"
                            alt="..."
                            style={{ width: "50%", height: "40vh" }}
                          />
                          <div
                            className="card-body "
                            style={{ padding: "27px 80px" }}
                          >
                            <h5
                              className="card-title"
                              style={{ textDecoration: "underline" }}
                            >
                              {el.title}
                            </h5>
                            <p className="card-text  mt-3">{el.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    //     <div style={{display:"flex" ,width:'100%', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                    //     <img  src={el.link} alt='' style={{width:'20%', padding:'5px', height:'30vh'}}/>
                    //     <div >
                    //         <strong
                    //         style={{width:" 30%" , marginBottom:'px', textTransform:'capitalize',marginLeft:'',  color:" #222",
                    //         textDecoration: "underline", lineHeight:'2.5', fontWeight:'700'}}>{el.subtitle}</strong>
                    //         <p  style={{marginTop:'30px' , width:'40%' , marginLeft:'40px'}}>{el.title}</p>
                    //     </div>

                    // </div>
                  );
                })}
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            float: "left",
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel value="6" sx={{ padding: 0, width: "100%" }}>
              <Box sx={{ width: "100%" }}>
                <img
                  src="https://www.urbancompany.com/blog/wp-content/themes/thevoux-wp/assets/img/archive-title.jpg"
                  alt="...."
                  style={{
                    float: "",
                    marginRight: "",
                    width: "100%",
                    height: "60vh",
                  }}
                />
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "70px",
                    left: "30%",
                    fontSize: "70px",
                    padding: "100px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  TUG VIDEOS
                </Box>
                <Box
                  sx={{
                    // background: "red",
                    position: "absolute",
                    top: "200px",
                    right: "5%",
                    fontSize: "20px",
                    padding: "100px",

                    zIndex: "9999",
                    display: "BLOCK",
                    POSITION: "RELATIVE",
                    color: " #a9a9a9!important",
                  }}
                >
                  <p>
                    Best of Challenges, Tries, Tasks, Experiments & Experiences
                    with Ex Ok Tested & EatTreat anchors. New videos EVERY
                    TUESDAY & FRIDAY!
                  </p>
                </Box>
              </Box>
              <Box>
                {props.arr5.map((el) => {
                  return (
                    <div className="row">
                      <div className="col-lg-6  offset-lg-3 mt-3">
                        <div
                          className="card"
                          style={{
                            width: "100% ",
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            src={el.link}
                            className="card-img-top"
                            alt="..."
                            style={{ width: "50%", height: "40vh" }}
                          />
                          <div
                            className="card-body "
                            style={{ padding: "27px 80px" }}
                          >
                            <h5 className="card-title">{el.title}</h5>
                            <p className="card-text  mt-3">{el.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    //     <div style={{display:"flex" ,width:'100%', justifyContent:'center', alignItems:'center', padding:'20px'}}>
                    //     <img  src={el.link} alt='' style={{width:'20%', padding:'5px', height:'30vh'}}/>
                    //     <div >
                    //         <strong
                    //         style={{width:" 30%" , marginBottom:'px', textTransform:'capitalize',marginLeft:'',  color:" #222",
                    //         textDecoration: "underline", lineHeight:'2.5', fontWeight:'700'}}>{el.subtitle}</strong>
                    //         <p  style={{marginTop:'30px' , width:'40%' , marginLeft:'40px'}}>{el.title}</p>
                    //     </div>

                    // </div>
                  );
                })}
              </Box>
            </TabPanel>
          </Box>
        </Box>

        <Box
          sx={{
            background: "100%",
            display: "flex",
            justifyContent: "space-between",
            // float: "left",
            // background:'blue'
          }}
        >
          <Box sx={{ position: "relative", width: "100%" }}>
            <TabPanel sx={{ padding: 0, width: "100%" }} value="7">
              <Box
                sx={{
                  width: "100%",
                  // background: "red",
                  // background: " linear-gradient(90deg,transparent,#000 40%)",
                  display: "flex",
                  height: "70vh",
                }}
              >
                <div
                  style={{
                    float: "",
                    marginRight: "",
                    width: "50%",
                    backgroundImage: `linear-gradient(90deg,
                      rgba(255, 255, 255,0.3),
                      rgba(255, 255, 255,0.05), rgba(0, 0, 0,1)), url(
        'https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_19be5040.jpeg')`,
                    backgroundSize: "cover",
                  }}
                ></div>
                <div
                  style={{
                    width: "50%",
                    background: "black",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    // display: "inline-block",
                  }}
                >
                  {/* <section> */}
                  <span
                    style={{
                      textAlign: "left",
                      width: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      float: "left",
                      fontSize: "40px",
                      color: "white",
                    }}
                  >
                    urban company
                  </span>
                  <h4 style={{ color: "white" }}>
                    QUALITY HOME SERVICE , ON DEMAND
                  </h4>
                  <p style={{ color: "white", marginTop: "10px" }}>
                    Experienxed, Hand-Picked Professional To Serve you at your
                    Doorstep
                  </p>
                  {/* </section> */}
                </div>
              </Box>

          <div style={{width:'100%', height:'',display:'flex' ,justifyContent: "center", alignItems:'center' , }}>
    
              <div
                style={{
                  width:'50%',
                  padding: "90px 0",
                  backgroundColor: "#fff",
                  marginBottom: "16px",
                  // backgroundColor:'yellow'
                }}
              >
                <div
                  style={{
                    width: "1136px",
                     height:'50vh',
                    margin: "0 auto",
                    display: "",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    // backgroundColor:'yellowgreen',
                    padding:'50px',
                    marginLeft:'90px',
                    float:'left'
              
                  }}
                >
                  <div style={{ boxSizing: "border-box" }}>
                 
                 
                    <h2 style={{marginLeft:'35px',fontSize:'50px' , marginBottom:'20px'}}>why urban company?</h2>
                    <ul>
                      <li
                        style={{
                          display: "",
                          alignItems: " center",
                          marginBottom: "px",
                          // backgroundColor:'orange'
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "30vh",
                            marginRight: "32px",
                            display:'flex',
                            // background:'red'
                          
                            
                          }}>
                            
                             <div style={{display:"grid"}}>
                              
                          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_29614d40.png" alt="..." style={{width:'70px' , marginTop:'10px'}}/>
                          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2cc7d0d0.png" alt="..." style={{width:'70px',marginTop:'15px'}}/>
                          <img src="https://res.cloudinary.com/urbanclap/image/upload/q_40,f_auto/categories/category_v2/category_2caafa00.png" alt="..." style={{width:'70px',marginTop:'15px'}}/>
                          </div> 
                          <div>
                          <section
                            style={{
                                width:'100%',
                              flexDirection: "",
                              alignItems: "center",
                              marginLeft:'30px',
                              marginTop:'10px'
                            }}
                          >
                            <h3
                              style={{
                                width:'100%',
                                fontWeight: "700",
                                lineHeight: "1.5",
                                color: "#000",
                              }}
                            >
                            Transparent Pricing
                            </h3>
                            <p
                              style={{
                                width:'100%',
                               padding: '',
                                fontSize: "14px",
                                lineHeight: "1.43",
                                color: " #757575",
                              }}
                            >
                               see Fixed price before you book. No hidden charges
                            </p>
                          </section>
                          <section
                            style={{
                                width:'100%',
                              flexDirection: "row",
                              alignItems: "center",
                              marginLeft:'30px',
                              marginTop:'10px'
                            }}
                          >
                            <h3
                              style={{
                                width:'100%',
                                fontWeight: "700",
                                lineHeight: "1.5",
                                color: "#000",
                              }}
                            >
                               Experts Only
                            </h3>
                            <p
                              style={{
                                width:'100%',
                              
                                fontSize: "14px",
                                lineHeight: "1.43",
                                color: " #757575",
                              }}
                            >
                               Our Professional are well and trained and have on job experties
                            </p>
                          </section>
                          <section
                            style={{
                                width:'100%',
                              flexDirection: "row",
                              alignItems: "center",
                              marginLeft:'30px',
                              marginTop:'10px'
                            }}
                          >
                            <h3
                              style={{
                                width:'100%',
                                fontWeight: "700",
                                lineHeight: "1.5",
                                color: "#000",
                              }}
                            >
                             Fully equipped
                            </h3>
                            <p
                              style={{
                                width:'100%',
                              
                                fontSize: "14px",
                                lineHeight: "1.43",
                                color: " #757575",
                              }}
                            >
                              We bring everything needed to get the job done well 
                            </p>
                          </section>
                          
                          </div>
                        </div>
                        
                        
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div style={{width:'50%', background:'', boxShadow: "0.6px 0.6px #8888",     backgroundColor: "#f5f9ff"}}>
              <img
                src="https://res.cloudinary.com/urbanclap/image/upload/q_20,f_auto/categories/category_v2/category_cb4d9130.png"
                alt="..."
               style={{marginBottom:'5px',width:'30%' , marginLeft:'40px', marginTop:'40px'}}/>
               <h3 style={{width:'100%', marginLeft:'40px'}}>100% Quality Assured</h3>
              
              
              </div>
              </div>
            </TabPanel>
          </Box>
        </Box>
      </TabContext>
    </Box>
  );
}

export default Menu;
