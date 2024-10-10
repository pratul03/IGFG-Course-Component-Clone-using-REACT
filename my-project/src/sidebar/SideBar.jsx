/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Sidebar = ({ courseId, topics }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Menu Icon for Mobile */}
      <div className="lg:hidden p-4">
        <button className="text-white text-3xl" onClick={toggleSidebar}>
          <Menu />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static top-0 left-0 h-full z-50 lg:w-[260px] w-64 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-700 bg-gray-500/10`}
      >
        <ul>
          {topics.map((topic, index) => {
            const topicPath = `/courses/${courseId}/topics/${topic.label
              .toLowerCase()
              .replace(/ /g, "-")}`;

            const isActive = location.pathname === topicPath;

            return (
              <li key={index} className="mb-2">
                <Link
                  to={topicPath}
                  className={`flex mt-3 items-center justify-start font-semibold text-lg h-[6vh] ${
                    isActive
                      ? "text-green-600 bg-stone-800/50" // Active link styling
                      : "text-neutral-300 hover:scale-105 transition-all ease-linear duration-75" // Non-active link hover effect
                  }`}
                  onClick={() => setIsSidebarOpen(false)} // Close sidebar when a topic is clicked on mobile
                >
                  <span className="ml-3">{topic.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Overlay for Mobile when Sidebar is Open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-stone-900 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
