import { TiTick } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";




const First = () => {
    return ( 
    <div className="section">
        <div className="section-left">   
            <b>Get 30% off on first enroll</b>
           <h1>Advance your <br/>
           engineering skills with<br/>
            us.</h1>
            <p>Build skills with our courses and mentor from world-class companies.</p>
            <input type="text" placeholder="Search courses..." /><CiSearch className="search" />
            <div className="section-pp">
                <ul>
                    <li> <p> <TiTick className="icon" />Flexible</p></li>
                    <li> <p> <TiTick className="icon" />Learning path</p></li>
                    <li> <p> <TiTick className="icon" />Community</p></li> 
                </ul>
            </div>      
        </div>
            <div className="section-right">
                <img src="photos/mahila.png"  />
            </div>          
    </div>
     );
}
 
export default First;