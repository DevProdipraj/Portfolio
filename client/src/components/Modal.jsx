import React, { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
import StartProjectForm from "./StartProjectForm";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="  flex items-center justify-center  text-white  ">
      <button
        onClick={openModal}
        className="flex items-center justify-center cursor-pointer gap-x-2 px-6 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all text-white"
      >
        <IoBagAddOutline />
        <span>Hire me</span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#000000cc] flex items-center justify-center z-50">
          {/* Modal Box */}
          <div className="bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <StartProjectForm />
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-400 hover:text-white text-lg cursor-pointer"
            >
              &times;
            </button>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2  bg-gradient-to-r from-blue-600 to-purple-600 rounded cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
