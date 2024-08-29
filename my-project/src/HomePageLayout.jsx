import React from "react";
import CardContainer from "./CardContainer";
import CourseContent from "./CourseContent";

const HomePageLayout = () => {
  return (
    <div>
      {/* Render both components within a common layout */}
      <CardContainer />
      <CourseContent />
    </div>
  );
};

export default HomePageLayout;