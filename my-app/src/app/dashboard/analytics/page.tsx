"use client";

import { FiBarChart2 } from "react-icons/fi";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-10 font-sans flex flex-col items-center">
      <h1 className="flex items-center gap-3 text-4xl font-extrabold text-blue-900 mb-8">
        <FiBarChart2 size={36} />
        Analytics Dashboard
      </h1>

      <p className="max-w-3xl text-center text-blue-800 text-lg leading-relaxed mb-10">
        Dive deep into your data insights with our comprehensive analytics
        tools. Track performance trends, user activity, and key metrics all in
        one place. Stay informed and make data-driven decisions with confidence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-8 border-blue-500">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            User Growth
          </h2>
          <p className="text-blue-600">
            Monitor your user base expansion over time with clear graphs and
            stats.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-8 border-blue-400">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Task Completion
          </h2>
          <p className="text-blue-600">
            Analyze task progress and completion rates across your projects.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6 border-l-8 border-blue-300">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">
            Engagement
          </h2>
          <p className="text-blue-600">
            Understand user engagement patterns to improve overall experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
