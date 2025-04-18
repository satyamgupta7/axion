"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Rohan Sharma",
    designation: "Software Engineer @TCS",
    content:
      "The internship program was an incredible learning experience. The mentors provided hands-on training and real-world projects, making it the perfect place to start a tech career.",
    image: "/images/testimonials/person1.jpeg",
    star: 5,
  },
  {
    id: 2,
    name: "Priya Verma",
    designation: "Frontend Developer @Infosys",
    content:
      "Absolutely loved my time at this company! The work culture, guidance, and exposure to modern tech stacks helped me sharpen my skills and gain confidence.",
    image: "/images/testimonials/person1.jpeg",
    star: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    designation: "Full Stack Developer @Wipro",
    content:
      "This internship transformed my career! Working with real-time projects and learning from experienced professionals helped me land my dream job in IT.",
    image: "/images/testimonials/person1.jpeg",
    star: 5,
  },
  {
    id: 4,
    name: "Sneha Iyer",
    designation: "UI/UX Designer @HCL",
    content:
      "A truly enriching experience! The structured training, supportive mentors, and hands-on projects made this internship extremely valuable.",
    image: "/images/testimonials/person1.jpeg",
    star: 5,
  },
  {
    id: 5,
    name: "Rajesh Nair",
    designation: "Data Analyst @Capgemini",
    content:
      "The best place to kickstart an IT career! I learned practical industry skills, worked on real datasets, and improved my problem-solving abilities.",
    image: "/images/testimonials/person1.jpeg",
    star: 5,
  },
  {
    id: 6,
    name: "Kavita Mehta",
    designation: "DevOps Engineer @Tech Mahindra",
    content:
      "Amazing learning experience! The internship provided excellent hands-on exposure to the latest DevOps tools, and the mentors were always ready to help.",
    image: "/images/testimonials/person1.jpeg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="relative z-10 bg-gray-100 px-8 py-12 md:px-16 md:py-16 lg:py-20">
      <div className="container">
        <SectionTitle title="Success Stories" paragraph="" center />

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          breakpoints={{
            768: { slidesPerView: 2 }, // Show 2 slides on tablets
            1024: { slidesPerView: 3 }, // Show 3 slides on desktop
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation
          pagination={{ clickable: true }}
          className="mt-10"
        >
          {testimonialData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <SingleTestimonial testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-600">3,000+</h2>
            <p className="text-gray-600">Interns Placed</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-600">400+</h2>
            <p className="text-gray-600">Partner Companies</p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h2 className="text-3xl font-bold text-blue-600">40%</h2>
            <p className="text-gray-600">Average Salary Increase</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
