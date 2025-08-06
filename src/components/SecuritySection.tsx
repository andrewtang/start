"use client";
import React from "react";
import { CheckCircle } from "lucide-react";

const SecuritySection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-6xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-8 text-black">Your money is secure</h2>
      <div className="flex flex-wrap gap-8">
        <div className="flex items-center gap-2 p-6 bg-white rounded-xl border border-gray-200 shadow-sm font-semibold text-black">
          <CheckCircle className="text-green-500" size={20} /> SEC Registered
        </div>
        <div className="flex items-center gap-2 p-6 bg-white rounded-xl border border-gray-200 shadow-sm font-semibold text-black">
          <CheckCircle className="text-green-500" size={20} /> Apex Clearing Partner
        </div>
        <div className="flex items-center gap-2 p-6 bg-white rounded-xl border border-gray-200 shadow-sm font-semibold text-black">
          <CheckCircle className="text-green-500" size={20} /> Fiduciary
        </div>
      </div>
    </div>
  </section>
);

export default SecuritySection; 