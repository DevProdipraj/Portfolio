import React from "react";
import financeManagemnet from "../assets/projects/FinanceManagementSyatem.jpg";
import financeIcon from "../assets/projects/FinanceIcon.png";


const Work = () => {
  return (
    <div>
      <section
        id="work"
        className="relative w-full py-28 overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e1030]"
      >
        {/* <!-- Background Blurs --> */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-900/20 blur-[120px]"></div>
        </div>

        {/* <!-- Content Container --> */}
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          {/* <!-- Section Title --> */}
          <div className="mb-20 overflow-hidden">
            <h1 className="work-title text-6xl md:text-8xl font-bold tracking-tight">
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                W
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                O
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                R
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                K
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                S
              </span>
            </h1>
            <div className="w-24 h-1 mt-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          {/* <!-- Projects Container --> */}
          <div className="projects-container space-y-16">
            {/* Project 1  */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4  bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer  transition-all duration-300">
                      <a
                        target="_blank"
                        href="https://devprodipraj.github.io/Personal_Finance_Management_System/"
                      >
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="flex   justify-center">
                      {/* project information  */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-3xl md:text-xl font-bold text-white mb-2">
                          Personal Finance Management System
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight  leading-tight">
                          A simple and efficient tool to track your income,
                          manage expenses, and monitor savings
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Finance Management
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Income
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Saving
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Expenses
                          </span>
                        </div>
                      </div>

                      {/* project image  */}
                      <div className="lg:w-[600px]">
                       <a href="https://devprodipraj.github.io/Personal_Finance_Management_System/" target="_blank">
                        <img  className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px] "
                          src={financeManagemnet}
                          alt="Project Image" />
                       </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a
                        target="_blank"
                        href="https://github.com/DevProdipraj/Personal_Finance_Management_System"
                      >
                        Code
                      </a>
                    </div>
                    <a
                      href="https://devprodipraj.github.io/Personal_Finance_Management_System/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
            {/* Project 2  */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4  bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer  transition-all duration-300">
                      <a
                        target="_blank"
                        href="https://devprodipraj.github.io/Personal_Finance_Management_System/"
                      >
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="flex   justify-center">
                      {/* project information  */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-3xl md:text-xl font-bold text-white mb-2">
                          Personal Finance Management System
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight  leading-tight">
                          A simple and efficient tool to track your income,
                          manage expenses, and monitor savings
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Finance Management
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Income
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Saving
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Expenses
                          </span>
                        </div>
                      </div>

                      {/* project image  */}
                      <div className="lg:w-[600px]">
                       <a href="https://devprodipraj.github.io/Personal_Finance_Management_System/" target="_blank">
                        <img  className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px] "
                          src={financeManagemnet}
                          alt="Project Image" />
                       </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a
                        target="_blank"
                        href="https://github.com/DevProdipraj/Personal_Finance_Management_System"
                      >
                        Code
                      </a>
                    </div>
                    <a
                      href="https://devprodipraj.github.io/Personal_Finance_Management_System/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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
            {/* Project 3  */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4  bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer  transition-all duration-300">
                      <a
                        target="_blank"
                        href="https://devprodipraj.github.io/Personal_Finance_Management_System/"
                      >
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="flex   justify-center">
                      {/* project information  */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-3xl md:text-xl font-bold text-white mb-2">
                          Personal Finance Management System
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight  leading-tight">
                          A simple and efficient tool to track your income,
                          manage expenses, and monitor savings
                        </p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Finance Management
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Income
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Saving
                          </span>
                          <span className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10">
                            Expenses
                          </span>
                        </div>
                      </div>

                      {/* project image  */}
                      <div className="lg:w-[600px]">
                       <a href="https://devprodipraj.github.io/Personal_Finance_Management_System/" target="_blank">
                        <img  className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px] "
                          src={financeManagemnet}
                          alt="Project Image" />
                       </a>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a
                        target="_blank"
                        href="https://github.com/DevProdipraj/Personal_Finance_Management_System"
                      >
                        Code
                      </a>
                    </div>
                    <a
                      href="https://devprodipraj.github.io/Personal_Finance_Management_System/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                    >
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
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

            {/* github link  */}
            <div className="">
              <div className="mt-20 text-center">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group"
                  href="https://github.com/DevProdipraj/"
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform group-hover:scale-110"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span className="text-white">
                    Explore All Projects on GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
