"use client";
import React from "react";

const RefundPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-24 md:px-20 lg:px-32">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl shadow-xl">
        <div className="bg-gradient-to-r from-teal-700 to-blue-700 px-10 py-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Refund Policy
          </h1>
          <p className="mt-3 text-lg text-teal-200">
            Last Updated: May 5, 2025
          </p>
        </div>
        <div className="space-y-8 px-10 py-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Our Commitment to Your Learning Experience
            </h2>
            <p className="leading-relaxed text-gray-700">
              At AxionGen, we are dedicated to providing you with the highest
              quality learning experience through our online Courses on our
              Learning Management System (LMS). We understand that from time to
              time, circumstances may lead to questions about cancellations and
              refunds. This policy outlines our approach.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 text-teal-600">
              1. Cancellation Policy: Strict No Refund Policy
            </h2>
            <p className="font-semibold leading-relaxed text-gray-700">
              Please be advised that AxionGen operates under a strict{" "}
              <span className="text-teal-600">No Refund Policy</span> for all
              Course enrollments.
            </p>
            <p className="leading-relaxed text-gray-700">
              Once a Course is purchased, no refunds will be issued, regardless
              of the circumstances. We strongly encourage you to carefully
              review all Course details, including the syllabus, instructor
              information, and any prerequisites, and ensure your full
              commitment before finalizing your purchase.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Incomplete Course or Dissatisfaction
            </h2>
            <p className="leading-relaxed text-gray-700">
              Your learning satisfaction is important to us. If you encounter
              any technical difficulties that significantly hinder your learning
              experience, or if you have genuine concerns regarding the quality
              or relevance of the Course content, please do not hesitate to
              contact our dedicated support team at{" "}
              <a
                href="mailto:hello@axiongen.com"
                className="text-teal-600 hover:underline"
              >
                hello@axiongen.com
              </a>
              .
            </p>
            <p className="leading-relaxed text-gray-700">
              We are committed to making every reasonable effort to address and
              resolve any such issues promptly to ensure your learning journey
              on the AxionGen platform is smooth and fulfilling. This may
              include providing technical assistance, clarifying content, or
              exploring alternative solutions on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Changes to Course Content and Pricing
            </h2>
            <p className="leading-relaxed text-gray-700">
              At AxionGen, we are continuously working to update and enhance our
              Course offerings to provide you with the most current and relevant
              educational content. As a result, please be aware that the content
              of our Courses, the instructors involved, or the pricing structure
              may be subject to change without prior notification.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              Third-Party Purchases
            </h2>
            <p className="leading-relaxed text-gray-700">
              Please note that this Cancellation and Refund Policy exclusively
              applies to Courses purchased directly through the official
              AxionGen platform. For any Courses acquired through third-party
              platforms or affiliate partners, you will need to refer to their
              respective cancellation and refund policies, as they may differ
              from ours.
            </p>
          </section>

          <section className="pb-8">
            <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
            <p className="leading-relaxed text-gray-700">
              If you have any questions, concerns, or require clarification
              regarding our Cancellation and Refund Policy, please do not
              hesitate to reach out to our support team for assistance. We value
              your trust and are committed to providing you with a seamless and
              enriching learning experience on the AxionGen LMS platform.
              <a
                href="mailto:hello@axiongen.com"
                className="mt-2 block text-teal-600 hover:underline"
              >
                hello@axiongen.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
