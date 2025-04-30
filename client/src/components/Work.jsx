
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

import project1 from "../assets/projects/Quickpick.png";
import project2 from "../assets/projects/bdFex.png";
import project3 from "../assets/projects/imageGanarator.png";
import project4 from "../assets/projects/surbojuya.png";
import project5 from "../assets/projects/techIllution.png";
import project6 from "../assets/projects/waetherApp.png";
import project7 from "../assets/projects/watermarkPr.png";
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
    projectLink: "https://devprodipraj.github.io/img_generator/",
    projectRepo: "https://github.com/DevProdipraj/img_generator",
  },
  project4: {
    projectImg: project4,
    projectLink: "https://devprodipraj.github.io/Sorbujoya/",
    projectRepo: "https://github.com/DevProdipraj/Sorbujoya",
  },
  project5: {
    projectImg: project5,
    projectLink: "https://devprodipraj.github.io/techillusionBD/",
    projectRepo: "https://github.com/DevProdipraj/techillusionBD",
  },
  project6: {
    projectImg: project6,
    projectLink: "https://devprodipraj.github.io/wather-app/",
    projectRepo: "https://github.com/DevProdipraj/wather-app",
  },
  project7: {
    projectImg: project7,
    projectLink: "https://devprodipraj.github.io/WatermarkPR/",
    projectRepo: "https://github.com/DevProdipraj/WatermarkPR",
  },
};

const Work = () => {
  const sectionHeader = useRef();
  const cardRefs = useRef([]);
  const gitHubLink = useRef();

  useGSAP(() => {
    gsap.from(sectionHeader.current.querySelectorAll("span"), {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: sectionHeader.current,
        start: "top 50%",
        end: "top 50%",
        // markers: true,
        scrub: 2,
      },
    });

    cardRefs.current.forEach((ref) => {
      gsap.from(ref, {
        y: 100,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        scrollTrigger: {
          trigger: ref,
          start: "top 50%",
          scrub: 2,
        },
      });
    });
    gsap.from(gitHubLink.current , {
      y: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.5,
      scrollTrigger: {
        trigger: gitHubLink.current,
        start: "top 50%",
        end: "top 50%",
        // markers: true,
        scrub: 2,
      },
    });
  }, []);

  return (
    <div>
      <section
        id="work"
        className="relative w-full py-28 overflow-hidden bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e1030]"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-indigo-900/20 blur-[100px]"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-cyan-900/20 blur-[120px]"></div>
        </div>

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="mb-20 overflow-hidden">
            <h1 ref={sectionHeader}>
              {"WORKS".split("").map((letter, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 text-4xl md:text-8xl font-bold tracking-tight"
                >
                  {letter}
                </span>
              ))}
            </h1>
            <div className="w-24 h-1 mt-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>

          <div className="projects-container space-y-16">
            {[
              {
                refIndex: 0,
                projectKey: "project1",
                title: "QuickPick",
                desc: "A simple and efficient tool to track your income, manage expenses, and monitor savings.",
              },
              {
                refIndex: 1,
                projectKey: "project2",
                title: "BDfex",
                desc: "A budget dashboard for income and expenses built with modern UI design.",
              },
              {
                refIndex: 2,
                projectKey: "project3",
                title: "Image Generator",
                desc: "Generate AI-based images using keywords, powered by open APIs.",
              },
              {
                refIndex: 3,
                projectKey: "project4",
                title: "Sorbojoya",
                desc: "A beautifully crafted cultural website showcasing Bengali heritage.",
              },
              {
                refIndex: 4,
                projectKey: "project5",
                title: "TechIllusion",
                desc: "A startup showcase website built for tech communities and portfolios.",
              },
              {
                refIndex: 5,
                projectKey: "project6",
                title: "Weather App",
                desc: "A simple weather forecast web app using OpenWeatherMap API.",
              },
              {
                refIndex: 6,
                projectKey: "project7",
                title: "Watermark PR",
                desc: "Easily add watermarks to your images before sharing them online.",
              },
            ].map(({ refIndex, projectKey, title, desc }) => (
              <div
                key={refIndex}
                ref={(el) => (cardRefs.current[refIndex] = el)}
              >
                {renderProjectCard(project[projectKey], title, desc)}
              </div>
            ))}
          </div>


          {/* github link */}
          <div ref={gitHubLink} className="">
              <div className="mt-20 lg:mt-40 text-center">
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
      </section>
    </div>
  );
};

const renderProjectCard = (projectItem, title, description) => (
  <div className="project-card group relative bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-lg p-4 md:p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 bg-orange-900/20">
    <div className="relative z-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="w-12 h-12 rounded-md mb-4 bg-gradient-to-r from-amber-500 to-orange-600 px-1 py-1">
            <a target="_blank" href={projectItem.projectLink}>
              <img className="z-20" src={financeIcon} alt="icon" />
            </a>
          </div>
          <div className="lg:flex justify-center">
            <div className="flex flex-col items-start">
              <h2 className="text-2xl md:text-xl font-bold text-white mb-2">
                {title}
              </h2>
              <p className="text-md text-gray-300 mb-4 tracking-tight leading-tight">
                {description}
              </p>
              <div className="hidden md:block">
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Finance", "UI/UX", "React", "Frontend"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-[600px] md:mt-4 lg:mt-0">
              <a href={projectItem.projectLink} target="_blank">
                <img
                  className="w-full object-cover shadow-2xl cursor-pointer rounded-xl transition-all duration-300 hover:scale-150 lg:hover:mt-[-46px]"
                  src={projectItem.projectImg}
                  alt={title}
                />
              </a>
            </div>
          </div>
          <div className="md:hidden mt-4">
            <div className="flex flex-wrap gap-2">
              {["Finance", "UI/UX", "React", "Frontend"].map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm rounded-full bg-white/5 text-gray-300 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <a
            target="_blank"
            href={projectItem.projectRepo}
            className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
          >
            Code
          </a>
          <a
            href={projectItem.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1 md:px-6 md:py-3 rounded-lg bg-gradient-to-r from-amber-500 to-orange-600 hover:shadow-lg hover:shadow-purple-500/30 transition-all"
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
  
);

export default Work;














