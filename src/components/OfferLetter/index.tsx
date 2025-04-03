import Link from "next/link";
import {
  FaLinkedin,
  FaProjectDiagram,
  FaUsers,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";

const OfferLetter = () => {
  return (
    <section id="features" className="bg-gray-400 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Header Section */}
        <div className="mx-auto mb-8 w-full max-w-4xl">
          <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
            Receive Your Offer Letter Today!
          </h2>
          <p
            className="from-yellow-500 mt-4 rounded-lg bg-gradient-to-r via-orange-500 to-red-500 px-4 
            py-2 text-lg font-semibold text-white shadow-sm md:text-xl"
          >
            Join our Orientation Program at 6:00 PM to kickstart your internship
            journey. Discover our 4-step Job Hunting Framework to gain skills,
            experience, and network for career success!
          </p>
        </div>

        {/* Features Grid */}
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-6">
          {[
            {
              icon: <FaLinkedin className="text-4xl text-blue-500" />,
              text: "Learn from industry experts and enhance your LinkedIn profile.",
            },
            {
              icon: <FaProjectDiagram className="text-4xl text-green-500" />,
              text: "Apply knowledge to real projects & create an ATS-friendly resume.",
            },
            {
              icon: <FaUsers className="text-4xl text-purple-500" />,
              text: "Collaborate with like-minded peers and grow your professional network.",
            },
            {
              icon: <FaRocket className="text-4xl text-red-500" />,
              text: "Elevate your career with continuous support and valuable resources.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 rounded-lg bg-gray-700 p-4 text-left shadow-md"
            >
              <div className="flex-shrink-0">{item.icon}</div>
              <p className="text-lg text-gray-200">{item.text}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link
            href="https://forms.gle/9gddAkJZyitpefzy8"
            className="flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-semibold text-white shadow-md duration-300 ease-in-out hover:bg-primary/80"
          >
            Join for Free <FaArrowRight className="ml-2 text-lg" />
          </Link>
          <Link
            href="#internship"
            className="inline-block rounded-md bg-black px-8 py-4 text-base font-semibold text-white shadow-md duration-300 ease-in-out hover:bg-black/90"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OfferLetter;
