import Slider from "react-slick";




const Five = () => {

    const pics = [
    
  {
    image: "photos/user1.png",
    
    title: 'ShooThar Mien',
    subtitle: 'Senior UX Designer',
   
  },
  {
    image: "photos/user2.png",
   
    title: 'ShooThar Mien',
     subtitle: 'Senior UX Designer',
  },
   {
    image: "photos/user3.png",
    title: 'ShooThar Mien',
     subtitle: 'Senior UX Designer',
    
  }

];


const setting = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
    return ( 
      <div className="sliding-userpic">
       <h1 className="head">Meet with our <br/>
        mentor.</h1>
       <Slider {...setting}>
        
        {pics.map((url, index) => (
          <div className="card-us" key={index}>
            <img src={url.image}   /><br/>
            
            <h1> {url.title} </h1>
            <p> {url.subtitle} </p>
        
            
           
          </div>
        ))}

       </Slider>

      </div>

     );
}
 
export default Five;