import React, { useEffect, useRef, useState } from "react";
import { FaStopwatch } from "react-icons/fa";

const TimerSection: React.FC = () => {
  const now = new Date();
  const target = new Date();
  target.setDate(now.getDate() + 1);
  target.setHours(18, 0, 0, 0); // 06:00 PM

  const targetDateRef = useRef<Date>(target);

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
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
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
        <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700">
          Register for Free Orientation
        </button>
      </div>
    </div>
  );
};

export default TimerSection;
