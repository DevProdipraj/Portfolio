import React from "react";

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1a1030]">
      <div className="relative w-full pt-28 xl:pb-28 overflow-hidden container ">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 rounded-full bg-purple-900/20 blur-[100px] float-element"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-blue-900/20 blur-[120px] float-element"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
          <div className="absolute top-1/4 right-20 w-3 h-3 rounded-full bg-purple-400/50 float-element"></div>
          <div className="absolute bottom-1/3 left-20 w-4 h-4 rounded-full bg-blue-400/50 float-element"></div>
          <div className="absolute top-40 left-1/3 w-2 h-2 rounded-full bg-pink-400/50 float-element"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10 pb-[80px]">
          <h1 className="contact-title text-6xl md:text-8xl font-bold tracking-tighter mb-16 text-center">
            {[..."CONTACT"].map((char, i) => (
              <span
                key={i}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
              >
                {char}
              </span>
            ))}
          </h1>

          <div className="contact-container grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form className="contact-form bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    className="block px-4 py-3 w-full bg-white/5 rounded-lg border border-white/10 text-white placeholder-transparent peer focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-3 px-1 text-sm text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-300"
                  >
                    Your Name <span className="text-purple-400">*</span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="block px-4 py-3 w-full bg-white/5 rounded-lg border border-white/10 text-white placeholder-transparent peer focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-3 px-1 text-sm text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-300"
                  >
                    Your Email <span className="text-purple-400">*</span>
                  </label>
                </div>

                <div className="relative">
                  <div className="block px-4 py-3 w-full bg-white/5 rounded-lg border border-white/10 text-white cursor-pointer flex items-center justify-between">
                    <span className="text-gray-400">Select a subject</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <label className="absolute left-4 -top-3 px-1 text-sm text-gray-300">
                    Subject <span className="text-purple-400">*</span>
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    className="block px-4 py-3 w-full min-h-[150px] bg-white/5 rounded-lg border border-white/10 text-white placeholder-transparent peer focus:outline-none focus:ring-1 focus:ring-purple-500/50"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-3 px-1 text-sm text-gray-300 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-gray-300"
                  >
                    Your Message <span className="text-purple-400">*</span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-lg font-medium transition-all bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-lg hover:shadow-purple-500/30"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span>Send Message</span>
                </button>
              </div>
            </form>

            <div className="contact-info bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Let's Work Together
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Whether you have a project in mind, need technical advice,
                    or just want to connect, I'd love to hear from you. Fill out
                    the form or reach out directly through one of these
                    channels.
                  </p>
                  <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 p-6 rounded-xl mb-8">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      Quick Info
                    </h3>
                    <p className="text-gray-300">
                      <span className="text-purple-300">Response Time:</span>{" "}
                      Usually within 24 hours
                    </p>
                    <p className="text-gray-300">
                      <span className="text-blue-300">Availability:</span> Open
                      for new projects
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    href="mailto:prodip.dev@gmail.com"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <span>prodip.dev@gmail.com</span>
                  </a>

                  <a
                    target="_blank"
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    href="https://github.com/prodiprajbongshi"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <span>github.com/prodiprajbongshi</span>
                  </a>

                  <a
                    target="_blank"
                    className="flex items-center   gap-3 text-gray-300 hover:text-white transition-colors group"
                    href="https://linkedin.com/in/rajbongshiprodip"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center group-hover:rotate-12 transition-transform">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <span>linkedin.com/in/rajbongshiprodip</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://www.linkedin.com/in/prodip-raj-a50818282/" target="_blank" className="text-white">Prodip.Dev</a> All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              className="text-gray-400 hover:text-white transition-colors text-sm"
              href="/privacy"
            >
              Privacy Policy
            </a>
            <a
              className="text-gray-400 hover:text-white transition-colors text-sm"
              href="/terms"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
