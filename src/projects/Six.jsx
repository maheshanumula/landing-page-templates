import Slider from "react-slick";
import { IoMdStar } from "react-icons/io";



const Six = () => {

const photos = [
    
  {
    image: "photos/user1.png",
    
    title: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    subtitle: 'Rebort Fox',
    name: "CEO,Parkview.int.Ltd",
   
  },
  {
    image: "photos/user2.png",
   
    title: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    subtitle: 'Rebort Fox',
    name: "CEO,Parkview.int.Ltd",
  },
   {
    image: "photos/user3.png",
    title: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour",
    subtitle: 'Rebort Fox',
    name: "CEO,Parkview.int.Ltd",
    
  }

];


const values ={
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
}


    return ( 
    <div className="aside">
        
            <Slider {...values}>
                
               
               
                    {photos.map((info,nu)=> (
                        <div className="mini-aside" key={nu}>
                            <img src= {info.image} />
                            <p> {info.title} </p>
                            <div className="mini-ul">
                                <ul>
                                    <li> {info.subtitle} </li>
                                    <li> <IoMdStar className="yellow"/><IoMdStar className="yellow"/><IoMdStar className="yellow"/><IoMdStar className="yellow"/> </li>
                                </ul>
                            </div>
                            <p>{info.name} </p>
                        </div>
                    ))}
                 
            </Slider>
            
        
    </div>
     );
}
 
export default Six;