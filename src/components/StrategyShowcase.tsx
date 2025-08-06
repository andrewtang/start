"use client";
import React from "react";

const strategies = [
  { name: "US Top 500", description: "Track the S&P 500 with direct indexing." },
  { name: "Tech Growth", description: "Focus on high-growth tech stocks." },
  { name: "All Weather", description: "Diversified, risk-managed portfolio." },
];

const StrategyShowcase: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-black text-left">Indexes We Have For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {strategies.map((s) => (
          <div key={s.name} className="p-8 rounded-xl border border-gray-200 bg-white flex flex-col items-start shadow-sm">
            <h3 className="text-lg font-bold text-green-600 mb-2">{s.name}</h3>
            <p className="text-gray-800">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StrategyShowcase; 