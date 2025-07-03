import React from "react";


  
  
  
  
  
 



const Three = () => {
  return (
    <div className="uniform">
      {/* Main Content */}
     
      <div className="flex-1">
         <h1>SIP Calculator – Systematic Investment Plan Calculator</h1>
      <p>Prospective investors can think that SIPs and mutual funds are the same. However, <br/> 
      SIPs are merely a method of investing in mutual funds, the other method being a lump sum. <br/> 
      A SIP calculator is a tool that helps you determine the returns you can avail when parking your funds<br/> 
       in such investment tools. Systematic Investment Plan or SIP is a process of investing a fixed sum of money <br/> 
        in mutual funds at regular intervals. SIPs usually allow you to invest weekly, quarterly, or monthly. </p>
        <h2 className="text-2xl font-bold mb-4">What is a SIP Calculator?</h2>
        <p className="mb-4">
          A SIP calculator is a simple tool that allows individuals to get an 
          idea of the returns on their<br/>  <span className="text-teal-600 font-medium">mutual fund</span> investments 
          made through SIP.SIP investments in mutual funds have become <br/> 
          one of the most popular investment options for millennials lately.
        </p>
        <p>
          These <span className="font-medium">mutual fund sip calculators</span> are designed to give potential
           investors an estimate<br/>  on their mutual fund investments. 
            However, the actual returns offered by a mutual fund scheme <br/> 
            vary depending on various factors. The SIP calculator does not provide  
            clarification for the exit load and <br/> expense ratio (if any).
        </p>
      </div>

      {/* Sidebar */}
      <div className="sidebar1">
        <ul>
            <li className="heading"><h1>   Mutual Fund Calculators </h1></li>
            <li> ELSS Calculator </li>
            <hr />  
            <li> SBI SIP Calculator </li>
            <hr />  

            <li>HDFC SIP Calculator  </li>
            <hr />  

            <li> ICICI SIP Calculator</li>
            <hr />  

            <li> Axis Bank SIP Calculator </li>
            <hr />  

            <li> Kotak Bank SIP Calculator</li>
            <hr />  

            <li> Nippon India SIP Calculator </li>
            <hr />  

            <li> LIC SIP Calculator</li>
            <hr />  

            <li> IDBI SIP Calculator </li>
            <hr />  

            <li>PNB SIP Calculator</li>
         

        </ul>

      </div>
     
    </div>
  );
};

export default Three;
