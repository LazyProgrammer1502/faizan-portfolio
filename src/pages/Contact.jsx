export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-20 px-6 md:px-20 bg-gradient-to-br from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">Contact Me</h2>
        <p className="text-gray-600 dark:text-gray-300">
          Let's build something amazing together—get in touch!
        </p>
      </div>

      <form
        action="https://formspree.io/f/mwpbyavr"
        method="POST"
        className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-8 shadow-2xl max-w-2xl mx-auto space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="p-4 rounded-lg bg-white/20 text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="p-4 rounded-lg bg-white/20 text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <textarea
          name="message"
          rows="5"
          required
          placeholder="Your Message"
          className="w-full p-4 rounded-lg bg-white/20 text-gray-600 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        ></textarea>
        <button
          type="submit"
          className="mt-4 inline-block bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-8 rounded-lg transition-transform hover:scale-105"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
