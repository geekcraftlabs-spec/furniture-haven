"use client";
import { useState } from "react";

export default function TestimonialsPage() {
  const [reviewText, setReviewText] = useState("");
  const [reviewName, setReviewName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const testimonials = [
    { name: "Sarah L.", text: "Furniture Haven helped transform my living room! The quality is outstanding, and the delivery was quick and hassle-free." },
    { name: "James T.", text: "I couldn't be happier with the bedroom set I bought. It fits perfectly and looks even better than I imagined!" },
    { name: "Emily W.", text: "The team at Furniture Haven made my office look amazing. I highly recommend their products!" },
    { name: "Amanda P.", text: "Absolutely love the custom dining table I ordered. It's sturdy, elegant, and exactly what I wanted." },
    { name: "Michael B.", text: "The customer service team was super helpful in guiding me through my purchase. Highly recommended!" },
    { name: "Lisa K.", text: "I've received so many compliments on my new sofa. It's not just beautiful but also extremely comfortable." },
    { name: "David H.", text: "The craftsmanship of their furniture is top-notch. Will definitely shop here again." },
    { name: "Rebecca T.", text: "A big thanks to Furniture Haven for their prompt service and quality products. My home feels so much cozier now!" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div suppressHydrationWarning className="max-w-7xl mx-auto px-4 md:px-6 py-12 pt-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">What Our Customers Say</h1>
      <p className="text-[#6b4c3b] text-center max-w-2xl mx-auto mb-12">
        We take pride in offering high-quality furniture and excellent customer service. Here&apos;s what our satisfied customers have to say.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {testimonials.map((t, i) => {
          const rotations = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];
          const rotation = rotations[i % rotations.length];
          const colors = [
            "bg-[#ffeb3b]", "bg-[#ff5722]", "bg-[#4caf50]", "bg-[#2196f3]",
            "bg-[#9c27b0]", "bg-[#ff9800]", "bg-[#673ab7]", "bg-[#3f51b5]"
          ];
          const color = colors[i % colors.length];
          return (
            <div
              key={i}
              className={`${color} p-6 rounded-lg shadow-md ${rotation} transition-transform hover:scale-105`}
              style={{ transform: `rotate(${rotation})` }}
            >
              <p className="text-sm leading-relaxed text-[#2d1b0e]">{t.text}</p>
              <span className="block mt-3 text-right text-sm font-semibold text-[#4a3520]">- {t.name}</span>
            </div>
          );
        })}
      </div>

      <div className="max-w-xl mx-auto text-center">
        <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-4">Write a Review</h2>
        <form
          action="https://formspree.io/f/mvggdbzr"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md border border-[#d4b896]/20 space-y-4"
        >
          <textarea
            name="review"
            placeholder="Write your review here..."
            required
            className="w-full p-3 border border-[#d4b896]/30 rounded-lg bg-white text-[#2d1b0e] focus:ring-2 focus:ring-[#8b6914] outline-none"
            rows={4}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 border border-[#d4b896]/30 rounded-lg bg-white text-[#2d1b0e] focus:ring-2 focus:ring-[#8b6914] outline-none"
            value={reviewName}
            onChange={(e) => setReviewName(e.target.value)}
          />
          <button type="submit" className="w-full bg-[#8b6914] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b4c1e] transition shadow-md">
            Submit Review
          </button>
          {submitted && (
            <p className="text-[#4caf50] font-semibold">Thank you! Your review has been submitted.</p>
          )}
        </form>
      </div>
    </div>
  );
}