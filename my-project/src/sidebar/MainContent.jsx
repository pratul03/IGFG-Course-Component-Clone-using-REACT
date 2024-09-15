/* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/rules-of-hooks */
// import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
// // eslint-disable-next-line no-unused-vars
// import React, { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import { allCoursesData } from "../../public/data/dsaCard.js";
// import DataStructure from "../components/DataStructure.jsx";
// import ArrayComponent from "../components/ArrayComponent.jsx";
// import LinkedListComponent from "../components/LinkedListComponent.jsx";
// import SearchingAlgorithmsComponent from "../components/SearchingAlgorithmsComponent.jsx";
// import StackComponent from "../components/StackComponent.jsx";
// import SortingAlgorithmsComponent from "../components/SortingAlgorithmsComponent.jsx";
// import QueueComponent from "../components/QueueComponent.jsx";
// import TreeComponent from "../components/TreeComponent.jsx";
// import GraphComponent from "../components/GraphComponent.jsx";
// import Sidebar from "./SideBar.jsx";

// const MainContent = () => {
//   const { courseId, topicId } = useParams();
//   const [updateTime, setUpdateTime] = useState("");

//   // Find course data matching the courseId
//   const course = allCoursesData.find(
//     (course) => course.title.toLowerCase().replace(/ /g, "-") === courseId
//   );

//   if (!course) {
//     return <div>Course Not Found</div>;
//   }

//   // Find topic based on topicId
//   const topic = course.topics.find(
//     (topic) => topic.label.toLowerCase().replace(/ /g, "-") === topicId
//   );

//   // Function to format the last modified time
//   const formatUpdateTime = () => {
//     const now = new Date();
//     return now.toLocaleString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//       hour: "numeric",
//       minute: "numeric",
//       hour12: true,
//     });
//   };

//   useEffect(() => {
//     // Set the update time when the topic changes
//     if (topic) {
//       setUpdateTime(`Last Updated: ${formatUpdateTime()}`);
//     }
//   }, [topic]);

//   // Function to render the appropriate component based on the topicId
//   const renderComponent = () => {
//     switch (topicId) {
//       case "analysis-of-algorithms":
//         return <DataStructure />;
//       case "array":
//         return <ArrayComponent />;
//       case "linked-list":
//         return <LinkedListComponent />;
//       case "searching-algorithms":
//         return <SearchingAlgorithmsComponent />;
//       case "stack":
//         return <StackComponent />;
//       case "sorting-algorithms":
//         return <SortingAlgorithmsComponent />;
//       case "queue":
//         return <QueueComponent />;
//       case "tree":
//         return <TreeComponent />;
//       case "graph":
//         return <GraphComponent />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex w-full">
//       {/* Sidebar to navigate between topics */}
//       <Sidebar courseId={courseId} topics={course.topics} />

//       <div className="left-0 flex flex-col w-3/4 max-w-4xl mr-auto p-6 text-white shadow-lg mt-3">
//         <h1 className="text-3xl font-semibold mb-3">
//           {topic ? topic.heading : course.title}
//         </h1>
//         {topic && (
//           <>
//             <p className="mt-2 text-sm text-gray-400 flex items-center">
//               {updateTime}
//               <div className="flex ml-[450px] gap-3 text-white relative">
//                 {/* MessageCircle Icon */}
//                 <div className="relative group">
//                   <MessageCircle className="h-5 cursor-pointer hover:text-gray-500" />
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
//                     comments
//                   </div>
//                 </div>

//                 {/* Pencil Icon */}
//                 <div className="relative group">
//                   <Pencil className="h-5 cursor-pointer hover:text-gray-500" />
//                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
//                     improve
//                   </div>
//                 </div>

//                 {/* Ellipsis Icon */}
//                 <div className="relative group">
//                   <Ellipsis className="rotate-[90deg] h-5 cursor-pointer hover:text-gray-500" />
//                 </div>
//               </div>
//             </p>
//             <hr className="border-t border-gray-200/30 my-2" />
//             {/* Display topic content */}
//             <p className="text-lg text-slate-200">
//               {topic.boldText && (
//                 <span className="font-bold mr-2">{topic.boldText}</span>
//               )}
//               {topic.description}
//             </p>
//             {topic.image && (
//               <span className="flex flex-col justify-center content-center items-center">
//                 <img
//                   src={topic.image}
//                   alt={topic.label}
//                   className="mt-4 rounded-lg w-[600px] h-[40vh]"
//                 />
//                 {topic.imgDescription && (
//                   <p className="text-stone-500/70 italic text-xs font-normal mt-[0.5px]">
//                     {topic.imgDescription}
//                   </p>
//                 )}
//               </span>
//             )}

