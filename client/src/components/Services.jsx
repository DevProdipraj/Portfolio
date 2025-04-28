import React, { useRef }  from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);


import {
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaServer,
  FaLayerGroup,
  FaUserTie,
} from "react-icons/fa";

const Services = () => {



  let timeLine = gsap.timeline();
  const sectionHeader = useRef()
  const servicesCards = useRef()
 useGSAP(()=> {
  timeLine.from(sectionHeader.current.querySelectorAll("span"), {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.1,
    delay: 0.5,
    scrollTrigger: {
      trigger: sectionHeader.current,
      scroller: "body",
      start: "top 50%",
      end: "top 50%",
      scrub: 2,
    },
    
  });
  timeLine.from(servicesCards.current.querySelectorAll("div"), {
    y: 100,
    opacity: 0,
    duration: 2,
    stagger: 0.1,
    delay: 0.5,
    scrollTrigger: {
      trigger: servicesCards.current,
      scroller: "body",
      // markers: true,
      start: "top 20%",
      end: "top 20%",
      scrub: 2,
    },
    
  });


 });




  return (
    <div id="services" className="bg-gradient-to-br from-[#0a0e1a] via-[#0f172a] to-[#1e1030]   py-12 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-y-hidden ">
       {/* services title  */} 
       <div className="mb-20 overflow-hidden">
          <h1 ref={sectionHeader}
            className=" text-center "
            
          >
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                S
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                E
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                R
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                V
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                I
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                C
              </span>
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 work-title text-4xl md:text-8xl font-bold tracking-tight">
                E
              </span>
          </h1>
          <div className="title-divider mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-6"></div>
        </div>
      <div ref={servicesCards} className="container lg:px-26 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Web Development */}
        <div className="bg-gradient-to-br from-[#1e1e9e] to-[#0f172a] rounded-2xl px-8 py-10 border border-white/10 text-white shadow-md">
          <div className="bg-purple-600 p-3 inline-block rounded-lg mb-4">
            <FaCode className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-sm text-gray-300">
          Crafting high-performance, scalable websites using modern technologies like Next.js, React, Node.js, and MongoDB, with a strong focus on responsiveness, security, and best practices.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#113b76] rounded-2xl px-8 py-10 border border-white/10 text-white shadow-md">
          <div className="bg-cyan-500 p-3 inline-block rounded-lg mb-4">
            <FaPalette className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Web Design</h3>
          <p className="text-sm text-gray-300">
          Designing sleek, user-centric interfaces with technologies like HTML5, CSS3, Tailwind CSS, and Figma, ensuring seamless user experience, accessibility, and modern aesthetics.
          </p>
        </div>

        {/* Mobile Apps */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#0c3f3c] rounded-2xl px-8 py-10 border border-white/10 text-white shadow-md">
          <div className="bg-green-500 p-3 inline-block rounded-lg mb-4">
            <FaMobileAlt className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
          <p className="text-sm text-gray-300">
            Cross-platform mobile applications that work seamlessly on iOS and
            Android.
          </p>
        </div>

        {/* Backend Services */}
        <div className="bg-gradient-to-br from-[#2d0e0e] to-[#0f172a] rounded-2xl px-8 py-10 border border-white/10 text-white shadow-md">
          <div className="bg-orange-500 p-3 inline-block rounded-lg mb-4">
            <FaServer className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Backend Services</h3>
          <p className="text-sm text-gray-300">
            Robust API development, database design, and server infrastructure.
          </p>
        </div>

        {/* Full-Stack Solutions */}
        <div className="bg-gradient-to-br from-[#2e0c1b] to-[#0f172a] rounded-2xl px-8 py-10 border border-white/10 text-white shadow-md">
          <div className="bg-pink-500 p-3 inline-block rounded-lg mb-4">
            <FaLayerGroup className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Full-Stack Solutions</h3>
          <p className="text-sm text-gray-300">
            End-to-end development from concept to deployment and maintenance.
          </p>
        </div>

        {/* Consulting */}
        <div className="bg-gradient-to-br from-[#3a0c59] to-[#0f172a] rounded-2xl px-8 py-10 border border-white/10 text-white shadow-md">
          <div className="bg-purple-500 p-3 inline-block rounded-lg mb-4">
            <FaUserTie className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Web Hosting</h3>
          <p className="text-sm text-gray-300">
            Expert advice on architecture, performance optimization, and best
            practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
