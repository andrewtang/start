"use client";
import React from "react";

const testimonials = [
  { name: "Nicholas T.", title: "CEO", quote: "I love the diversity of strategies I can invest in..." },
  { name: "Matt C.", title: "Founder", quote: "With automated features like rebalancing and tax loss harvesting, I don't have to worry about optimizing my portfolio manually." },
  { name: "Patrick L.", title: "Sr. Director Product Management", quote: "I really like direct indexing with Double. It's simple to understand and provides me with something that I really can't get anywhere else." },
];

const TestimonialCarousel: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="max-w-3xl mx-auto text-left">
      <h2 className="text-2xl font-bold mb-8 text-black">What people have to say...</h2>
      <div className="space-y-8">
        {testimonials.map((t) => (
          <div key={t.name} className="p-8 rounded-xl border border-gray-200 bg-white flex flex-col items-start shadow-sm">
            <p className="text-lg italic mb-2 text-black">“{t.quote}”</p>
            <div className="font-semibold text-green-600">{t.name}</div>
            <div className="text-sm text-gray-600">{t.title}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialCarousel; 