//             {/* Display sections and sub-sections */}
//             <div className="mt-6">
//               {topic.sections &&
//                 topic.sections.map((section, index) => (
//                   <div key={index} className="mb-6">
//                     {section.heading && (
//                       <h2 className="text-2xl font-bold mb-2">
//                         {section.heading}
//                       </h2>
//                     )}
//                     {section.subHeading && (
//                       <p className="text-xl font-medium">
//                         {section.subHeading}
//                       </p>
//                     )}
//                     {section.content && (
//                       <p className="text-lg text-white mb-4">
//                         {section.content}
//                       </p>
//                     )}
//                     <span className="flex flex-col gap-y-2 mb-2">
//                       {section.linkHead && (
//                         <Link
//                           to={"#"}
//                           className="text-green-600 underline text-2xl font-normal tracking-wide"
//                         >
//                           {section.linkHead}
//                         </Link>
//                       )}
//                       {section.answerHead && (
//                         <p className="text-lg font-normal tracking-normal">
//                           {section.answerHead}
//                         </p>
//                       )}
//                     </span>
//                     <span className="flex flex-col gap-y-2 mb-2">
//                       {section.linkHead2 && (
//                         <Link
//                           to={"#"}
//                           className="text-green-600 underline text-2xl font-normal tracking-wide"
//                         >
//                           {section.linkHead2}
//                         </Link>
//                       )}
//                       {section.answerHead2 && (
//                         <p className="text-lg font-normal tracking-normal">
//                           {section.answerHead2}
//                         </p>
//                       )}
//                       {section.answerLists && (
//                         <ol className="list-decimal ml-5 space-y-2 font-normal">
//                           {section.answerLists.map((step, idx) => {
//                             const isLastItem =
//                               idx === section.answerLists.length - 1;

//                             return (
//                               <li key={idx} className="text-xl">
//                                 {isLastItem ? (
//                                   <Link
//                                     to={"#"}
//                                     className="text-green-600 underline"
//                                   >
//                                     {step}
//                                   </Link>
//                                 ) : (
//                                   step
//                                 )}
//                               </li>
//                             );
//                           })}
//                         </ol>
//                       )}
//                     </span>
//                     {section.sectionImg && (
//                       <span className="flex flex-col justify-center content-center items-center">
//                         <img
//                           src={section.sectionImg}
//                           alt={section.sectionImgAlt || "Section image"}
//                           className="mt-4 rounded-lg w-[400px] h-[40vh]"
//                         />
//                         {section.sectionImgAlt && (
//                           <p className="text-stone-500/70 italic text-xs font-normal">
//                             {section.sectionImgAlt}
//                           </p>
//                         )}
//                       </span>
//                     )}
//                     <span className="flex flex-col gap-y-3">
//                       {section.extraText1 && (
//                         <p className="text-lg font-normal">
//                           {section.extraText1}
//                         </p>
//                       )}
//                       {section.extraText2 && (
//                         <p className="text-lg font-normal">
//                           {section.extraText2}
//                         </p>
//                       )}
//                       {section.extraText3 && (
//                         <>
//                           <p className="text-lg font-normal">
//                             {section.extraText3}
//                           </p>
//                           <ul className="list-disc font-bold ml-5 space-y-2 text-lg tracking-wide">
//                             {section.extraText3SubParts &&
//                               section.extraText3SubParts.map((item, idx) => (
//                                 <li key={idx}>{item}</li>
//                               ))}
//                           </ul>
//                         </>
//                       )}
//                       {section.extraText4 && (
//                         <p className="text-lg font-normal">
//                           {section.extraText4}
//                           <Link
//                             to={"#"}
//                             className="text-green-600 underline font-semibold"
//                           >
//                             {section.extraText4Sub}
//                           </Link>
//                         </p>
//                       )}
//                       {section.extraText5 && (
//                         <p className="text-lg font-normal">
//                           {section.extraText5}
//                         </p>
//                       )}
//                       {/* Render the appropriate component based on the topic */}
//                       <span className="ml-[-20px] text-lg font-normal">
//                         {renderComponent()}
//                       </span>
//                     </span>
//                   </div>
//                 ))}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MainContent;

import React from "react";
import { useParams } from "react-router-dom";
import Sidebar from "./SideBar.jsx";
import DataStructure from "../components/DataStructure.jsx";
import ArrayComponent from "../components/ArrayComponent.jsx";
import LinkedListComponent from "../components/LinkedListComponent.jsx";
import SearchingAlgorithmsComponent from "../components/SearchingAlgorithmsComponent.jsx";
import StackComponent from "../components/StackComponent.jsx";
import SortingAlgorithmsComponent from "../components/SortingAlgorithmsComponent.jsx";
import QueueComponent from "../components/QueueComponent.jsx";
import TreeComponent from "../components/TreeComponent.jsx";
import GraphComponent from "../components/GraphComponent.jsx";
import { allCoursesData } from "../../public/data/dsaCard.js";

const MainComponent = () => {
  const { courseId, topicId } = useParams();

  // Find course data matching the courseId
  const course = allCoursesData.find(
    (course) => course.title.toLowerCase().replace(/ /g, "-") === courseId
  );

  if (!course) {
    return <div>Course Not Found</div>;
  }

  // Function to render the appropriate component based on the topicId
  const renderComponent = () => {
    switch (topicId) {
      case "analysis-of-algorithms":
        return (
          <DataStructure
            topic={course.topics.find(
              (t) => t.label === "Analysis of Algorithms"
            )}
          />
        );
      case "array":
        return <ArrayComponent />;
      case "linked-list":
        return <LinkedListComponent />;
      case "searching-algorithms":
        return <SearchingAlgorithmsComponent />;
      case "stack":
        return <StackComponent />;
      case "sorting-algorithms":
        return <SortingAlgorithmsComponent />;
      case "queue":
        return <QueueComponent />;
      case "tree":
        return <TreeComponent />;
      case "graph":
        return <GraphComponent />;
      default:
        return <div>Topic Not Found</div>;
    }
  };

  return (
    <div className="flex w-full">
      {/* Sidebar to navigate between topics */}
      <Sidebar courseId={courseId} topics={course.topics} />

      <div className="flex-grow p-6 text-white">{renderComponent()}</div>
    </div>
  );
};

export default MainComponent;
