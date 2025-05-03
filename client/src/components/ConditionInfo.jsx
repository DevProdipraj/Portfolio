import React from "react";

const ConditionInfo = () => {
  return (
    <div className="container  px-4 sm:px-6     lg:px-38 flex items-center justify-center mt-18 lg:mt-36 mb-5  ">
      <div className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8  lg:mx-28">
        <h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
          Terms & Conditions
        </h1>

        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-300">
              By accessing and using ShariarDev, you agree to comply with these Terms &amp; Conditions. If you do not agree, please do not use the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">2. Use of Website</h2>
            <p className="text-gray-300">
              This website is intended to showcase my projects, provide information about my services, and introduce myself.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">3. Restrictions on Use</h2>
            <p className="text-gray-300">
              There are no specific restrictions on using this website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Links</h2>
            <p className="text-gray-300">
              This website does not contain third-party links.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">5. Freelance Services</h2>
            <p className="text-gray-300">
              I offer freelance services, and any engagement will be based on separate agreements between the client and me.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
            <p className="text-gray-300">
              For questions, please contact me at{" "}
              <a
                className="text-blue-400 hover:underline flex items-center gap-1 w-fit"
                href="mailto:prodip.code@gmail.com"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                prodip.code@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ConditionInfo;
