"use client";

import { useRouter } from "next/navigation";
import { FiBell, FiSettings, FiUser, FiUserCheck } from "react-icons/fi";

const Settings = () => {
  const router = useRouter();

  const tabs = [
    {
      name: "Account",
      icon: <FiUserCheck size={24} />,
      link: "/dashboard/settings/account",
      color: "text-blue-600 hover:bg-blue-100",
    },
    {
      name: "Profile",
      icon: <FiUser size={24} />,
      link: "/dashboard/settings/profile",
      color: "text-green-600 hover:bg-green-100",
    },
    {
      name: "Notifications",
      icon: <FiBell size={24} />,
      link: "/dashboard/settings/notification",
      color: "text-purple-600 hover:bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      <h1 className="flex items-center gap-3 text-3xl font-bold text-gray-800 mb-8">
        <FiSettings size={32} className="text-indigo-600" />
        Settings
      </h1>

      <div className="flex gap-6 mb-10">
        {tabs.map(({ name, icon, link, color }) => (
          <button
            key={name}
            onClick={() => router.push(link)}
            className={`flex items-center gap-2 px-5 py-3 rounded-lg font-semibold border border-gray-300 transition ${color} cursor-pointer`}
          >
            {icon}
            {name}
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto text-gray-700">
        <p className="text-lg leading-relaxed">
          Welcome to the settings panel! Use the tabs above to navigate between
          your Account details, Profile customization, and Notification
          preferences. Customize your experience and manage your preferences to
          stay updated.
        </p>
      </div>
    </div>
  );
};

export default Settings;
