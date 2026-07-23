"use client";
import { useState } from "react";

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "What materials do you use for your furniture?", a: "We use only the highest quality wood, fabric, and other materials to ensure that our furniture is both durable and stylish." },
    { q: "Do you offer delivery?", a: "Yes, we deliver across South Africa. Check our Delivery Schedule page to see when we'll be in your province." },
    { q: "Can I customize my furniture?", a: "Absolutely! We offer customization options for most of our products. You can choose different finishes, fabrics, and sizes to fit your needs." },
    { q: "How long does it take to deliver my order?", a: "Delivery timelines vary depending on the item and your location. Custom orders usually take 4-6 weeks, while in-stock items can be delivered within 7-10 days." },
    { q: "What is your payment policy?", a: "For most items, you pay on delivery – you inspect the piece before paying. Large custom projects (TV backdrops, kitchen units, dining tables) require a deposit to secure materials." },
    { q: "Do you have a showroom?", a: "Yes! We welcome walk-ins at our workshop. Visit us at 4 Salisbury St, Salisbury Claims, Johannesburg. We're open Mon–Fri 8am–5pm and Sat 9am–2pm." },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-12 pt-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">Frequently Asked Questions</h1>
      <p className="text-[#6b4c3b] text-center mb-12">Find answers to common questions about our furniture and services.</p>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-md border border-[#d4b896]/20 overflow-hidden">
            <button
              className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#f5ede4] transition font-medium text-[#4a3520]"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span>{faq.q}</span>
              <span className="text-xl text-[#c87a3a]">{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-4 text-[#6b4c3b]">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-xl mx-auto text-center">
        <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-4">Have More Questions?</h2>
        <p className="text-[#6b4c3b] mb-6">Submit your question below and we&apos;ll get back to you.</p>
        <form
          action="https://formspree.io/f/xqaawnoe"
          method="POST"
          target="_blank"
          className="bg-white p-6 rounded-2xl shadow-md border border-[#d4b896]/20 space-y-4"
        >
          <textarea
            name="question"
            placeholder="Type your question here..."
            required
            className="w-full p-3 border border-[#d4b896]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#8b6914] outline-none"
            rows={4}
          />
          <input
            type="email"
            name="_replyto"
            placeholder="Your Email"
            required
            className="w-full p-3 border border-[#d4b896]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#8b6914] outline-none"
          />
          <button type="submit" className="w-full bg-[#8b6914] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b4c1e] transition shadow-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}