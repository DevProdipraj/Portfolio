import React from "react";
import { IoBagAddOutline } from "react-icons/io5";
import { LuDownload } from "react-icons/lu";

const HeroArea = () => {
  return (
    <div className="container  min-h-[85vh]   flex items-top justify-between lg:px-48   gap-x-2  lg:mt-36">
      <div className="w-3/5">
        <h3 className="text-lg font-medium text-purple-400">
          Web Developer (MERN) || Bridging Frontend Beauty with Backend Power
        </h3>
        <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent my-6">
          Hi, I'm Prodip Rajbongshi
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
          I specialize in building{" "}
          <span className="text-purple-400 font-bold">
            high-performance web applications
          </span>{" "}
          that address real-world business challenges. With over 3 years of
          experience, I deliver production-ready solutions using modern
          technologies and best development practices...
        </p>
        <div className="flex flex-wrap gap-3 justify-center lg:justify-start my-10">
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
            title="Expert proficiency"
          >
            Next.js
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
            title="Expert proficiency"
          >
            Javascript
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group"
            title="Expert proficiency"
          >
            React.js
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
            title="Advanced proficiency"
          >
            Node.js
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
            title="Expert proficiency"
          >
            Tailwind
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
            title="Intermediate proficiency"
          >
            Express.js
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
          <span
            className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-white/10 transition-all relative group cursor-pointer"
            title="Advanced proficiency"
          >
            MongoDB
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100"></span>
          </span>
        </div>
        <div className="flex items-center justify-start gap-x-6 ">
          <div className="flex items-center justify-center cursor-pointer px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all text-white">
            <IoBagAddOutline />
            <input type="submit" value=" Here me" />
          </div>
          <div className="flex items-center cursor-pointer gap-x-2  px-6 py-3.5 border border-white/20 text-gray-300 rounded-lg font-medium hover:bg-white/10 transition-all">
            <LuDownload />
            <input type="submit" value="Download Resume" />
          </div>
        </div>
        <p className="text-sm text-gray-400 pt-2 text-center sm:text-left mt-2">
          Available for freelance projects and full-time opportunities
        </p>
      </div>
      <div className="w-2/5">
        <div className="relative">
          <img
            src="/ProdipRajbongshi.png"
            alt="Profile Picture"
            className="w-full object-cover"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "100% 100%",
              maskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
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
