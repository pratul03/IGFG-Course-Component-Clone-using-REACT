/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, ChevronDown } from "lucide-react";
import { topics } from "../../public/data/sidebar";

const Sidebar = ({ courseId }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // Separate state for dropdown visibility
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const handleTopicClick = (topic) => {
    const topicPath = `/courses/${courseId}/topics/${topic.label
      .toLowerCase()
      .replace(/ /g, "-")}`;

    navigate(topicPath); // Navigate to the main topic page
    setIsSidebarOpen(false);

    // Close any open dropdown when navigating to a new main topic
    setActiveDropdown(null);
  };

  const toggleDropdown = (topicLabel) => {
    setActiveDropdown((prev) => (prev === topicLabel ? null : topicLabel));
  };

  return (
    <div>
      {/* Menu Icon for Mobile */}
      <div className="lg:hidden p-4">
        <button className="text-[#0e0e0e] text-3xl" onClick={toggleSidebar}>
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

            const isActiveTopic = location.pathname.startsWith(topicPath);
            const isDropdownOpen = activeDropdown === topic.label;

            return (
              <li key={index} className="mb-2">
                <div
                  className={`flex mt-3 items-center justify-between font-semibold text-lg h-[6vh] cursor-pointer ${
                    isActiveTopic
                      ? "text-green-500 bg-slate-300"
                      : "text-[#0e0e0e] hover:bg-black/20 transition-all ease-linear duration-75"
                  }`}
                >
                  {/* Topic Label - only navigates */}
                  <span
                    className="ml-3"
                    onClick={() => handleTopicClick(topic)} // Only handles navigation
                  >
                    {topic.label}
                  </span>

                  {/* Dropdown Icon - only toggles dropdown */}
                  {topic.subTopics && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation(); // Prevents triggering handleTopicClick
                        toggleDropdown(topic.label);
                      }}
                    >
                      <ChevronDown
                        className={`text-[#0e0e0e] ease-linear transition-transform duration-200 ml-[-30px] ${
                          isDropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {/* Dropdown Menu */}
                {topic.subTopics && isDropdownOpen && (
                  <ul className="ml-6 mt-2 text-[#0e0e0e]">
                    {topic.subTopics.map((subTopic, subIndex) => {
                      const subTopicPath = `${topicPath}/${subTopic
                        .toLowerCase()
                        .replace(/ /g, "-")}`;
                      const isSubActive = location.pathname === subTopicPath;

                      return (
                        <li key={subIndex}>
                          <Link
                            to={subTopicPath}
                            className={`block py-1 px-2 font-semibold text-base rounded transition duration-150 ml-[-10px] ${
                              isSubActive
                                ? "text-green-500 bg-slate-300"
                                : "text-[#0e0e0e] hover:text-green-600 hover:bg-black/20"
                            }`}
                            onClick={() => setIsSidebarOpen(false)}
                          >
                            {subTopic}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
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
