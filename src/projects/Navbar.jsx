import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
     <Link className="linck">
           <div className="navbar-logo">E-Learning.</div>
     </Link>


      <ul className="navbar-links">
       
           
         <Link className="linck" to = "/abc">
            <li ><a >Home</a></li> 
         
         </Link>
        <Link className="linck">
            <li><a >Courses</a></li>
        </Link>
        <Link className="linck">
            <li><a >Mentor</a></li>
            
        </Link>
        <Link className="linck">
           <li><a >Group</a></li>
        
        </Link>
        <Link className="linck">
           <li><a >Testimonial</a></li>
        
        </Link>
        <Link className="linck">
          <li><a >Docs</a></li>
        
        </Link>
        <Link className="linck">
        
        </Link>
       
      </ul>

      <div className="navbar-auth">
        <button className="signin">Sign In</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
