import "./color.css"

import { Link } from "react-router-dom";

const One = () => {
    return ( 
        <div className="navbar">
            <div className="nav-a">
            <ul className="abc">
              
                <Link className="link">
                 <li className="groww">Groww</li>
                
                </Link>
            
                 <Link className="link">
                <li>Stocks</li>
                
                </Link>
                 <Link className="link">
                <li>F&O</li>
                
                </Link>
                 <Link className="link">
                <li>Mutual Founds</li>
                </Link>
                <Link className="link">
                 <li>More</li>
                </Link>
            
            </ul>
              </div>
            <div className="navbar2">
                <p> <input className="input" type="text" placeholder="Search Groww..." /> </p>
                 <button>Login/Signup</button>
            </div>
                
        </div>
     );
}
 
export default One;