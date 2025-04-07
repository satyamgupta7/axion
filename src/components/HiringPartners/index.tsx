// components/HiringPartner.tsx
import React from "react";
import Image from "next/image";

const HiringPartner: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="mb-4 text-3xl font-bold">
        Unlock Opportunities With 750+ Elite Hiring Partners
      </h1>
      <p className="mb-6 text-lg">Check out why our hiring partner trusts us</p>
      <div className="relative w-full overflow-hidden">
        <div className="animate-scroll flex gap-4 whitespace-nowrap">
          {Array(2).fill(
            <>
              <Image
                src="/images/brands/Accenture.png"
                alt="Accenture"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/Amazon.png"
                alt="Amazon"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/Astrotalk.png"
                alt="Astrotalk"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/TCS.png"
                alt="TCS"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/PWC.png"
                alt="PWC"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/IBM.png"
                alt="IBM"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/Honda.png"
                alt="Honda"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/HCL.png"
                alt="HCL"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/CARS24.png"
                alt="CARS24"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/TechMahindra.png"
                alt="TechMahindra"
                width={100}
                height={50}
                className="object-contain"
              />
              <Image
                src="/images/brands/ZylaHealth.png"
                alt="ZylaHealth"
                width={100}
                height={50}
                className="object-contain"
              />
            </>,
          )}
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
      `}</style>
    </div>
  );
};

export default HiringPartner;
