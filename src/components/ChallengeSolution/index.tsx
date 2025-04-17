import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ChallengeSolution = () => {
  return (
    <section
      id="features"
      className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 px-8 py-12 md:px-16 md:py-16 lg:py-20"
    >
      <div className="container mx-auto">
        {/* Header Section */}
        <h2 className="mb-6 text-center text-4xl font-bold tracking-tight text-white md:text-5xl">
          The Challenge & Our Solution
        </h2>

        <div className="mt-8 flex flex-col items-center gap-8 md:flex-row">
          {/* Left Side - Challenge Card (Blue Gradient) */}
          <div className="relative w-full transform rounded-xl bg-gradient-to-r from-blue-600 to-indigo-800 p-12 text-white shadow-xl transition-all duration-500 hover:scale-105 md:w-1/2">
            <FaQuoteLeft className="absolute left-4 top-4 text-5xl text-white opacity-30" />
            <h3 className="text-3xl font-extrabold leading-snug md:text-4xl">
              You need experience to get a job.
              <br />
              But you need a job to get experience
            </h3>
            <FaQuoteRight className="absolute bottom-4 right-4 text-5xl text-white opacity-30" />
            <p className="mt-6 text-lg font-medium opacity-90 md:text-xl">
              This is the paradox that many aspiring professionals face in
              today&apos;s competitive job market.
            </p>
          </div>

          {/* Right Side - Solution Card (White) */}
          <div className="w-full transform rounded-xl border border-gray-300 bg-white p-10 shadow-xl transition-all duration-500 hover:scale-105 md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900">
              AxionGen&apos;s Real-Time Internship Program bridges the gap:
            </h3>
            <ul className="mt-6 space-y-3 text-lg text-gray-700">
              <li>
                ✅ <strong>Hands-on experience</strong> with real-world projects
              </li>
              <li>
                ✅ <strong>Work under Industry Experts</strong> for practical
                learning
              </li>
              <li>
                ✅ <strong>Placement-focused Internship</strong> with guaranteed
                results
              </li>
            </ul>
            <button className="mt-8 flex items-center justify-center rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md transition-all hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700">
              Get Details about our Internship Program
              <FaArrowRight className="ml-2 text-lg" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;
