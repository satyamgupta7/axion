import SectionTitle from "../Common/SectionTitle";
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
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container text-center">
          <SectionTitle
            title="Receive Your Offer Letter Today!"
            paragraph="Join our Orientation Program at 6:00 PM and take the first step toward a successful internship. Unlock our 4-step Job Hunting Framework to build essential skills, gain hands-on experience, and expand your professional network—setting the stage for a thriving career."
            center
          />

          <div className="mx-auto grid max-w-2xl grid-cols-1 items-center justify-center gap-y-6">
            <div className="flex items-center justify-center space-x-4 text-left">
              <FaLinkedin className="flex-shrink-0 text-3xl text-blue-600" />
              <p className="w-full text-lg">
                Learn from industry experts and enhance your LinkedIn profile.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-left">
              <FaProjectDiagram className="flex-shrink-0 text-3xl text-green-600" />
              <p className="w-full text-lg">
                Apply knowledge to real projects & create an ATS-friendly
                resume.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-left">
              <FaUsers className="flex-shrink-0 text-3xl text-purple-600" />
              <p className="w-full text-lg">
                Collaborate with like-minded peers and grow your professional
                network.
              </p>
            </div>
            <div className="flex items-center justify-center space-x-4 text-left">
              <FaRocket className="flex-shrink-0 text-3xl text-red-600" />
              <p className="w-full text-lg">
                Elevate your career with continuous support and valuable
                resources.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Link
              href="#internship"
              className="flex items-center rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
            >
              Join for Free <FaArrowRight className="ml-2 text-lg" />
            </Link>
            <Link
              href="#internship"
              className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default OfferLetter;
