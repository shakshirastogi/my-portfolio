export default function Contact() {
  return (
    <section id="contact" className="py-20 px-10 text-center">
      <h2 className="text-3xl font-bold text-pink-500 mb-6">Contact</h2>
      <p className="text-gray-400 mb-2">Let’s connect and discuss new opportunities!</p>
      
      {/* Clickable phone number */}
      <p className="text-gray-400 mb-8">
        Phone:{" "}
        <a
          href="tel:9540338903"
          className="text-white font-semibold hover:text-pink-500 transition"
        >
          9540xxxxxx
        </a>
      </p>

      <div className="flex justify-center gap-6">
        <a
          href="mailto:sakshirastogi0707@gmail.com"
          className="bg-pink-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-pink-600 transition"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/sakshi-rastogi-24b204215/"
          className="bg-gray-800 px-6 py-3 rounded-full text-gray-300 font-semibold hover:bg-pink-500 hover:text-white transition"
        >
          LinkedIn
        </a>
      </div>
    </section>
  );
}
