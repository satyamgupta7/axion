import { FaArrowRight, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const ChallengeSolution = () => {
  return (
    <section id="features" className="px-8 py-16 md:px-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="text-center text-4xl font-bold text-gray-900 dark:text-white">
          The Challenge & Our Solution
        </h2>

        <div className="mt-12 flex flex-col items-center gap-8 md:flex-row">
          {/* Left Side - Highlighted Challenge Card */}
          <div className="relative w-full rounded-lg bg-gradient-to-r from-blue-600 to-indigo-700 p-12 text-white shadow-xl md:w-1/2">
            <FaQuoteLeft className="absolute left-4 top-4 text-5xl opacity-40" />
            <h3 className="text-4xl font-extrabold leading-snug">
              "If you need a job, you need experience.
              <br />
              But to gain experience, you need a job."
            </h3>
            <FaQuoteRight className="absolute bottom-4 right-4 text-5xl opacity-40" />
            <p className="mt-6 text-lg font-medium opacity-90 md:text-xl">
              This is the paradox that many aspiring professionals face in
              today's competitive job market.
            </p>
          </div>

          {/* Right Side - Solution Section */}
          <div className="w-full rounded-lg border border-gray-200 bg-white p-10 shadow-md md:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900">
              Axion's Real-Time Internship Program bridges the gap:
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
            <button className="mt-8 flex items-center rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-700">
              Get Details about our Internship Program
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeSolution;
