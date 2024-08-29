import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook
import CourseCard from "./components/CourseCard";

const CourseContent = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const dsa = [
    { label: "Analysis of Algorithms" },
    { label: "Array" },
    { label: "Linked List" },
    { label: "Searching Algorithms" },
    { label: "Stack" },
    { label: "Sorting Algorithms" },
    { label: "Queue" },
    { label: "Graph" },
  ];

  const webDevelopment = [
    { label: "JavaScript" },
    { label: "HTML" },
    { label: "CSS" },
    { label: "ReactJS" },
    { label: "Node.js" },
    { label: "Django" },
    { label: "Frontend Development" },
    { label: "Backend Development" },
  ];

  const aiMlDataScience = [
    { label: "Artificial Intelligence" },
    { label: "Machine Learning" },
    { label: "Data Science" },
    { label: "Data Analysis" },
    { label: "Data Visualization" },
    { label: "Deep Learning" },
    { label: "Natural Language Processing" },
    { label: "Computer Vision" },
  ];

  const programmingLanguages = [
    { label: "Python" },
    { label: "Java" },
    { label: "C++" },
    { label: "C" },
    { label: "R" },
    { label: "PHP" },
    { label: "Flutter" },
    { label: "Golang" },
  ];

  const interviewPreparation = [
    { label: "Company Preparation" },
    { label: "SDE Interview Programs" },
    { label: "Competitive Programming" },
    { label: "Practice Company Questions" },
    { label: "Aptitude" },
    { label: "Interview Experiences" },
    { label: "Puzzles" },
    { label: "Company Recruitment" },
  ];

  const csSubjects = [
    { label: "Operating System" },
    { label: "Computer Network" },
    { label: "DBMS" },
    { label: "Engineering Mathematics" },
    { label: "Software Engineering" },
    { label: "Digital Electronics" },
    { label: "Computer Design" },
    { label: "Computer Organization" },
  ];

  const databases = [
    { label: "SQL" },
    { label: "MySQL" },
    { label: "MongoDB" },
    { label: "PostgreSQL" },
    { label: "PL/SQL" },
    { label: "SQL CheatSheet" },
    { label: "SQL Interview Questions" },
    { label: "MySQL Interview Questions" },
  ];

  const devOps = [
    { label: "GIT" },
    { label: "Amazon Web Services" },
    { label: "Kubernetes" },
    { label: "Docker" },
    { label: "Microsoft Azure" },
    { label: "Google Cloud Platform" },
    { label: "DevOps Roadmap" },
    { label: "Learn DevOps Online" },
  ];

  const tutorials = [
    { label: "System Design" },
    { label: "Android" },
    { label: "Linux" },
    { label: "Design Pattern" },
    { label: "Software Testing" },
    { label: "Product Management" },
    { label: "Project Management" },
    { label: "Excel" },
  ];

  const gfgSchool = [
    { label: "Class 9 Study Material" },
    { label: "Class 10 Study Material" },
    { label: "Class 11 Study Material" },
    { label: "Class 12 Study Material" },
    { label: "Class 9 Notes" },
    { label: "Class 10 Notes" },
    { label: "Class 11 Notes" },
    { label: "Class 12 Notes" },
  ];

  // Function to handle "View All" button click
  const handleViewAll = (category) => {
    navigate(`/courses/${category.toLowerCase().replace(/ /g, "-")}`); // Navigate to the specific category route
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
