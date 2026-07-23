"use client";
import { useState } from "react";
import { FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqCategories = [
  {
    category: "Ordering & Payment",
    items: [
      { q: "What is your payment policy?", a: "For most items, you pay on delivery – you inspect the piece before paying. Large custom projects (TV backdrops, kitchen units, dining tables) require a deposit to secure materials." },
      { q: "Do you offer lay-by or installment plans?", a: "Currently we don't offer installment plans, but we do accept bank transfers and cash on delivery." },
    ],
  },
  {
    category: "Delivery & Shipping",
    items: [
      { q: "Do you deliver nationwide?", a: "Yes, we deliver across South Africa. Check our Delivery Schedule page to see when we'll be in your province." },
      { q: "How long does delivery take?", a: "Custom orders usually take 4-6 weeks, while in-stock items can be delivered within 7-10 days. We'll confirm a date once your order is placed." },
    ],
  },
  {
    category: "Customization",
    items: [
      { q: "Can I customize my furniture?", a: "Absolutely! We offer customization options for most products – choose different finishes, fabrics, sizes, and more." },
      { q: "What materials do you use?", a: "We use only the highest quality wood, fabric, and other materials to ensure durability and style." },
    ],
  },
  {
    category: "Returns & Warranty",
    items: [
      { q: "What is your return policy?", a: "We offer a 30-day return policy for unused furniture in its original packaging. Custom-made items are non-refundable." },
      { q: "Do you offer a warranty?", a: "Yes, we provide a 12-month warranty on all our furniture covering manufacturing defects." },
    ],
  },
];

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredCategories = faqCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

  return (
    <div className="pt-20">
      <div className="max-w-4xl mx-auto px-4 md:px-6 py-12">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-[#6b4c3b] text-center mb-8">
          Find answers to common questions about our furniture and services.
        </p>

        {/* Search bar */}
        <div className="max-w-lg mx-auto mb-10">
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full py-3 px-5 pl-12 rounded-full border border-[#d4b896]/30 bg-white focus:ring-2 focus:ring-[#8b6914] outline-none"
            />
            <FaQuestionCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-[#b8a392]" />
          </div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {filteredCategories.map((category, catIdx) => (
            <div key={catIdx} className="space-y-2">
              <h2 className="font-serif text-xl font-bold text-[#8b6914] border-b border-[#d4b896]/30 pb-2">
                {category.category}
              </h2>
              {category.items.map((faq, idx) => {
                const globalIdx = catIdx * 100 + idx;
                const isOpen = openIndex === globalIdx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl shadow-sm border border-[#d4b896]/20 overflow-hidden transition-shadow hover:shadow-md"
                  >
                    <button
                      className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-[#f5ede4] transition font-medium text-[#4a3520]"
                      onClick={() => toggleFAQ(globalIdx)}
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <FaChevronUp className="text-[#c87a3a] ml-4 shrink-0" />
                      ) : (
                        <FaChevronDown className="text-[#c87a3a] ml-4 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-4 text-[#6b4c3b] leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
          {filteredCategories.length === 0 && (
            <div className="text-center py-8 text-[#6b4c3b]">
              No FAQs match your search. Try a different keyword.
            </div>
          )}
        </div>

        {/* Ask a Question CTA */}
        <div className="mt-12 text-center bg-[#faf6f0] p-6 rounded-2xl border border-[#d4b896]/20">
          <h3 className="font-serif text-xl font-bold text-[#4a3520] mb-2">
            Still have questions?
          </h3>
          <p className="text-[#6b4c3b] mb-4">
            We&apos;re here to help. Drop us a message and we&apos;ll get back to you.
          </p>
          <form
            action="https://formspree.io/f/xqaawnoe"
            method="POST"
            target="_blank"
            className="max-w-md mx-auto space-y-3"
          >
            <textarea
              name="question"
              placeholder="Type your question here..."
              required
              className="w-full p-3 border border-[#d4b896]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#8b6914] outline-none"
              rows={3}
            />
            <input
              type="email"
              name="_replyto"
              placeholder="Your Email"
              required
              className="w-full p-3 border border-[#d4b896]/30 rounded-lg bg-white focus:ring-2 focus:ring-[#8b6914] outline-none"
            />
            <button type="submit" className="w-full bg-[#8b6914] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b4c1e] transition shadow-md">
              Submit Question
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}