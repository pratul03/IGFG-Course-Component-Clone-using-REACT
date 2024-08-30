import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ courseId, topics }) => (
  <div className="w-1/4 p-4 border-r">
    <ul>
      {topics.map((topic, index) => (
        <li key={index}>
          <Link
            to={`/courses/${courseId}/topics/${topic.label
              .toLowerCase()
              .replace(/ /g, "-")}`}
            className="text-neutral-300 hover:underline flex items-start justify-between flex-col font-medium text-md bg-slate-800 h-[5vh]"
          >
            {topic.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Sidebar;
