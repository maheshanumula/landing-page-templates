

import React, { useState } from 'react';

const Two = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(375100);
  const [returnRate, setReturnRate] = useState(12);
  const [years, setYears] = useState(10);

  const totalInvested = monthlyInvestment * 12 * years;

  const estReturns = () => {
    const rate = returnRate / 100;
    const months = years * 12;
    const futureValue = monthlyInvestment * ((Math.pow(1 + rate / 12, months) - 1) / (rate / 12)) * (1 + rate / 12);
    return Math.round(futureValue - totalInvested);
  };

  const totalValue = totalInvested + estReturns();

  return (
    <div className='sip'>

    <h1>SIP Calculater</h1>
    <div className="containar">
        
      {/* Left: Inputs */}
      <div className="containar-left">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">Monthly investment</label>
          <input
            type="range"
            min="100"
            max="1000000"
            step="100"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
          />
          <div className="mt-1 text-green-600 font-bold">₹ {monthlyInvestment.toLocaleString()}</div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Expected return rate (p.a)</label>
          <input
            type="range"
            min="1"
            max="30"
            step="0.5"
            value={returnRate}
            onChange={(e) => setReturnRate(Number(e.target.value))}
          />
          <div className="mt-1 text-green-600 font-bold">{returnRate}%</div>
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-semibold">Time period</label>
          <input
            type="range"
            min="1"
            max="30"
            value={years}
            onChange={(e) => setYears(Number(e.target.value))}
          />
          <div className="mt-1 text-green-600 font-bold">{years} Yr</div>
        </div>

        <div className="mt-6 font-semibold text-lg">
          Invested Amount: ₹ {totalInvested.toLocaleString()}
        </div>
        <div className="mt-2 font-semibold text-lg text-blue-600">
          Estimated Returns: ₹ {estReturns().toLocaleString()}
        </div>
        <div className="mt-2 font-bold text-xl text-purple-800">
          Total Value: ₹ {totalValue.toLocaleString()}
        </div>
      </div>

      {/* Right: Call-to-action */}
      <div className= "containar-right">
        <div>
          <img src="photos/pic.jpg" alt="Icon" className="w-20 mx-auto mb-4" />
          <h2 className="text-xl font-bold mb-2">Build Wealth, One SIP at a Time</h2>
          <p className="text-gray-600">
            Start a SIP and harness the power of compounding through consistent, long-term investing.
          </p>
        </div>
        <button style={{backgroundColor:"green",color:"white"}} className="bg-green-600 text-white mt-6 px-6 py-2 rounded hover:bg-green-700 transition">
          START SIP WITH ₹500
        </button>
      </div>
    </div>
    </div>
  );
};

export default Two;
