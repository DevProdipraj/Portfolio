import React from "react";

const Work = () => {
  return (
    <div>
      <section
        id="work"
        class="relative w-full py-28 overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e1030]"
      >
        {/* <!-- Background Blurs --> */}
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div class="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-900/20 blur-[120px]"></div>
        </div>

        {/* <!-- Content Container --> */}
        <div class="container mx-auto px-6 max-w-6xl relative z-10">
          {/* <!-- Section Title --> */}
          <div class="mb-20 overflow-hidden">
            <h1 class="work-title text-6xl md:text-8xl font-bold tracking-tight">
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                W
              </span>
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                O
              </span>
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                R
              </span>
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                K
              </span>
              <span class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                S
              </span>
            </h1>
            <div class="w-24 h-1 mt-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          {/* <!-- Projects Container --> */}
          <div class="projects-container space-y-16">
            {/* Project 1  */}
            <div class="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div class="relative z-10">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600">
                      <svg
                        class="text-2xl"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
                      FindMyInterior
                    </h2>
                    <p class="text-lg text-gray-300 mb-4">
                      Modern interior design marketplace connecting buyers and
                      sellers across the globe
                    </p>
                    <div class="flex flex-wrap gap-2 mt-4">
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        Marketplace
                      </span>
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        Interior Design
                      </span>
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        E-commerce
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <div class="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      N/A
                    </div>
                    <a
                      href="https://www.findmyinteriors.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div class="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-emerald-900/20">
              <div class="relative z-10">
                <div class="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div class="w-12 h-12 rounded-lg mb-4 flex items-center justify-center bg-gradient-to-r from-teal-500 to-emerald-600">
                      <svg
                        class="text-2xl"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                      </svg>
                    </div>
                    <h2 class="text-3xl md:text-4xl font-bold text-white mb-2">
                      Chatbot with Scoring & Reports
                    </h2>
                    <p class="text-lg text-gray-300 mb-4">
                      A friendly chatbot that helps you assess and improve
                      different areas of your life through simple conversations.
                    </p>
                    <div class="flex flex-wrap gap-2 mt-4">
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        Next.js
                      </span>
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        AI
                      </span>
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        Email Reports
                      </span>
                      <span class="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                        Interactive
                      </span>
                    </div>
                  </div>
                  <div class="flex gap-4">
                    <a
                      href="https://github.com/ShariarSheikh/chatbot-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span>Code</span>
                    </a>
                    <a
                      href="https://chatbot-shariar.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-emerald-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
