import React from "react";
import CourseCard from "./components/CourseCard";

const CourseContent = () => {
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
    { label: "Class 8 Study Material" },
    { label: "Class 9 Study Material" },
    { label: "Class 10 Study Material" },
    { label: "Class 11 Study Material" },
    { label: "Class 12 Study Material" },
    { label: "Class 8 Notes" },
    { label: "Class 9 Notes" },
    { label: "Class 10 Notes" },
    { label: "Class 11 Notes" },
    { label: "Class 12 Notes" },
  ];

  const handleViewAll = () => {
    console.log("View All Clicked");
  };

  return (
    <div className="flex items-center justify-center mt-[-70px]">
      <div className="w-full max-w-[1060px]">
        <CourseCard
          title="DSA"
          items={dsa}
          onViewAll={handleViewAll}
          backgroundColor="bg-[#5486bd]"
        />

        <CourseCard
          title="Web Development"
          items={webDevelopment}
          onViewAll={handleViewAll}
          backgroundColor={"bg-[#ae84d1]"}
        />
        <CourseCard
          title="AI ML & Data Science"
          items={aiMlDataScience}
          onViewAll={handleViewAll}
          backgroundColor={"bg-[#d5a05a]"}
        />
      </div>
    </div>
  );
};

export default CourseContent;
