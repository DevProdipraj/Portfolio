import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaServer,
  FaCubes,
  FaUserTie,
} from "react-icons/fa";

const services = [
  {
    title: "Web Development",
    description:
      "Custom, responsive websites built with modern technologies like Next.js, React, and TypeScript.",
    icon: <FaCode className="text-3xl text-white" />,
    color: "from-[#5B5FE9] to-[#2F305B]",
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful, intuitive interfaces designed with user experience as the top priority.",
    icon: <FaPaintBrush className="text-3xl text-white" />,
    color: "from-[#15C3D3] to-[#0F172A]",
  },
  {
    title: "Mobile Apps",
    description:
      "Cross-platform mobile applications that work seamlessly on iOS and Android.",
    icon: <FaMobileAlt className="text-3xl text-white" />,
    color: "from-[#14B8A6] to-[#0F172A]",
  },
  {
    title: "Backend Services",
    description:
      "Robust API development, database design, and server infrastructure.",
    icon: <FaServer className="text-3xl text-white" />,
    color: "from-[#F97316] to-[#0F172A]",
  },
  {
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from concept to deployment and maintenance.",
    icon: <FaCubes className="text-3xl text-white" />,
    color: "from-[#EC4899] to-[#0F172A]",
  },
  {
    title: "Consulting",
    description:
      "Expert advice on architecture, performance optimization, and best practices.",
    icon: <FaUserTie className="text-3xl text-white" />,
    color: "from-[#A855F7] to-[#0F172A]",
  },
];

const Services = () => {
  return (
    <>
      {/* services header  */}
      <div className="mb-20 overflow-hidden">
        <h1 className="section-title text-6xl md:text-8xl font-bold tracking-tight text-center translate: none; rotate: none; scale: none; transform: translate(0px, 0px); opacity: 1;">
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            S
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            E
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            R
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            V
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            I
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            C
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            E
          </span>
          <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 translate: none; rotate: none; scale: none; opacity: 1; transform: translate(0px, 0px);">
            S
          </span>
        </h1>
        <div className="title-divider mx-auto w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-6"></div>
      </div>
      {/* service body  */}
      <section className="  text-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 bg-gradient-to-br ${service.color} transition-transform transform hover:scale-105 border border-white/10`}
            >
              <div className="bg-white/10 p-3 rounded-md inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-white/80">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
