import React from "react";

const PrivacyInfo = () => {
  return (
    <div className="container  px-4 sm:px-6     lg:px-38 flex items-center justify-center mt-18 lg:mt-36 ">
      <div className="  bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 p-8    w-screen lg:mx-28">
        <h1 className="text-center text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
          Privacy Policy
        </h1>
        <div className="prose prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-300">
              This Privacy Policy explains how Prodip Rajbogshi ("we," "us," or "our")
              collects, uses, and protects any information you provide when
              using Prodip rajbongshi website. By using this website, you agree to the
              terms of this Privacy Policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-300">
              We do not collect personal data directly. However, if you contact
              us via the contact form, we may collect your name, email address,
              and message details.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-300">
              We use the collected information solely to respond to inquiries
              sent via the contact form.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              4. Sharing Your Information
            </h2>
            <p className="text-gray-300">
              We do not sell, trade, or rent your personal data to third
              parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Contact Methods
            </h2>
            <p className="text-gray-300">
              Users can contact us via the contact form or through social media
              links provided on the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Your Rights
            </h2>
            <p className="text-gray-300">
              Depending on your location, you may have rights regarding access,
              correction, or deletion of your personal data. Contact us at{" "}
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
              </a>{" "}
              to request any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Updates to This Policy
            </h2>
            <p className="text-gray-300">
              We may update this policy from time to time. Please review this
              page periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyInfo;


