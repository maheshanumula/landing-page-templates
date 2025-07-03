import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





  const Third = () => {
  const images = [
  'photos/airbnb.svg',
  'photos/fedex.svg',
  'photos/google.svg',
  'photos/hubspot.svg',
  'photos/microsoft.svg',
  'photos/walmart.svg',
];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000
  };

  return (
    <div className="sliding">
        <h1>Trusted by companies of all sizes</h1>
        
            <Slider {...settings}>
        {images.map((url, index) => (
          <div key={index}>
            <img src={url}   />
          </div>
        ))}
      </Slider>
        
      
    </div>
  );
};

export default Third;