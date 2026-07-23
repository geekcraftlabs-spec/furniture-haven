import Image from "next/image";

export default function ContactPage() {
  const socials = [
    { name: "WhatsApp", img: "whatsapp.png", url: "https://wa.me/27684858415" },
    { name: "Instagram", img: "instagram.png", url: "https://www.instagram.com/anotheronedown__" },
    { name: "TikTok", img: "tiktok.png", url: "https://www.tiktok.com/@geek.craft.labs" },
    { name: "Twitter", img: "twitter.png", url: "https://x.com/another_1_downn" },
    { name: "Email", img: "email.png", url: "mailto:info@geekcraftlabs.com" },
    { name: "Phone", img: "phone.png", url: "tel:+27684858415" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 pt-20">
      <h1 className="font-serif text-4xl md:text-5xl font-bold text-[#4a3520] text-center mb-4">Contact Us</h1>
      <p className="text-[#6b4c3b] text-center max-w-2xl mx-auto mb-12">
        If you have any questions or would like to inquire about our products, feel free to contact us.
        We are here to help you with all your furniture needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-4">Why Reach Out?</h2>
          <p className="text-[#6b4c3b] mb-4">
            At Furniture Haven, we value open communication and strive to make your furniture dreams a reality.
            Our team is ready to assist with any inquiries or requests, ensuring a seamless and personalized experience.
          </p>
          <div className="bg-[#8b6914] text-white p-6 rounded-xl">
            <p className="text-white/90 text-sm">
              <strong>Our Promise:</strong> You only pay when we deliver. You inspect the piece first,
              and only then do you hand over payment. This is our guarantee of quality and commitment to you.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-semibold text-[#4a3520] mb-4">Connect with Us</h3>
            <div className="flex flex-wrap gap-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-3 rounded-lg shadow-md border border-[#d4b896]/20 hover:shadow-lg transition text-center w-20"
                >
                  <div className="relative w-10 h-10 mx-auto mb-1">
                    <Image src={`/images/${social.img}`} alt={social.name} width={40} height={40} className="object-contain" />
                  </div>
                  <span className="text-xs text-[#6b4c3b]">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-2xl font-bold text-[#8b6914] mb-4">Get in Touch</h2>
          <form
            action="https://formspree.io/f/xannappo"
            method="POST"
            target="_blank"
            className="bg-white p-6 rounded-2xl shadow-md border border-[#d4b896]/20 space-y-4"
          >
            <div>
              <label className="block text-sm font-medium text-[#4a3520] mb-1">Your Name</label>
              <input type="text" name="name" required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4a3520] mb-1">Your Email</label>
              <input type="email" name="email" required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4a3520] mb-1">Phone Number</label>
              <input type="tel" name="phone" required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#4a3520] mb-1">Message</label>
              <textarea name="message" rows={4} required className="w-full border border-[#d4b896]/30 rounded-lg px-4 py-2 focus:ring-2 focus:ring-[#8b6914] outline-none"></textarea>
            </div>
            <button type="submit" className="w-full bg-[#8b6914] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#6b4c1e] transition shadow-md">
              Send Message
            </button>
          </form>
        </div>
      </div>

      <div className="mt-12 rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5913079615193!2d28.044739999999997!3d-26.209969899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e979cda5d93%3A0xf48674dd6b28b6cf!2s4%20Salisbury%20St%2C%20Salisbury%20Claims%2C%20Johannesburg%2C%202001!5e0!3m2!1sen!2sza!4v1756831820669"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}