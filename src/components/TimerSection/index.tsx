import { Link } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { FaStopwatch } from "react-icons/fa";

const TimerSection: React.FC = () => {
  const getTargetDate = () => {
    const now = new Date();
    const target = new Date();

    target.setHours(18, 0, 0, 0); // Set time to 6:00 PM today

    if (now.getTime() >= target.getTime()) {
      // If current time is past 6:00 PM, set target to tomorrow 6:00 PM
      target.setDate(target.getDate() + 1);
    }

    return target;
  };

  const targetDateRef = useRef<Date>(getTargetDate());

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateTimeLeft = () => {
      const now = new Date();
      const difference = targetDateRef.current.getTime() - now.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        setTimeLeft({ hours, minutes, seconds });
      } else {
        // Once timer hits 0, move target to next day 6:00 PM
        const nextTarget = new Date(targetDateRef.current);
        nextTarget.setDate(nextTarget.getDate() + 1);
        targetDateRef.current = nextTarget;
      }
    };

    updateTimeLeft(); // Initial call
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedDate = targetDateRef.current.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="mt-10 w-full max-w-[1400px] rounded-2xl bg-white p-8 text-gray-900 shadow-md">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold">
          Register for the upcoming Orientation session now
        </h2>
        <p className="text-lg text-gray-700">
          <span className="font-bold">{formattedDate}</span> <br />
          06:00 PM to 07:00 PM
        </p>
        <div className="flex items-center gap-3">
          <FaStopwatch className="text-2xl text-blue-600" />
          <span className="text-2xl font-semibold text-blue-600">
            {String(timeLeft.hours).padStart(2, "0")}H :{" "}
            {String(timeLeft.minutes).padStart(2, "0")}M :{" "}
            {String(timeLeft.seconds).padStart(2, "0")}S
          </span>
        </div>
        <a
          href="https://forms.gle/9gddAkJZyitpefzy8"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
        >
          Register for Free Orientation
        </a>
      </div>
    </div>
  );
};

export default TimerSection;
