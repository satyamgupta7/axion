"use client";
import React from "react";
import Image from "next/image";

// Company logo sets
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
  { src: "/images/brands/Bluestock.png", alt: "Bluestock" },
  { src: "/images/brands/hsbc.webp", alt: "Hsbc" },
  { src: "/images/brands/IBM.png", alt: "IBM" },
  { src: "/images/brands/ms.webp", alt: "MS" },
  { src: "/images/brands/Natixis.png", alt: "Natixis" },
  { src: "/images/brands/PWC.png", alt: "PWC" },
  { src: "/images/brands/TCS.png", alt: "TCS" },
  { src: "/images/brands/TechMahindra.png", alt: "TechMahindra" },
  { src: "/images/brands/ZylaHealth.png", alt: "ZylaHealth" },
];

const renderLogos = (logos: typeof companyLogos) =>
  logos.map((logo, index) => (
    <Image
      key={`${logo.alt}-${index}`}
      src={logo.src}
      alt={logo.alt}
      width={100}
      height={50}
      className="mx-4 object-contain"
    />
  ));

const HiringPartner: React.FC = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden p-4">
      <h1 className="mb-4 text-center text-3xl font-bold sm:text-2xl md:text-3xl lg:text-4xl">
        Unlock Opportunities With 400+ Elite Hiring Partners
      </h1>
      <p className="mb-6 text-center text-lg sm:text-base md:text-lg lg:text-xl">
        Experience the confidence our hiring partners have in us
      </p>

      {/* Row 1 */}
      <div className="relative w-full overflow-hidden">
        <div className="animate-marquee flex gap-[6rem] whitespace-nowrap">
          {renderLogos(companyLogos)}
          {renderLogos(companyLogos)}
        </div>
      </div>

      {/* Row 2 (reverse direction) */}
      <div className="relative w-full overflow-hidden pt-12">
        <div className="animate-marquee-reverse flex gap-[6rem] whitespace-nowrap">
          {renderLogos(companyLogos2)}
          {renderLogos(companyLogos2)}
        </div>
      </div>

      {/* Row 3 */}
      <div className="relative w-full overflow-hidden pt-12">
        <div className="animate-marquee flex gap-[6rem] whitespace-nowrap">
          {renderLogos(companyLogos3)}
          {renderLogos(companyLogos3)}
        </div>
      </div>

      {/* Custom animation styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        .animate-marquee {
          animation: marquee 12s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 12s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-marquee,
          .animate-marquee-reverse {
            animation-duration: 6s;
          }
        }
      `}</style>
    </div>
  );
};

export default HiringPartner;
