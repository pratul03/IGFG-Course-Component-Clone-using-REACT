import React from "react";
import { useNavigate } from "react-router-dom";
import {
  aiMlDataScience,
  csSubjects,
  databases,
  devOps,
  dsa,
  gfgSchool,
  interviewPreparation,
  programmingLanguages,
  tutorials,
  webDevelopment,
} from "../public/data/data.js"; // Import data from data.js
import CourseCard from "./components/CourseCard";

const CourseContent = () => {
  const navigate = useNavigate();

  // Function to handle "View All" button click
  const handleViewAll = (category) => {
    if (!category || category.toLowerCase() === "dsa") {
      navigate(`/courses/dsa/topics/analysis-of-algorithms`);
    } else {
      navigate(`/courses/${category.toLowerCase().replace(/ /g, "-")}`);
    }
  };

  return (
    <div className="flex items-center justify-center mt-[-40px] lg:mt-[-60px]">
      <div className="w-full max-w-[1060px]">
        <CourseCard
          title="DSA"
          items={dsa}
          onViewAll={() => handleViewAll("DSA")}
          backgroundColor="bg-[#5486bd]"
        />
        <CourseCard
          title="Web Development"
          items={webDevelopment}
          onViewAll={() => handleViewAll("Web Development")}
          backgroundColor="bg-[#ae84d1]"
        />
        <CourseCard
          title="AI ML & Data Science"
          items={aiMlDataScience}
          onViewAll={() => handleViewAll("AI ML & Data Science")}
          backgroundColor="bg-[#d5a05a]"
        />
        <CourseCard
          title="Programming Languages"
          items={programmingLanguages}
          onViewAll={() => handleViewAll("Programming Languages")}
          backgroundColor="bg-[#cc8f8e]"
        />
        <CourseCard
          title="Interview Preparation"
          items={interviewPreparation}
          onViewAll={() => handleViewAll("Interview Preparation")}
          backgroundColor="bg-[#79abb6]"
        />
        <CourseCard
          title="CS Subjects"
          items={csSubjects}
          onViewAll={() => handleViewAll("CS Subjects")}
          backgroundColor="bg-[#8591cc]"
        />
        <CourseCard
          title="Databases"
          items={databases}
          onViewAll={() => handleViewAll("Databases")}
          backgroundColor="bg-[#a0b783]"
        />
        <CourseCard
          title="DevOps"
          items={devOps}
          onViewAll={() => handleViewAll("DevOps")}
          backgroundColor="bg-[#6a93b1]"
        />
        <CourseCard
          title="Tutorials"
          items={tutorials}
          onViewAll={() => handleViewAll("Tutorials")}
          backgroundColor="bg-[#5486bd]"
        />
        <CourseCard
          title="GFG School"
          items={gfgSchool}
          onViewAll={() => handleViewAll("GFG School")}
          backgroundColor="bg-[#ae84d1]"
        />
      </div>
    </div>
  );
};

export default CourseContent;
