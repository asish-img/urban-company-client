import { Button, Container, Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { red } from "@mui/material/colors";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Carsoule(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [showAd, setShowAd] = useState(false);
  const [data, setdata] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openAd = () => setShowAd(true);
  const closeAd = () => setShowAd(false);

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  let x = 0;
  let y = 0;
  useEffect(() => {
    if (props.data) {
      setdata(props.data);
    }
  });
  return (
    <div className="container">
      <nav id="navbar-example2" className="navbar navbar-light bg-light px-3">
        <ul className="nav nav-pills">
          {data.map((el) => {
            return (
              <li className="nav-item p-3">
                <a className="nav-link" href={"#scrollspyHeading" + x++}>
                  <img
                    src={el.link}
                    alt=""
                    className="rounded w-60"
                    style={{ width: "90px" }}
                  />
                  <p className="w-30">{el.title}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <hr />
      {data.map((dt) => {
        return (
            <Container
            id={"scrollspyHeading" + y++}
              sx={{
                borderRight: "1px solid grey",
                width: "70%",
                float: "left",
              }}
            >
              <Card sx={{ maxWidth: 545, padding: "20px" , margin:'10px'}}>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
                    </Avatar>
                  }
                    
                  action={
                    <IconButton aria-label="settings">
                        <Typography onClick={handleClickOpen('paper')} >{dt.Guide}</Typography>
        <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">Subscribe</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            {[...new Array(1)]
              .map(
                () => 
                <img src='https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template,w_600,dpr_1,fl_progressive:steep,q_auto/images/growth/luminosity/1655816255734-dad6a9.jpeg' alt='...' />
               
                
              )}
          </DialogContentText>
           </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
           </Dialog>      
                      {/* <MoreVertIcon /> */}

                    </IconButton>
                  }
                  title={dt.title}
                  subheader="September 14, 2016"
                />
                <CardMedia
                  sx={{ padding: "" }}
                  component="img"
                  height="194"
                  image={dt.link}
                  alt="Paella dish"
                />
                <CardContent>
                  <Typography
                    sx={{ width: "100%" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {" "}
                    {dt.Content}
                  </Typography>
                  <Typography
                    sx={{ width: "100%", float: "left" }}
                    variant="body2"
                    color="text.secondary"
                  >
                    {" "}
                    {dt.Rate}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {" "}
                    {dt.Reupess}
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    <ExpandMoreIcon />
                  </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                      Heat 1/2 cup of the broth in a pot until simmering, add
                      saffron and set aside for 10 minutes.
                    </Typography>
                  </CardContent>
                </Collapse>
              </Card>
            </Container>
        );
      })}
    </div>
  );
}

export default Carsoule;
