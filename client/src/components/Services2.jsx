import { FaCode, FaPalette, FaMobileAlt, FaServer, FaLayerGroup, FaUserTie } from 'react-icons/fa';

const Services = () => {
  return (
    <div className="bg-[#0f172a] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Web Development */}
        <div className="bg-gradient-to-br from-[#1e1e9e] to-[#0f172a] rounded-2xl p-6 text-white shadow-md">
          <div className="bg-purple-600 p-3 inline-block rounded-lg mb-4">
            <FaCode className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Web Development</h3>
          <p className="text-sm text-gray-300">
            Custom, responsive websites built with modern technologies like Next.js, React, and TypeScript.
          </p>
        </div>

        {/* UI/UX Design */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#113b76] rounded-2xl p-6 text-white shadow-md">
          <div className="bg-cyan-500 p-3 inline-block rounded-lg mb-4">
            <FaPalette className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
          <p className="text-sm text-gray-300">
            Beautiful, intuitive interfaces designed with user experience as the top priority.
          </p>
        </div>

        {/* Mobile Apps */}
        <div className="bg-gradient-to-br from-[#0f172a] to-[#0c3f3c] rounded-2xl p-6 text-white shadow-md">
          <div className="bg-green-500 p-3 inline-block rounded-lg mb-4">
            <FaMobileAlt className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Mobile Apps</h3>
          <p className="text-sm text-gray-300">
            Cross-platform mobile applications that work seamlessly on iOS and Android.
          </p>
        </div>

        {/* Backend Services */}
        <div className="bg-gradient-to-br from-[#2d0e0e] to-[#0f172a] rounded-2xl p-6 text-white shadow-md">
          <div className="bg-orange-500 p-3 inline-block rounded-lg mb-4">
            <FaServer className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Backend Services</h3>
          <p className="text-sm text-gray-300">
            Robust API development, database design, and server infrastructure.
          </p>
        </div>

        {/* Full-Stack Solutions */}
        <div className="bg-gradient-to-br from-[#2e0c1b] to-[#0f172a] rounded-2xl p-6 text-white shadow-md">
          <div className="bg-pink-500 p-3 inline-block rounded-lg mb-4">
            <FaLayerGroup className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Full-Stack Solutions</h3>
          <p className="text-sm text-gray-300">
            End-to-end development from concept to deployment and maintenance.
          </p>
        </div>

        {/* Consulting */}
        <div className="bg-gradient-to-br from-[#3a0c59] to-[#0f172a] rounded-2xl p-6 text-white shadow-md">
          <div className="bg-purple-500 p-3 inline-block rounded-lg mb-4">
            <FaUserTie className="text-2xl" />
          </div>
          <h3 className="text-xl font-bold mb-2">Consulting</h3>
          <p className="text-sm text-gray-300">
            Expert advice on architecture, performance optimization, and best practices.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Services;
