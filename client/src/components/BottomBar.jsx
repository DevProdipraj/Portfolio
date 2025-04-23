import React from "react";

const BottomBar = () => {
  return (
    <div className="fixed bottom-[40px] w-full px-4 z-20">
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="grid grid-cols-12 gap-0 rounded-xl overflow-hidden shadow-2xl">
          <div className="col-span-9 bg-[#0a0a1a] p-4 flex items-center justify-between">
            <div className="flex-1 flex items-center">
              {/* Desktop Menu */}
              <div className="hidden md:flex">
                
                <ul className="flex items-center text-white gap-x-6">
                <div>
                  <img
                    className=" w-2/3 md:w-3/3  h-2/3"
                    src="./Logo.svg"
                    alt="Brand Icon"
                  />
                </div>
                  <a href="#work" className="cursor-pointer text-[#2563eb]">
                    Work
                  </a>
                  <a href="#service" className="cursor-pointer text-[#2563eb]">
                    Service
                  </a>
                  <a href="#about" className="cursor-pointer text-[#2563eb]">
                    About
                  </a>
                </ul>
              </div>
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ShariarSheikh"
                  className="cursor-pointer px-4 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-purple-400/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-xl text-purple-400">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </div>
                    <div className="text-sm text-white/80">GitHub</div>
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/sheikhshariar"
                  className="cursor-pointer px-4 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 hover:border-purple-400/30 transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="text-xl text-blue-300">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        height="1em"
                        width="1em"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </div>
                    <div className="text-sm text-white/80">LinkedIn</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href="#hire-me"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg text-white font-medium transition-all"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-lg"
                  height="1em"
                  width="1em"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
                <span>Hire Me</span>
              </a>
            </div>

            <button className="text-gray-400 hover:text-white transition-all p-2">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-xl"
                height="1em"
                width="1em"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBar;
