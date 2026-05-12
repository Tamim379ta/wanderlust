import React from "react";
import { FiShield, FiMap, FiHeadphones } from "react-icons/fi";

const WhyChooseSection = () => {
  return (
    <section className="bg-[#edf7fa] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-light text-black">
            Why Choose Wanderlust
          </h2>
          <p className="text-gray-500 mt-3 text-sm md:text-base">
            Your trusted partner for exceptional travel experiences
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition duration-300">
            <FiShield className="text-5xl text-sky-500 mb-6" />

            <h3 className="text-3xl font-light text-black mb-4">
              Safe & Secure
            </h3>

            <p className="text-gray-500 leading-7">
              Your safety is our priority with comprehensive travel insurance
              and 24/7 support.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition duration-300">
            <FiMap className="text-5xl text-sky-500 mb-6" />

            <h3 className="text-3xl font-light text-black mb-4">
              Expert Guides
            </h3>

            <p className="text-gray-500 leading-7">
              Local experts who bring destinations to life with authentic
              cultural insights.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 shadow-sm hover:shadow-md transition duration-300">
            <FiHeadphones className="text-5xl text-sky-500 mb-6" />

            <h3 className="text-3xl font-light text-black mb-4">
              24/7 Support
            </h3>

            <p className="text-gray-500 leading-7">
              Round-the-clock customer service to assist you wherever your
              journey takes you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;