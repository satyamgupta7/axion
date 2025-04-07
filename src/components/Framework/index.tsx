import React from "react";

const Framework: React.FC = () => {
  return (
    <div className="mt-10 w-full max-w-[1400px] rounded-2xl bg-blue-400 p-8 shadow-md">
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
        {/* Left Side */}
        <div className="text-center md:w-1/2 md:text-left">
          <p className="text-3xl font-extrabold leading-tight text-blue-600">
            UNLOCK <br />
            <span className="text-5xl text-black">TOP 1%</span> <br />
            CAREER OPPORTUNITES
          </p>
        </div>

        {/* Right Side */}
        <div className="text-center md:w-1/2 md:text-left">
          <h2 className="mb-3 text-3xl font-bold text-gray-900">
            Future-Ready Framework to Fast-Track your career
          </h2>
          <p className="text-lg text-gray-600">
            Follow our proven framework to stand out and succeed in your career
            journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Framework;
