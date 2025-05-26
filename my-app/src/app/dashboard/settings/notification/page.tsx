import {
  FiAlertTriangle,
  FiBell,
  FiCheckCircle,
  FiTrash2,
} from "react-icons/fi";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      type: "success",
      icon: <FiCheckCircle className="text-green-500" size={24} />,
      message: "Your profile has been updated successfully.",
      time: "2 mins ago",
    },
    {
      id: 2,
      type: "alert",
      icon: <FiAlertTriangle className="text-yellow-500" size={24} />,
      message: "Password will expire in 3 days. Please update it.",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "info",
      icon: <FiBell className="text-blue-500" size={24} />,
      message: "New login from Chrome on Windows detected.",
      time: "3 hours ago",
    },
    {
      id: 4,
      type: "delete",
      icon: <FiTrash2 className="text-red-500" size={24} />,
      message: "You deleted 5 old notifications.",
      time: "Yesterday",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-8 font-sans">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <FiBell size={32} /> Notifications
        </h2>

        <ul className="space-y-4">
          {notifications.map(({ id, icon, message, time, type }) => (
            <li
              key={id}
              className={`flex items-center gap-4 p-4 rounded-lg border-l-8
                ${
                  type === "success"
                    ? "border-green-500 bg-green-50"
                    : type === "alert"
                    ? "border-yellow-400 bg-yellow-50"
                    : type === "info"
                    ? "border-blue-400 bg-blue-50"
                    : "border-red-400 bg-red-50"
                } shadow-sm`}
            >
              {icon}
              <div className="flex flex-col">
                <p className="text-gray-700 font-medium">{message}</p>
                <span className="text-xs text-gray-500">{time}</span>
              </div>
            </li>
          ))}
        </ul>

        <button
          className="mt-8 w-full bg-red-600 hover:bg-red-700 transition text-white py-3 rounded-lg font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
          type="button"
        >
          Clear All Notifications
        </button>
      </div>
    </div>
  );
};

export default Notification;
