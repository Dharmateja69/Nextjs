"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FiBarChart2, FiCheckSquare, FiSettings, FiUser } from "react-icons/fi";

const Typewriter = ({
  text,
  speed = 100,
}: {
  text: string;
  speed?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <h1 className="text-4xl font-bold text-gray-800 mb-6 min-h-[56px]">
      {displayedText}
      <span className="border-r-2 border-gray-800 animate-pulse ml-1">
        &nbsp;
      </span>
    </h1>
  );
};

const Dashboard = () => {
  const router = useRouter();

  const boxes = [
    {
      name: "Analytics",
      icon: <FiBarChart2 size={40} />,
      color: "bg-blue-500",
      link: "/dashboard/analytics",
      description:
        "Dive deep into your data insights and track your performance metrics with ease.",
    },
    {
      name: "Tasks",
      icon: <FiCheckSquare size={40} />,
      color: "bg-green-500",
      link: "/dashboard/tasks",
      description:
        "Manage and organize your daily to-dos to stay productive and meet deadlines.",
    },
    {
      name: "User",
      icon: <FiUser size={40} />,
      color: "bg-purple-500",
      link: "/dashboard/user",
      description:
        "View and update your profile information to keep your account up to date.",
    },
    {
      name: "Settings",
      icon: <FiSettings size={40} />,
      color: "bg-red-500",
      link: "/dashboard/settings",
      description:
        "Customize your preferences and configure the application settings effortlessly.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center gap-12 p-10 bg-gray-100 font-sans">
      <Typewriter text="Welcome to Your Dashboard" speed={100} />
      <p className="max-w-2xl text-center text-gray-600 text-lg">
        Access all key features below to manage your account, track analytics,
        organize tasks, and personalize your settings for the best experience.
      </p>

      <div className="flex flex-wrap justify-center items-center gap-8 mt-8">
        {boxes.map(({ name, icon, color, link, description }) => (
          <div
            key={name}
            onClick={() => router.push(link)}
            className={`${color} cursor-pointer rounded-lg shadow-lg w-56 h-56 flex flex-col justify-center items-center text-white hover:scale-105 transform transition duration-300 p-6`}
          >
            {icon}
            <h2 className="mt-4 text-2xl font-semibold">{name}</h2>
            <p className="mt-2 text-center text-sm font-light">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
