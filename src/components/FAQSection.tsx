"use client";
import React, { useState } from "react";

const faqs = [
  { q: "Can I trust Double?", a: "Your assets are held securely with our partner, Apex Clearing." },
  { q: "How can Double make a business on $1/month?", a: "We use automation and scale to keep costs low." },
  { q: "What happens if Double goes out of business?", a: "Your assets are always in your name and accessible." },
  { q: "What is direct indexing?", a: "Direct indexing means owning the underlying stocks, not just an ETF." },
];

const FAQSection: React.FC = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20 bg-white">
      <div className="max-w-2xl mx-auto text-left">
        <h2 className="text-2xl font-bold mb-8 text-black">Questions & Answers</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={faq.q}>
              <button
                className="w-full text-left font-semibold py-4 px-6 bg-gray-50 rounded-xl text-black border border-gray-200 shadow-sm"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {faq.q}
              </button>
              {open === i && (
                <div className="p-6 bg-white rounded-b-xl text-green-600 border-t border-gray-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 