"use client";
import Link from "next/link";
import { FaBriefcase, FaHandshake, FaUsers } from "react-icons/fa";

const Hero = () => {
  const scrollToInternship = (e) => {
    e.preventDefault();
    const internshipSection = document.getElementById("internship");
    if (internshipSection) {
      internshipSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Your Internship Journey Begins Here!
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Gain hands-on experience with real-world projects and
                  industry-level mentorship.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="https://forms.gle/9gddAkJZyitpefzy8"
                    className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    🔥 Get On Board Now!
                  </Link>
                  <a
                    href="#internship"
                    onClick={scrollToInternship}
                    className="inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    Explore Programs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
              <FaBriefcase className="flex-shrink-0 text-3xl text-blue-600" />
              <h3 className="text-3xl font-bold text-black">2000+</h3>
              <p className="text-gray-700">Working professionals</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
              <FaUsers className="flex-shrink-0 text-3xl text-green-600" />
              <h3 className="text-3xl font-bold text-black">3000+</h3>
              <p className="text-gray-700">People transformed</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md">
              <FaHandshake className="flex-shrink-0 text-3xl text-purple-600" />
              <h3 className="text-3xl font-bold text-black">400+</h3>
              <p className="text-gray-700">Hiring Partners</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
