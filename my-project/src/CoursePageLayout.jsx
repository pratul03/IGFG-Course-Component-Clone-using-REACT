import React from "react";
import { useParams } from "react-router-dom";
import { allCoursesData } from "../public/data/data.js";
import MainContent from "./sidebar/MainContent"; // Ensure the path is correct
import Sidebar from "./sidebar/SideBar.jsx"; // Ensure the path is correct

const CoursePageLayout = () => {
  const { courseId } = useParams();

  // Find course data matching the courseId
  const course = allCoursesData.find(
    (course) => course.title.toLowerCase().replace(/ /g, "-") === courseId
  );

  if (!course) {
    // Handle case when course is not found
    return <div>Course Not Found</div>;
  }

  return (
    <div className="flex">
      {/* Sidebar to navigate between topics */}
      <Sidebar courseId={courseId} topics={course.topics} />

      {/* Main content section */}
      <MainContent topics={course.topics} />
    </div>
  );
};

export default CoursePageLayout;
