import React from "react";
import "./App.css";
import Navbar from "./projects/Navbar";
import First from "./projects/First";
import Thrid from "./projects/Thrid";
import Fourth from "./projects/Fourth";
import Five from "./projects/Five";
import Six from "./projects/Six";
import Seven from "./projects/Seven";
import Eight from "./projects/Eight";
import { Route, Routes } from "react-router-dom";
import Home from "./projects/Home";



const App = () => {

  return ( 
     <div>
          <Navbar/>
         
          <Routes>
            
            <Route path="/" element={<Home/>}/>
            
            <Route path="/abc" element={<Fourth/>}/>
             <Route path="/aaa" element={<Five/>}/>
             <Route path="/bbb" element={<Six/>}/>
             <Route path="/ccc" element={<Eight/>}/>

          </Routes>
          
          

     </div>
   );
}
 
export default App;