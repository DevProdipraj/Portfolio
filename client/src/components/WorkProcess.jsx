import React from "react";
import { useRef }  from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const WorkProcess = () => {




  let timeLine = gsap.timeline();
  const workProcessCards = useRef()

 useGSAP(()=> {
  // timeLine.from(workProcessCards.current.querySelectorAll("div"), {
  //   y: 100,
  //   opacity: 0,
  //   duration: 0.5,
  //   stagger: 0.1,
  //   delay: 0.5,
  //   scrollTrigger: {
  //     trigger: workProcessCards.current,
  //     scroller: "body",
  //     markers: true,
  //     start: "top 20%",
  //     end: "top 20%",
  //     scrub: 2,
  //   },
    
  // });
  

 });










  return (
    <div className="container lg:px-20">
    <div className="px-4 sm:px-6 lg:px-20 xl:px-40 py-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
        My Working Process
      </h2>
      <div   className="relative">
        {/* Vertical timeline line */}
        <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full transform sm:-translate-x-1/2"></div>

        <div className="space-y-16">
          {/* Step - Discovery */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-start sm:w-1/2 sm:pr-10 sm:ml-0 sm:mr-auto pl-10 sm:pl-0">
            <div className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-purple-500 -ml-2 z-10 transform sm:-translate-x-1/2"></div>
            <div className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-indigo-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-purple-500"></span>
                <h3 className="text-xl font-semibold text-white">Discovery</h3>
              </div>
              <p className="text-gray-300">
                We discuss your project goals and requirements to understand
                your vision.
              </p>
            </div>
          </div>

          {/* Step - Planning */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-end sm:w-1/2 sm:pl-10 sm:ml-auto pl-10 sm:pr-0">
            <div className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 -ml-2 z-10 transform sm:-translate-x-1/2"></div>
            <div className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-purple-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <h3 className="text-xl font-semibold text-white">Planning</h3>
              </div>
              <p className="text-gray-300">
                I create a detailed project roadmap with milestones and
                deliverables.
              </p>
            </div>
          </div>

          {/* Step - Design */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-start sm:w-1/2 sm:pr-10 sm:ml-0 sm:mr-auto pl-10 sm:pl-0">
            <div className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-teal-500 -ml-2 z-10 transform sm:-translate-x-1/2"></div>
            <div className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-indigo-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                <h3 className="text-xl font-semibold text-white">Design</h3>
              </div>
              <p className="text-gray-300">
                Wireframes and prototypes are developed for your review and
                feedback.
              </p>
            </div>
          </div>

          {/* Step - Development */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-end sm:w-1/2 sm:pl-10 sm:ml-auto pl-10 sm:pr-0">
            <div className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-amber-500 -ml-2 z-10 transform sm:-translate-x-1/2"></div>
            <div className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-purple-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <h3 className="text-xl font-semibold text-white">
                  Development
                </h3>
              </div>
              <p className="text-gray-300">
                Your project comes to life with clean, maintainable code.
              </p>
            </div>
          </div>

          {/* Step - Testing */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-start sm:w-1/2 sm:pr-10 sm:ml-0 sm:mr-auto pl-10 sm:pl-0">
            <div className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-pink-500 -ml-2 z-10 transform sm:-translate-x-1/2"></div>
            <div className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-indigo-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-pink-500"></span>
                <h3 className="text-xl font-semibold text-white">Testing</h3>
              </div>
              <p className="text-gray-300">
                Rigorous testing ensures everything works perfectly across
                devices.
              </p>
            </div>
          </div>

          {/* Step - Launch */}
          <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-end sm:w-1/2 sm:pl-10 sm:ml-auto pl-10 sm:pr-0">
            <div className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full bg-indigo-500 -ml-2 z-10 transform sm:-translate-x-1/2"></div>
            <div className="p-6 rounded-xl backdrop-blur-lg border border-white/10 bg-purple-900/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 rounded-full bg-indigo-500"></span>
                <h3 className="text-xl font-semibold text-white">Launch</h3>
              </div>
              <p className="text-gray-300">
                Your project goes live with ongoing support and maintenance
                available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default WorkProcess;
