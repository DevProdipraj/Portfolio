import React from "react";
import { IoBagAddOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const HeroArea = () => {
  return (
    <div className="container  pb-10 lg:pb-32 flex items-top justify-between lg:px-38 gap-x-2 lg:mt-32 pt-32">
      <div className="w-3/5">
        <h3 className="text-lg font-medium text-purple-400">
          Web Developer (MERN) || Bridging Frontend Beauty with Backend Power
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent my-6">
          Hi, I'm Prodip <br /> Rajbongshi
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-tight w-[80%]">
          I specialize in building{" "}
          <span className="text-purple-400 font-bold">
            high-performance web applications
          </span>{" "}
          that address real-world business challenges. With over 3 years of
          experience, I deliver production-ready solutions using modern
          technologies and best development practices...
        </p>

        <div className="flex flex-wrap gap-3 justify-center lg:justify-start my-10 w-[80%]">
          {[
            "Next.js",
            "Javascript",
            "React.js",
            "Node.js",
            "Tailwind",
            "Bootstrap",
            "Express.js",
            "MongoDB",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
              title="Expert proficiency"
            >
              {skill}
              <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
            </span>
          ))}
        </div>

        <div className="flex items-center justify-start gap-x-6">
          <button className="flex items-center justify-center gap-x-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all text-white">
            <IoBagAddOutline />
            <span>Hire me</span>
          </button>
          <button className="flex items-center gap-x-2 px-6 py-3.5 border border-white/20 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-all">
            <LuDownload />
            <span>Download Resume</span>
          </button>
        </div>

        <p className="text-sm text-gray-400 pt-4 text-center sm:text-left mt-2">
          Available for freelance projects and full-time opportunities
        </p>
      </div>

      <div className="w-2/5">
        <div className="relative flex items-center justify-center bg-[#1C2232] rounded-xl cursor-pointer hover:shadow-2xl transition-all duration-300">
          <img
            src="/ProdipRajbongshi.png"
            alt="Profile Picture"
            className="w-full object-cover"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 95%",
              maskImage:
                "linear-gradient(to bottom, black 40%, transparent 100%)",
              maskRepeat: "no-repeat",
              maskSize: "100% 100%",
            }}
          />

          <div className="absolute z-20 bottom-[10%] flex items-center justify-center w-full fade-delay">
            <div className="px-6 py-3 bg-black/50 backdrop-blur-md rounded-full border border-white/20 text-white font-semibold hover:bg-black/70 cursor-pointer">
              <span>3+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
