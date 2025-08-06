"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const features = [
  { title: "No AUM Fees", description: "To start investing in our over 50 indexes, all you pay is a simple $1 monthly fee. This is a game-changer in the investing world, putting more money back in your pocket." },
  { title: "Direct Indexing", description: "Instead of buying one share of a traditional ETF or mutual fund, we buy fractional shares of the individual stocks at the same weights. This allows your portfolio to track the underlying fund's exposure perfectly while offering you significant advantages." },
  { title: "Tax Loss Harvesting", description: "When you invest in individual stocks, you have more opportunities to sell losing positions to offset gains elsewhere, potentially reducing your tax bill." },
];

const FeatureSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
      {features.map((f) => (
        <div key={f.title} className="p-8 rounded-xl border border-gray-200 bg-white flex flex-col items-start shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle className="text-green-500" size={24} />
            <h3 className="text-xl font-bold text-black">{f.title}</h3>
          </div>
          <p className="text-base text-gray-800 font-medium">{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default FeatureSection; 