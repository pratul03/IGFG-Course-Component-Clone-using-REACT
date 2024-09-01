import React from "react";
import { Link, useLocation } from "react-router-dom";

const Sidebar = ({ courseId, topics }) => {
  // Use useLocation to get the current URL path
  const location = useLocation();

  return (
    <div className="w-1/4 p-4 border-r">
      <ul>
        {topics.map((topic, index) => {
          // Generate the path for each topic
          const topicPath = `/courses/${courseId}/topics/${topic.label
            .toLowerCase()
            .replace(/ /g, "-")}`;

          // Determine if the current link is active by comparing with the location path
          const isActive = location.pathname === topicPath;

          return (
            <li key={index}>
              <Link
                to={topicPath}
                className={`flex items-start justify-between flex-col font-medium text-md bg-slate-800 h-[5vh]  hover:underline ${
                  isActive
                    ? "text-green-600" // Active link styling
                    : "text-neutral-300" // Default styling
                }`}
              >
                {topic.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
