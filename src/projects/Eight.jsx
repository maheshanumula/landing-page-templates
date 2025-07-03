import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegFolderOpen } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";

const Eight = () => {
    return ( 
    <div className="footer-section">
   
        <div className="footer">
            <div className="footer-logo">
                <h1>E-learning.</h1>
                 <span ><FaFacebookF className="icons" />  <FaInstagram className="icons" />  <FaTwitter className="icons" /></span>
            </div>
            <div className="footer-nav">
                <ul>  
                        <li><b>Links</b></li>
                        <li>Home</li>
                        <li>Courses</li>
                        <li>Menter</li>
                        <li>Group</li>
                        <li>Testimonial</li>
                        <li>Docs</li>              
                </ul>  
            </div>
            <div className="footer-details">
                <ul>
                     <li><b>Other</b></li>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Career</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="footer-nembers">
                <ul>
                    <li>  <FaMapMarkerAlt />  925 Filbert Street Pennsylvania 18072</li>
                    <li><FaPhoneAlt />  +45 3411-4411</li>
                    <li><FaRegFolderOpen />  info@gmail.com</li>
                </ul>
            </div>       
        </div>
        <div className="footer-info">
           <ul>
               <li> @2025Agency.All Rights Reseeved by GetNextjsTemplates.com</li>
               <li>Privacy policy Terms&conditions</li>
               <li>Distributed by themeWage</li>
           </ul>   
        </div>


     </div>   
     );
}
 
export default Eight;