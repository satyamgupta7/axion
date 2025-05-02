"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Registration",
    description:
      "Register at Unified Mentor VIP Program to transform your journey.",
  },
  {
    title: "Offer Letter & Projects",
    description:
      "You will receive an offer letter and access to start working on projects.",
  },
  {
    title: "Hands on Projects & Learning",
    description:
      "Work on projects on your own practice skill set, get help from modules and mentor support.",
  },
  {
    title: "Projects evaluation & Certification",
    description:
      "Projects you have worked on will be evaluated by industry team and verified certificate will be provided in a week.",
  },
  {
    title: "Get Placement Opportunities",
    description:
      "Top performer will get dedicated job portal access with LOR and CVs will be forwarded to tie-up companies resume builder and CV checker.",
  },
];

export default function RoadMap() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stepPositions = [
    { top: "60%", left: "8%" },
    { top: "25%", left: "26%" },
    { top: "60%", left: "46%" },
    { top: "25%", left: "67%" },
    { top: "60%", left: "88%" },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden px-4 py-16 text-gray-900 sm:px-6 lg:px-20"
      style={{ backgroundColor: "#98F5F9" }}
    >
      <style>{`
        .road-path {
          stroke-dasharray: 8 12;
          animation: dashMove 1s linear infinite;
        }

        @keyframes dashMove {
          from {
            stroke-dashoffset: 20;
          }
          to {
            stroke-dashoffset: 0;
          }
        }

        .pin {
          width: 36px;
          height: 36px;
          background-color: #374151;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          position: relative;
          box-shadow: 0 2px 6px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: bold;
          color: white;
        }

        .pin-number {
          transform: rotate(45deg);
        }

        .pin.active {
          background-color: #9333ea;
        }

        @media (max-width: 768px) {
          .pin {
            width: 28px;
            height: 28px;
            font-size: 12px;
          }
        }
      `}</style>

      <h1 className="relative z-10 mb-16 text-center text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
        Roadmap of your Internship Journey
      </h1>

      <div className="relative mx-auto h-[500px] w-full max-w-7xl sm:h-[400px]">
        <svg
          viewBox="0 0 1000 300"
          preserveAspectRatio="none"
          className="absolute left-0 top-0 z-0 h-full w-full"
        >
          <path
            d="M 0 200 C 250 0, 750 400, 1000 200"
            fill="none"
            stroke="#4B5563"
            strokeWidth="4"
            className="road-path"
          />
        </svg>

        {/* Step Pins */}
        {steps.map((step, index) => (
          <div
            key={index}
            className="absolute flex w-36 flex-col items-center text-center sm:w-40"
            style={{
              top: stepPositions[index].top,
              left: stepPositions[index].left,
              transform: "translate(-50%, -50%)",
            }}
          >
            <motion.div
              animate={{
                scale: index === currentStep ? 1.2 : 1,
              }}
              transition={{ duration: 0.4 }}
            >
              <div className={`pin ${index === currentStep ? "active" : ""}`}>
                <span className="pin-number">{index + 1}</span>
              </div>
            </motion.div>

            <h2 className="mt-3 text-sm font-semibold text-gray-900 sm:text-base">
              {step.title}
            </h2>
            <p className="mt-1 text-xs text-gray-700 sm:text-sm">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
