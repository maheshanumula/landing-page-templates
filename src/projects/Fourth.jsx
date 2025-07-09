import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { IoMdStar } from "react-icons/io";
import { FaBookOpen } from "react-icons/fa";
import { PiStudentDuotone } from "react-icons/pi";


  const Fourth= () => {
  const images = [
    
  {
    image: "photos/card1.png",
    rating: '5',
    title: 'Design bannar',
    subtitle: 'Colt stelle',
   
  },
  {
    image: "photos/card2.png",
    rating: '5',
    title: 'Full stack python',
    subtitle: 'Colt stelle',
  },
   {
    image: "photos/card3.png",
    rating: '4',
    title: 'Design system',
    subtitle: 'Colt stelle',
    
  }

];

  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div className="sliding-cards">
       <h1> Popular courses.</h1>
      <Slider {...settings}>
        
        {images.map((url, index) => (
          <div className="card-img" key={index}>
            <img src={url.image}   /><br/>
            <div className="text">
            <h1> {url.title} </h1>
            <p> {url.subtitle} </p>
            <div className="rating">
              <ul>
                <li>{url.rating}<IoMdStar className="yellow"/> <IoMdStar className="yellow"/> <IoMdStar className="yellow"/> <IoMdStar className="yellow"/> </li>
                <li>$20</li>
              </ul>
            </div>

            <hr />
            <div className="mini-nav">
              <ul>
                <li><FaBookOpen/>  12classes </li>
                
                <li> <PiStudentDuotone/>   130student</li>
              </ul>
            </div>
            </div>
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Fourth;