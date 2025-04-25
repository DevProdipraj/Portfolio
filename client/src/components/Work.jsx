import React from "react";
import project1 from "../assets/projects/Quickpick.png";
import project2 from "../assets/projects/bdFex.png";
import project3 from "../assets/projects/guza.png";
import project4 from "../assets/projects/imageGanarator.png";
import project5 from "../assets/projects/surbojuya.png";
import project6 from "../assets/projects/techIllution.png";
import project7 from "../assets/projects/waetherApp.png";
import project8 from "../assets/projects/watermarkPr.png";
import project9 from "../assets/projects/photomAlu.png";
import project10 from "../assets/projects/FinanceManagementSyatem.jpg";
import project11 from "../assets/projects/agency.png";
import financeIcon from "../assets/projects/FinanceIcon.png";

const project = {
  project1: {
    projectImg: project1,
    projectLink: "https://quick-pick-eight.vercel.app/",
    projectRepo: "https://github.com/DevProdipraj/QuickPick",
  },
  project2: {
    projectImg: project2,
    projectLink: "https://devprodipraj.github.io/BDfex/",
    projectRepo: "https://github.com/DevProdipraj/BDfex",
  },
  project3: {
    projectImg: project3,
    projectLink: "https://devprodipraj.github.io/GuzaShop/",
    projectRepo: "https://github.com/DevProdipraj/GuzaShop",
  },
  project4: {
    projectImg: project4,
    projectLink: "https://devprodipraj.github.io/img_generator/",
    projectRepo: "https://github.com/DevProdipraj/img_generator",
  },
  project5: {
    projectImg: project5,
    projectLink: "https://devprodipraj.github.io/Sorbujoya/",
    projectRepo: "https://github.com/DevProdipraj/Sorbujoya",
  },
  project6: {
    projectImg: project6,
    projectLink: "https://devprodipraj.github.io/techillusionBD/",
    projectRepo: "https://github.com/DevProdipraj/techillusionBD",
  },
  project7: {
    projectImg: project7,
    projectLink: "https://devprodipraj.github.io/wather-app/",
    projectRepo: "https://github.com/DevProdipraj/wather-app",
  },
  project8: {
    projectImg: project8,
    projectLink: "https://devprodipraj.github.io/WatermarkPR/",
    projectRepo: "https://github.com/DevProdipraj/WatermarkPR",
  },
  project9: {
    projectImg: project9,
    projectLink: "https://devprodipraj.github.io/ProthomAluClone/",
    projectRepo: "https://github.com/DevProdipraj/ProthomAluClone",
  },
  project10: {
    projectImg: project10,
    projectLink: "https://devprodipraj.github.io/Personal_Finance_Management_System/",
    projectRepo: "https://github.com/DevProdipraj/creativeAgency",
  },
  project11: {
    projectImg: project11,
    projectLink: "https://devprodipraj.github.io/creativeAgency/",
    projectRepo: "https://devprodipraj.github.io/creativeAgency/",
  },
};

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
            <h1 className="work-title text-4xl md:text-8xl font-bold tracking-tight">
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
            {/* Project 1 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project1.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          QuickPick
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project1.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project1.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project1.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project1.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 2 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project2.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          BDfex
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project2.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project2.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project2.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project2.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 3 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project3.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          GuzaShop
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project3.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project3.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project3.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project3.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 4 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project4.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          Image Generator
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project4.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project4.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
                        <div className="flex flex-wrap gap-2(mt-4">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project4.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project4.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 5 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project5.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          Sorbujoya
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project5.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project5.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project5.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project5.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 6 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project6.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          TechIllusionBD
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project6.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project6.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project6.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project6.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 7 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project7.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          Weather App
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project7.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project7.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project7.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project7.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 8 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project8.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          WatermarkPR
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project8.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project8.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project8.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project8.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 9 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project9.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          ProthomAluClone
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project9.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project9.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project9.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project9.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 10 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project10.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          Personal Finance Management System
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project10.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project10.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project10.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project10.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
            {/* Project 11 */}
            <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1 cursor-pointer transition-all duration-300">
                      <a target="_blank" href={project.project11.projectLink}>
                        <img className="z-20" src={financeIcon} alt="" />
                      </a>
                    </div>
                    <div className="lg:flex justify-center">
                      {/* project information */}
                      <div className="flex items-top flex-col">
                        <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                          Creative Agency
                        </h2>
                        <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                          A simple and efficient tool to track your income, manage expenses, and monitor savings
                        </p>
                        <div className="hidden md:block">
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
                      </div>

                      {/* project image */}
                      <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
                        <a href={project.project11.projectLink} target="_blank">
                          <img
                            className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                            src={project.project11.projectImg}
                            alt="Project Image"
                          />
                        </a>
                      </div>
                      <div className="md:hidden">
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
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                      <a target="_blank" href={project.project11.projectRepo}>
                        Code
                      </a>
                    </div>
                    <a
                      href={project.project11.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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

            {/* github link */}
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
                  <span className="text-white">Explore All Projects on GitHub</span>
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