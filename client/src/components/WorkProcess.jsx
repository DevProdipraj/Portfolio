import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkProcess = () => {
  const workProcessCards = useRef(null);

  useEffect(() => {
    const elements = workProcessCards.current.querySelectorAll(".process-step");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "top 40%",
            toggleActions: "play reverse play reverse", // scroll up & down support
            // markers: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="container lg:px-20 py-6 lg:py-26">
      <div className="px-4 sm:px-6 lg:px-20 xl:px-40 py-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
          My Working Process
        </h2>
        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full transform sm:-translate-x-1/2"></div>

          <div ref={workProcessCards} className="space-y-16">
            {[
              {
                title: "Discovery",
                desc: "We discuss your project goals and requirements to understand your vision.",
                bg: "bg-indigo-900/20",
                color: "bg-purple-500",
                align: "left",
              },
              {
                title: "Planning",
                desc: "I create a detailed project roadmap with milestones and deliverables.",
                bg: "bg-purple-900/20",
                color: "bg-blue-500",
                align: "right",
              },
              {
                title: "Design",
                desc: "Wireframes and prototypes are developed for your review and feedback.",
                bg: "bg-indigo-900/20",
                color: "bg-teal-500",
                align: "left",
              },
              {
                title: "Development",
                desc: "Your project comes to life with clean, maintainable code.",
                bg: "bg-purple-900/20",
                color: "bg-amber-500",
                align: "right",
              },
              {
                title: "Testing",
                desc: "Rigorous testing ensures everything works perfectly across devices.",
                bg: "bg-indigo-900/20",
                color: "bg-pink-500",
                align: "left",
              },
              {
                title: "Launch",
                desc: "Your project goes live with ongoing support and maintenance available.",
                bg: "bg-purple-900/20",
                color: "bg-indigo-500",
                align: "right",
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className={`process-step relative flex flex-col sm:flex-row ${
                  step.align === "right"
                    ? "sm:items-start sm:justify-end sm:w-1/2 sm:pl-10 sm:ml-auto"
                    : "sm:items-start sm:justify-start sm:w-1/2 sm:pr-10 sm:ml-0 sm:mr-auto"
                } pl-10 sm:pl-0`}
              >
                <div
                  className="absolute left-5 sm:left-1/2 top-0 w-4 h-4 rounded-full -ml-2 z-10 transform sm:-translate-x-1/2"
                  style={{ backgroundColor: step.color.replace("bg-", "#") }}
                ></div>
                <div
                  className={`p-6 rounded-xl backdrop-blur-lg border border-white/10 ${step.bg}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`w-3 h-3 rounded-full ${step.color}`}></span>
                    <h3 className="text-xl font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-300">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
