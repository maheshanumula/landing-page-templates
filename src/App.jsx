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



const App = () => {

  return ( 
     <div>
          <Navbar/>
          <First/>
          <Thrid/>
          <Routes>

            <Route path="/abc" element={<Fourth/>}/>
           
          </Routes>
          
          <Five/>
          <Six/>
          <Seven/>
          <Eight/>

     </div>
   );
}
 
export default App;