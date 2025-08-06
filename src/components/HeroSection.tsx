"use client";
import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-20 px-4 flex flex-col items-start justify-center min-h-[70vh] font-sans">
      <div className="max-w-3xl w-full">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
            <span className="inline-block w-4 h-4 bg-green-500 rounded-full mr-1" />
            Double
          </span>
          <span className="inline-flex items-center gap-1 bg-orange-100 border border-orange-200 rounded-full px-3 py-1 text-xs font-semibold text-orange-700">
            <span className="w-4 h-4"><ArrowRight size={16} className="inline-block mr-1" /></span>
            Backed by Y Combinator
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-black mb-6 leading-tight">
          <span className="bg-black text-white px-2 py-1 mr-2">Automated</span>
          <span>Portfolio Investing</span>
        </h1>
        <p className="text-lg md:text-xl text-black mb-2 font-sans">
          Choose from <span className="font-bold">50+ broad stock market indexes</span> or build your own.
        </p>
        <p className="text-base text-black mb-8 font-sans">
          We handle the management—including tax loss harvesting—for <span className="underline font-semibold">just $1/month.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <button className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white text-lg font-bold rounded-lg shadow transition-all duration-200 font-sans">
            Get Started
          </button>
          <a href="#" className="flex items-center gap-2 text-black font-semibold text-lg hover:underline font-sans">
            Explore Indexes <ArrowRight size={20} />
          </a>
        </div>
        <div className="flex flex-wrap gap-8 mt-4">
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-black font-medium font-sans">SEC Registered</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-black font-medium font-sans">Apex Clearing Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="text-green-500" size={20} />
            <span className="text-black font-medium font-sans">Fiduciary</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 