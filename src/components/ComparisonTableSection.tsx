"use client";
import React from "react";

const ComparisonTableSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-8 text-black">Why Double is better than the rest</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border rounded-xl bg-white text-black border-gray-200">
          <thead>
            <tr>
              <th className="p-4 text-left text-black">Features</th>
              <th className="p-4 text-left text-black">Double</th>
              <th className="p-4 text-left text-black">M1</th>
              <th className="p-4 text-left text-black">Wealthfront</th>
              <th className="p-4 text-left text-black">Robinhood</th>
              <th className="p-4 text-left text-black">Frec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-4">Direct Index popular funds</td>
              <td className="p-4">20+</td>
              <td className="p-4">-</td>
              <td className="p-4">2</td>
              <td className="p-4">-</td>
              <td className="p-4">3</td>
            </tr>
            <tr>
              <td className="p-4">Tax aware rebalancing</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">-</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">-</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
            </tr>
            <tr>
              <td className="p-4">Dollar Cost Average</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">-</td>
              <td className="p-4">-</td>
              <td className="p-4">-</td>
              <td className="p-4">-</td>
            </tr>
            <tr>
              <td className="p-4">Rebalance automatically</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">Partial</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">-</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
            </tr>
            <tr>
              <td className="p-4">Zero AUM fees</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">-</td>
              <td className="p-4 text-green-600 font-bold">✔️</td>
              <td className="p-4">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default ComparisonTableSection; 