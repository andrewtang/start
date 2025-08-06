"use client";
import React, { useState } from "react";

const FeeCalculatorSection: React.FC = () => {
  const [value, setValue] = useState(10000);
  const advisorFee = 0.01; // 1%
  const doubleFee = 12; // $1/month
  const years = 5;
  const advisorCost = value * advisorFee * years;
  const doubleCost = doubleFee * years;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-xl mx-auto text-left">
        <h2 className="text-2xl font-bold mb-8 text-black">See how much you could save on fees</h2>
        <div className="mb-4">
          <label className="block mb-2 font-semibold text-black">Portfolio Starting Value</label>
          <input
            type="number"
            className="w-40 px-3 py-2 border border-gray-200 rounded bg-white text-black"
            value={value}
            min={0}
            onChange={e => setValue(Number(e.target.value))}
          />
        </div>
        <div className="flex justify-start gap-8 mt-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="font-bold text-lg mb-1 text-black">Advisor Fees (1%)</div>
            <div className="text-xl text-green-600">${advisorCost.toLocaleString()}</div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <div className="font-bold text-lg mb-1 text-black">Double Fees ($1/mo)</div>
            <div className="text-xl text-green-600">${doubleCost.toLocaleString()}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeeCalculatorSection; 