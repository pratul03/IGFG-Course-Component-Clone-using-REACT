import React from "react";
import CourseCard from "./components/CourseCard";

const CourseContent = () => {
  const item1 = [
    { label: "Analysis of Algorithms" },
    { label: "Array" },
    { label: "Linked List" },
    { label: "Searching Algorithms" },
    { label: "Stack" },
    { label: "Sorting Algorithms" },
    { label: "Queue" },
    { label: "Graph" },
  ];
  const item2 = [
    { label: "JavaScript" },
    { label: "HTML" },
    { label: "CSS" },
    { label: "ReactJS" },
    { label: "Node.js" },
    { label: "Django" },
    { label: "Frontend Development" },
    { label: "Backend Development" },
  ];

  const handleViewAll = () => {
    console.log("View All Clicked");
  };

  return (
    <div className="flex items-center justify-center mt-[-70px]">
      <div className="w-full max-w-[1060px]">
        <CourseCard
          title="DSA"
          items={item1}
          onViewAll={handleViewAll}
          backgroundColor="bg-[#5486bd]"
        />

        <CourseCard
          title="Web Development"
          items={item2}
          onViewAll={handleViewAll}
          backgroundColor={"bg-[#ae84d1]"}
        />
      </div>
    </div>
  );
};

export default CourseContent;
