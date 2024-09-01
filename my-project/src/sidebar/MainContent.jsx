import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allCoursesData } from "../../public/data/data.js";
import Sidebar from "./SideBar.jsx";

const MainContent = () => {
  const { courseId, topicId } = useParams();
  const [updateTime, setUpdateTime] = useState("");

  // Find course data matching the courseId
  const course = allCoursesData.find(
    (course) => course.title.toLowerCase().replace(/ /g, "-") === courseId
  );

  if (!course) {
    return <div>Course Not Found</div>;
  }

  // Find topic based on topicId
  const topic = course.topics.find(
    (topic) => topic.label.toLowerCase().replace(/ /g, "-") === topicId
  );

  // Function to format the last modified time
  const formatUpdateTime = () => {
    const now = new Date();
    return now.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  };

  // Set the update time when the topic changes
  useEffect(() => {
    if (topic) {
      setUpdateTime(`Last Updated: ${formatUpdateTime()}`);
    }
  }, [topic]);

  return (
    <div className="flex w-full">
      {/* Sidebar to navigate between topics */}
      <Sidebar courseId={courseId} topics={course.topics} />

      <div className="left-0 flex flex-col w-3/4 max-w-4xl mr-auto p-6 text-white shadow-lg mt-3">
        <h1 className="text-3xl font-semibold mb-3">
          {topic ? topic.heading : course.title}
        </h1>
        {topic ? (
          <>
            <p className="mt-2 text-sm text-gray-400 flex items-center">
              {updateTime}
              <div className="flex ml-[450px] gap-3 text-white relative">
                {/* MessageCircle Icon */}
                <div className="relative group">
                  <MessageCircle className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    comments
                  </div>
                </div>

                {/* Pencil Icon */}
                <div className="relative group">
                  <Pencil className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    improve
                  </div>
                </div>

                {/* Ellipsis Icon */}
                <div className="relative group">
                  <Ellipsis className="rotate-[90deg] h-5 cursor-pointer hover:text-gray-500" />
                </div>
              </div>
            </p>
            <hr className="border-t border-gray-200/30 my-2" />
            {/* Display update time */}
            <pre className="text-xl mt-4 text-white">{topic.label}</pre>
            <p className="mt-2 text-base text-white">{topic.description}</p>
            <img
              src={topic.image}
              alt={topic.label}
              className="mt-4 rounded-lg max-w-full h-auto"
            />
          </>
        ) : (
          <p>Topic Not Found</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
