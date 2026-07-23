import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-6 py-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">
        About Furniture Haven
      </h1>
      <p className="text-[#6b4c3b] text-center max-w-2xl mx-auto mb-12">
        At Furniture Haven, we offer the finest quality furniture to make your home
        stylish and comfortable. Our team works hard to ensure that you get the
        best designs and top-notch quality at affordable prices.
      </p>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#d4b896]/20">
          <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-3">
            The Mission and Vision
          </h2>
          <p className="text-[#6b4c3b]">
            At Furniture Haven, our mission is to transform houses into homes with
            premium furniture that combines functionality, elegance, and
            durability. We aim to make every piece a reflection of your unique
            style and a testament to superior craftsmanship. Our vision is to
            become a global leader in bespoke furniture, setting the standard
            for quality and innovation while ensuring every client&apos;s needs are
            met with unparalleled precision and care.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#d4b896]/20">
          <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-3">
            Our Story
          </h2>
          <p className="text-[#6b4c3b]">
            Furniture Haven began with a simple belief: everyone deserves a space
            that feels truly their own. What started as a small workshop has
            grown into a trusted name in the furniture industry, where
            innovation meets tradition. From humble beginnings, we&apos;ve crafted
            furniture that not only complements spaces but also tells a story.
            Today, we stand as a brand synonymous with customization, quality,
            and a passion for excellence.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-md border border-[#d4b896]/20">
          <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-3">
            Core Values
          </h2>
          <p className="text-[#6b4c3b]">
            At Furniture Haven, we are guided by values that shape every aspect of
            our work. We value craftsmanship, customer satisfaction, innovation,
            sustainability, and integrity. These principles drive us to create
            furniture that exceeds expectations and brings joy to our
            customers&apos; lives.
          </p>
        </div>

        <div className="bg-[#8b6914] rounded-2xl p-8 text-center text-white">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Let&apos;s Bring Your Vision to Life
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            Ready to elevate your living space? Let Furniture Haven bring your vision
            to life. Explore our collection, schedule a consultation, or share
            your ideas with us.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#8b6914] px-8 py-3 rounded-full font-semibold inline-block hover:bg-[#faf6f0] transition"
          >
            Contact Us Today
          </Link>
        </div>
      </div>
    </div>
  );
}