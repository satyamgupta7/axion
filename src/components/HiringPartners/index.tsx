"use client";
import React from "react";
import Image from "next/image";

// Array of company logo details
const companyLogos = [
  { src: "/images/brands/Accenture.png", alt: "Accenture" },
  { src: "/images/brands/allianz.webp", alt: "Allianz" },
  { src: "/images/brands/Amazon.png", alt: "Amazon" },
  { src: "/images/brands/Astrotalk.png", alt: "Astrotalk" },
  { src: "/images/brands/argoid.webp", alt: "Argoid" },
  { src: "/images/brands/bagri.webp", alt: "Bagri" },
  { src: "/images/brands/blue.webp", alt: "Blue" },
  { src: "/images/brands/bridge.webp", alt: "Bridge" },
  { src: "/images/brands/coin.webp", alt: "Coin" },
];

const companyLogos2 = [
  { src: "/images/brands/capg.webp", alt: "Capg" },
  { src: "/images/brands/congni.webp", alt: "Congni" },
  { src: "/images/brands/CARS24.png", alt: "CARS24" },
  { src: "/images/brands/excelerate.png", alt: "Excel" },
  { src: "/images/brands/EY.png", alt: "EY" },
  { src: "/images/brands/genpact.webp", alt: "Genpact" },
  { src: "/images/brands/HCL.png", alt: "HCL" },
  { src: "/images/brands/hdfc.webp", alt: "Hdfc" },
  { src: "/images/brands/Honda.png", alt: "Honda" },
];

const companyLogos3 = [
  { src: "/images/brands/Bluestock.png", alt: "MS" },
  { src: "/images/brands/hsbc.webp", alt: "Hsbc" },
  { src: "/images/brands/IBM.png", alt: "IBM" },
  { src: "/images/brands/ms.webp", alt: "MS" },
  { src: "/images/brands/Natixis.png", alt: "Natix" },
  { src: "/images/brands/PWC.png", alt: "PWC" },
  { src: "/images/brands/TCS.png", alt: "TCS" },
  { src: "/images/brands/TechMahindra.png", alt: "TechMahindra" },
  { src: "/images/brands/ZylaHealth.png", alt: "ZylaHealth" },
];

// Function to render the logos
const renderLogos = () =>
  companyLogos.map((logo, index) => (
    <Image
      key={`${logo.alt}-${index}`}
      src={logo.src}
      alt={logo.alt}
      width={100}
      height={50}
      className="object-contain"
    />
  ));

const renderLogos2 = () =>
  companyLogos2.map((logo, index) => (
    <Image
      key={`${logo.alt}-${index}`}
      src={logo.src}
      alt={logo.alt}
      width={100}
      height={50}
      className="object-contain"
    />
  ));

const renderLogos3 = () =>
  companyLogos3.map((logo, index) => (
    <Image
      key={`${logo.alt}-${index}`}
      src={logo.src}
      alt={logo.alt}
      width={100}
      height={50}
      className="object-contain"
    />
  ));

const HiringPartner: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-3xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        Unlock Opportunities With 400+ Elite Hiring Partners
      </h1>
      <p className="mb-6 text-lg sm:text-base md:text-lg lg:text-xl">
        Experience the confidence our hiring partners have in us
      </p>
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex gap-[12rem] whitespace-nowrap">
          {Array(2).fill(renderLogos())}
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "3rem" }}
      >
        <div className="animate-scroll-reverse flex gap-[12rem] whitespace-nowrap">
          {Array(2).fill(renderLogos2())}
        </div>
      </div>

      <div
        className="relative w-full overflow-hidden"
        style={{ paddingTop: "3rem" }}
      >
        <div className="animate-scroll flex gap-[12rem] whitespace-nowrap">
          {Array(2).fill(renderLogos3())}
        </div>
      </div>
      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default HiringPartner;
