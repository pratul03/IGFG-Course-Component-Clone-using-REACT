import React from "react";
import { useParams } from "react-router-dom";
import { allCoursesData } from "../../public/data/data.js";
import Sidebar from "./SideBar.jsx";

const MainContent = ({ topics }) => {
  const { courseId, topicId } = useParams();

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

  return (
    <div className="flex w-full">
      {/* Sidebar to navigate between topics */}
      <Sidebar courseId={courseId} topics={course.topics} />

      <div className="w-3/4 p-6">
        <h1 className="text-3xl font-bold">{course.title}</h1>
        {topic ? (
          <>
            <h2 className="text-2xl mt-4">{topic.label}</h2>
            <p className="mt-2">{topic.description}</p>
            <img src={topic.image} alt={topic.label} className="mt-4" />
          </>
        ) : (
          <p>Topic Not Found</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
