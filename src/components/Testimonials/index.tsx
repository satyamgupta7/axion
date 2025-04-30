"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Sumit Kant Jha",
    designation: "Network Engineer",
    company: "Cisco",
    content:
      "The internship program was an incredible learning experience. The mentors provided hands-on training and real-world projects, making it the perfect place to start a tech career.",
    image: "/images/testimonials/Sumit.jpg",
    linkedin: "https://www.linkedin.com/in/sumitkantjha/",
  },
  {
    id: 2,
    name: "Shaik Salman",
    designation: "Cloud Engineer",
    company: "Apna",
    content:
      "Absolutely loved my time at this company! The work culture, guidance, and exposure to modern tech stacks helped me sharpen my skills and gain confidence.",
    image: "/images/testimonials/Shaik.jpg",
    linkedin: "https://www.linkedin.com/in/shaik-salman-5b4651191/",
  },
  {
    id: 3,
    name: "Mrinal Kumar",
    designation: "Full Stack Developer",
    company: "HyperThink Systems",
    content:
      "This internship transformed my career! Working with real-time projects and learning from experienced professionals helped me land my dream job in IT.",
    image: "/images/testimonials/Mrinal.jpg",
    linkedin: "https://www.linkedin.com/in/mrinal-kumar-5046-backend/",
  },
  {
    id: 4,
    name: "Ujjwal Raj",
    designation: "DevOps Engineer",
    company: "HyperThink Systems",
    content:
      "A truly enriching experience! The structured training, supportive mentors, and hands-on projects made this internship extremely valuable.",
    image: "/images/testimonials/Ujjwal.jpg",
    linkedin: "https://www.linkedin.com/in/ujjwal-raj04/",
  },
  {
    id: 5,
    name: "Aniket Kumar",
    designation: "Business Analyst",
    company: "Big Truck",
    content:
      "The best place to kickstart an IT career! I learned practical industry skills, worked on real datasets, and improved my problem-solving abilities.",
    image: "/images/testimonials/Aniket.jpg",
    linkedin: "https://www.linkedin.com/in/g-kumar-842578209/",
  },
  {
    id: 6,
    name: "Sanjeev Kumar",
    designation: "Full Stack Java Developer",
    company: "TCS",
    content:
      "Amazing learning experience! The internship provided excellent hands-on exposure to the latest technology, and the mentors were always ready to help.",
    image: "/images/testimonials/Sanjeev.jpg",
    linkedin: "https://www.linkedin.com/in/sanjeevkmr1210/",
  },
  {
    id: 7,
    name: "Vipin Kumar Dubey",
    designation: "Java Developer",
    company: "Enhancesys Innovation",
    content:
      "The internship at Axiongen provided a great platform to enhance my Java development skills. I gained valuable experience working on real-world projects",
    image: "/images/testimonials/Vipin.jpg",
    linkedin: "https://www.linkedin.com/in/vipin-kumar-dubey-87254b161/",
  },
];

interface TestimonialWithCompany extends Testimonial {
  company?: string;
  internshipType?: string;
}

const SingleTestimonial = ({
  testimonial,
}: {
  testimonial: TestimonialWithCompany;
}) => {
  const { name, image, content, designation, company, linkedin } = testimonial;

  return (
    <div className="flex min-h-[320px] w-[320px] flex-col justify-between rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center">
            <div className="relative mr-4 h-16 w-12 overflow-hidden rounded-md">
              <Image
                src={image}
                alt={name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            </div>
          </div>
          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 transition-colors hover:text-blue-700"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          )}
        </div>
        <hr className="my-4 border-gray-200" />
        <div className="mb-4">
          <h4 className="text-md font-semibold text-blue-600">{company}</h4>
          <p className="text-sm text-gray-500">{designation}</p>
        </div>
        <div className="mt-2 w-full rounded-md bg-blue-500 p-4 text-white">
          <p className="text-sm italic leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <SectionTitle title="Success Stories" paragraph="" center />
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          className="mt-8"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="px-2">
                <SingleTestimonial testimonial={testimonial} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
