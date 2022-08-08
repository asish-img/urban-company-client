import React from 'react';
import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import TextError from './TextError';
import { Form, Formik ,Field,ErrorMessage} from 'formik'
import * as yup from 'yup'



const initialValues = {
   
	
    number :'', 
   
	

  }
  const onSubmit = values => {
    console.log('form data', values)
  }
  const validationSchema = yup.object({
   
    number : yup.string()
	// matches(/^[^a-zA-Z]{8,15}$/, "")
	.required("Phone number is required").min(10,"Phone number is required"),


	
   })





const Navbar = () => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const [dialcode, setDialcode] = useState([]);
	const [data, setdata] = React.useState("+91");

	const handleChange = (event) => {
		setdata(event.target.value);
	  };
	  const dialcodeChange = (event) => {
		setDialcode(event.target.value);
	  };

	
    
	  
	return (
		<Box
			sx={{
				height: '60px',
				width: '100vw',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
			}}
		>
			<Box sx={{ height: '39px', width: '1200px', display: 'flex' }}>
				<Box sx={{ height: '39px', width: '300px', textAlign: 'start' }}>
					<Link href="#">
						<Box
							component="img"
							sx={{
								height: '39px',
								width: '131.887px',
							}}
							alt="Logo"
							src="https://res.cloudinary.com/urbanclap/image/upload/images/growth/home-screen/1631097450980-d2de38.png"
						/>
					</Link>
				</Box>
				<Box>
					<Box
						sx={{
							height: '39px',
							width: '868px',
							display: 'flex',
							justifyContent: 'end',
							alignItems: 'center',
						}}
					>
						<Box
							sx={{
								marginTop: '32px',
								cursor: 'pointer',
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								fontWeight: 700,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<NavLink  to= {'/2'}
							sx={{ color: '#ffffff', textDecoration: 'none' }}>
								Blog
							</NavLink>
						</Box>
						<Box
							sx={{
								marginTop: '32px',
								cursor: 'pointer',
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								fontWeight: 700,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Button
								sx={{
									color: '#ffffff',
									textDecoration: 'none',
									borderBottom: ' 1px rgb(255, 255, 255)',
									height: ' ',
								}}
							>
								Register As A Professional
							</Button>
              <Button variant="contained" onClick={() => setIsDrawerOpen(true)}>
        Login{" "}
      </Button>
      <Drawer
        sx={{ width: "90%" }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
						</Box>
						<Box
							sx={{
								marginTop: '32px',
								cursor: 'pointer',
								fontSize: '14px',
								lineHeight: '20px',
								height: '100%',
								fontWeight: 700,
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								color: '#ffffff',
							}}
						>
							
							 <Button variant="" onClick={() => setIsDrawerOpen(true)}>
            Login{" "}
          </Button>
      <Drawer
        sx={{ width: "30%" }}
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box>
          <Box sx={{ mx: 3, boxShadow:'3px 4px #88888' }}>
            <Typography variant="h6" sx={{marginTop:'20px'}}>
              
            <span  onClick={()=>setIsDrawerOpen(!isDrawerOpen)} style={{padding:'7px', margin:"5px", cursor:"pointer"}}>×</span>Please login to continue</Typography>
          </Box>
          <Box sx={{ my: 4, mx: 3 }}>
            {/* <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={data}
              onChange={handleChange}
            >
           <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>  */}

		<diV style={{width:'100%', display:'flex'}}>
			
             <Select 
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
              onChange={dialcodeChange}
              value={dialcode}
            >
              <MenuItem value={10}>
                <span>
                  <img
				 src="https://images.urbanclap.com/image/upload//t_medium_res_template/v1514444369/Flag_of_India_28Dec2017-1.png"
                  
				 
                    style={{ width: 20 }}
                  />
                </span>
                <span>+91</span>
              </MenuItem>
              <MenuItem value={20}>
                <span>
                  <img
                    src="https://images.urbanclap.com/image/upload//t_medium_res_template/categories/category_v2/category_0cda2020.png"
                    style={{ width: 20 }}
                  />
                </span>
                <span>+82</span>
              </MenuItem>
              <MenuItem value={30}>
                <span>
                  <img
                    src="https://images.urbanclap.com/image/upload//t_medium_res_template/categories/category_v2/category_03847930.png"
                    style={{ width: 20 }}
                  />
                </span>
                <span>+88</span>
              </MenuItem>
              <MenuItem value={40}>
                <span>
                  <img
               src="https://cdn.pixabay.com/photo/2017/05/12/09/07/china-2306580__340.png"
                    style={{ width: 20 }}
                  />
                </span>
                <span>+82</span>
              </MenuItem>
              <MenuItem value={50}>
                <span>
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.b4ReDKYCLRk42cCZn8E4CwHaDu&pid=Api&rs=1&c=1&qlt=95&w=247&h=124"
                    style={{ width: 20 }}
                  />
                </span>
                <span>+96</span>
              </MenuItem>
              <MenuItem value={60}>
                <span>
                  <img
                    src="https://tse1.mm.bing.net/th?id=OIP.17tY72pdX3wWCy6eswgxMQHaEc&pid=Api&rs=1&c=1&qlt=95&w=160&h=96"
                    style={{ width: 20 }}
                  />
                </span>
                <span>+61</span>
              </MenuItem>
            </Select> 

			<Formik
          initialValues={ initialValues}
		  validationSchema={validationSchema}
		   onSubmit={onSubmit}
         
        >
          {/* validateOnChange= {false}
        validateOnBlur ={false} */}
          {(formik) => {
            console.log("Formik props", formik);
            return (
              <Form>
              
			  {/* <div style={{width:'100%', height:'30vh'}}> */}
              <div className="form-control">
			  <div style={{width:'100%', height:'7vh' , padding:'5px'}}>
                  <label htmlFor="number" style={{margiRight:'10px'}}>Phnumber :</label >
                  <Field type="text" id="number" name="number"  />
                  <ErrorMessage name="number" component={TextError} />
				   {/* {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null } */}
                  
                </div>
				</div> 
              
			  
              
			  
              </Form>
            );
          }}
        </Formik>
		</diV>
            {/* <TextField
              id="outlined-basic"
              label="Your Phone Number"
              variant="outlined"
            /> */}
          </Box>
          <Box sx={{ mx: 3 }}>
            <Button
              sx={{ width: "100%", backgroundColor: "black" }}
              variant="contained"
            >
              continue
            </Button>
          </Box>
        </Box>
      </Drawer>
    
	
								{/* Login / Sign Up  */}
							
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Navbar;
