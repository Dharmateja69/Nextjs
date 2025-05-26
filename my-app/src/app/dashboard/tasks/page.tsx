// pages/dashboard/tasks.tsx
"use client";

import { FiCheckSquare } from "react-icons/fi";

const Tasks = () => {
  return (
    <div className="min-h-screen bg-green-50 p-10 font-sans flex flex-col items-center">
      <h1 className="flex items-center gap-3 text-4xl font-extrabold text-green-800 mb-8">
        <FiCheckSquare size={36} />
        Task Management
      </h1>

      <p className="max-w-3xl text-center text-green-700 text-lg leading-relaxed mb-10">
        Keep track of your to-do lists, deadlines, and project progress easily.
        Manage and organize tasks efficiently for maximum productivity.
      </p>

      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6">
        <ul className="list-disc list-inside text-green-800 space-y-2">
          <li>Review pending tasks and deadlines.</li>
          <li>Mark tasks as completed to track progress.</li>
          <li>Assign priorities and due dates.</li>
        </ul>
      </div>
    </div>
  );
};

export default Tasks;
