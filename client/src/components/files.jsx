import React from "react";

const files = () => {
  return (
    <div>
      <section
        id="service"
        class="relative w-full py-28 overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e1030]"
      >
        <div class="absolute inset-0 overflow-hidden pointer-events-none">
          <div class="absolute top-20 right-20 w-40 h-40 rounded-full bg-purple-500 blur-[80px] opacity-20"></div>
          <div class="absolute bottom-20 left-20 w-60 h-60 rounded-full bg-blue-500 blur-[100px] opacity-20"></div>
          <div
            class="absolute top-1/3 left-1/4 w-32 h-32 rounded-full border-2 border-purple-400/20 decorative-circle"
            style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px) rotate(294.588deg);"
          ></div>
          <div
            class="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full border-2 border-blue-400/20 decorative-circle"
            style="translate: none; rotate: none; scale: none; transform: translate3d(0px, 0px, 0px) rotate(91.6704deg);"
          ></div>
          <div class="absolute inset-0 bg-[url('/images/noise.png')] opacity-5 mix-blend-overlay"></div>
        </div>
        <div class="container mx-auto px-6 max-w-6xl relative z-10">
          <div class="mb-20 overflow-hidden">
            <h1
              class="section-title text-6xl md:text-8xl font-bold tracking-tight text-center"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                S
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                E
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                R
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                V
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                I
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                C
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                E
              </span>
              <span
                class="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400"
                style="translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);"
              >
                S
              </span>
            </h1>
            <div class="title-divider mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-6"></div>
          </div>
          <div class="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-28">
            <div
              class="service-card group relative bg-indigo-900/20 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 ${service.color}"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">
                  Web Development
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Custom, responsive websites built with modern technologies
                  like Next.js, React, and TypeScript.
                </p>
              </div>
            </div>
            <div
              class="service-card group relative bg-blue-900/20 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 ${service.color}"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="3"
                      width="20"
                      height="14"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">UI/UX Design</h3>
                <p class="text-gray-300 leading-relaxed">
                  Beautiful, intuitive interfaces designed with user experience
                  as the top priority.
                </p>
              </div>
            </div>
            <div
              class="service-card group relative bg-teal-900/20 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 ${service.color}"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-emerald-500 to-teal-600 text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="5"
                      y="2"
                      width="14"
                      height="20"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">Mobile Apps</h3>
                <p class="text-gray-300 leading-relaxed">
                  Cross-platform mobile applications that work seamlessly on iOS
                  and Android.
                </p>
              </div>
            </div>
            <div
              class="service-card group relative bg-orange-900/20 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 ${service.color}"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-amber-500 to-orange-600 text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <rect
                      x="2"
                      y="14"
                      width="20"
                      height="8"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">
                  Backend Services
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  Robust API development, database design, and server
                  infrastructure.
                </p>
              </div>
            </div>
            <div
              class="service-card group relative bg-rose-900/20 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 ${service.color}"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-600 text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">
                  Full-Stack Solutions
                </h3>
                <p class="text-gray-300 leading-relaxed">
                  End-to-end development from concept to deployment and
                  maintenance.
                </p>
              </div>
            </div>
            <div
              class="service-card group relative bg-fuchsia-900/20 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
            >
              <div class="absolute -inset-1 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-20 blur transition-opacity duration-300 ${service.color}"></div>
              <div class="relative z-10">
                <div class="w-14 h-14 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="text-3xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-3">Consulting</h3>
                <p class="text-gray-300 leading-relaxed">
                  Expert advice on architecture, performance optimization, and
                  best practices.
                </p>
              </div>
            </div>
          </div>
          <div class="relative">
            <h2 class="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              My Working Process
            </h2>
            <div class="relative">
              <div class="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full"></div>
              <div class="space-y-12">
                <div
                  class="process-step relative pl-10 md:pl-0 md:w-1/2 md:mr-auto md:pr-10"
                  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-purple-500 -ml-2 z-10"></div>
                  <div class="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-indigo-900/20">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="w-3 h-3 rounded-full bg-purple-500"></span>
                      <h3 class="text-xl font-semibold text-white">
                        Discovery
                      </h3>
                    </div>
                    <p class="text-gray-300">
                      We discuss your project goals and requirements to
                      understand your vision.
                    </p>
                  </div>
                </div>
                <div
                  class="process-step relative pl-10 md:pl-0 md:w-1/2 md:ml-auto md:pl-10"
                  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 -ml-2 z-10"></div>
                  <div class="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-purple-900/20">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="w-3 h-3 rounded-full bg-blue-500"></span>
                      <h3 class="text-xl font-semibold text-white">Planning</h3>
                    </div>
                    <p class="text-gray-300">
                      I create a detailed project roadmap with milestones and
                      deliverables.
                    </p>
                  </div>
                </div>
                <div
                  class="process-step relative pl-10 md:pl-0 md:w-1/2 md:mr-auto md:pr-10"
                  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-teal-500 -ml-2 z-10"></div>
                  <div class="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-indigo-900/20">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="w-3 h-3 rounded-full bg-teal-500"></span>
                      <h3 class="text-xl font-semibold text-white">Design</h3>
                    </div>
                    <p class="text-gray-300">
                      Wireframes and prototypes are developed for your review
                      and feedback.
                    </p>
                  </div>
                </div>
                <div
                  class="process-step relative pl-10 md:pl-0 md:w-1/2 md:ml-auto md:pl-10"
                  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-amber-500 -ml-2 z-10"></div>
                  <div class="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-purple-900/20">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                      <h3 class="text-xl font-semibold text-white">
                        Development
                      </h3>
                    </div>
                    <p class="text-gray-300">
                      Your project comes to life with clean, maintainable code.
                    </p>
                  </div>
                </div>
                <div
                  class="process-step relative pl-10 md:pl-0 md:w-1/2 md:mr-auto md:pr-10"
                  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-pink-500 -ml-2 z-10"></div>
                  <div class="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-indigo-900/20">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="w-3 h-3 rounded-full bg-pink-500"></span>
                      <h3 class="text-xl font-semibold text-white">Testing</h3>
                    </div>
                    <p class="text-gray-300">
                      Rigorous testing ensures everything works perfectly across
                      devices.
                    </p>
                  </div>
                </div>
                <div
                  class="process-step relative pl-10 md:pl-0 md:w-1/2 md:ml-auto md:pl-10"
                  style="translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;"
                >
                  <div class="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-500 -ml-2 z-10"></div>
                  <div class="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-purple-900/20">
                    <div class="flex items-center gap-3 mb-3">
                      <span class="w-3 h-3 rounded-full bg-indigo-500"></span>
                      <h3 class="text-xl font-semibold text-white">Launch</h3>
                    </div>
                    <p class="text-gray-300">
                      Your project goes live with ongoing support and
                      maintenance available.
                    </p>
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

export default files;
