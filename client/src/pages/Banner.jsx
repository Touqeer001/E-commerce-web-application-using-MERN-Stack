import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "./Banner/Banner.js";
import image1 from "../pages/BannerImage/ban4.jpg";
import image2 from "../pages/BannerImage/ban2.jpg";
import image3 from "../pages/BannerImage/ban3.jpg";
import image4 from "../pages/BannerImage/ban5.jpg";

import { styled } from "@mui/material";

const Image = styled("img")({
  objectFit: "contain",
  width: "100%",
  height: 330,

  display: "block",
  margin: "auto",
});


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      showDots={false}
      slidesToSlide={1}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      <div>
        <Image src={image1} alt="Description" />
      </div>
      <div>
        <Image src={image2} alt="Description" />
      </div>
      <div>
        <Image src={image3} alt="Description" />
      </div>
      <div>
        <Image src={image4} alt="Description" />
      </div>
    </Carousel>
  );
};

export default Banner;
