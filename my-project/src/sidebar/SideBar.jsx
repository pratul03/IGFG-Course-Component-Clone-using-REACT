import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ courseId, topics }) => {
  const location = useLocation();

  return (
    <div className="w-[260px] overflow-y-auto  scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-700 bg-gray-500/10">
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
              >
                <span className="ml-3">{topic.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
