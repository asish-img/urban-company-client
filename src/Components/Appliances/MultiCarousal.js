import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MultiCarousal.css";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";
let slidesToShow = 4;
const PreviousBtn = (props) => {
  const { className, onClick, currentSlide } = props;
  return (
    <>
      {currentSlide !== 0 && (
        <div className={className} onClick={onClick}>
          <WestIcon
            style={{
              color: "black",
              fontSize: "15px",
              height: "20px",
              width: "20px",
            }}
          />
        </div>
      )}
    </>
  );
};
const NextBtn = (props) => {
  const { className, onClick, currentSlide, slideCount } = props;
  return (
    <>
      {currentSlide !== slideCount - slidesToShow && (
        <div className={className} onClick={onClick}>
          <EastIcon
            style={{
              color: "#666666",
              fontSize: "15px",
              height: "20px",
              width: "20px",
            }}
          />
        </div>
      )}
    </>
  );
};
const MultiCarousal = () => {
  const data = [
    {
      id: "1",
      title: "Refrigerator",
      subtitle: "",
      link: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bf5acc80.png",
    },
    {
      id: "2",
      title: "Geyser",
      subtitle: "Starts at ₹249",
      link: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_c0667020.png",
    },
    {
      id: "3",
      title: "Water Purifier",
      subtitle: "Upto 45% off",
      link: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_bbb8c690.png",
    },
    {
      id: "4",
      title: "Washing Machine",
      subtitle: "",
      link: "https://res.cloudinary.com/urbanclap/image/upload/q_auto,f_auto,fl_progressive:steep,w_532/t_high_res_category/categories/category_v2/category_b78221c0.png",
    },
  ];
  const imgg = data.map((obj) => {
    return obj.link;
  });
  console.log(imgg);
  return (
    <div style={{ margin: "30px", width: "1172px" }}>
      <Slider
        prevArrow={<PreviousBtn />}
        nextArrow={<NextBtn />}
        slidesToShow={slidesToShow}
        infinite={false}
      >
        {data.map((obj) => (
          <div style={{ width: "266px", height: "213px", margin: "0px 8px" }}>
            <Card itemObj={obj} />
          </div>
        ))}
      </Slider>
    </div>
  );
};
const Card = ({ itemObj }) => {
  return (
    <div className="img-box" style={{ margin: "0px 8px", textAlign: "center" }}>
      <img
        src={itemObj.link}
        alt="i"
        className="card-img"
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "4px",
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
      <p className="imgTitle">{itemObj.title}</p>
      <p className="imgSubTitle">{itemObj.subtitle}</p>
    </div>
  );
};
export default MultiCarousal;
