import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { allCoursesData } from "../../public/data/dsaCard.js";
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
            {/* Display topic content */}

            <p className="text-lg text-slate-200">
              <span className="font-bold mr-2">{topic.boldText}</span>
              {topic.description}
            </p>
            <span className="flex flex-col justify-center content-center items-center">
              <img
                src={topic.image}
                alt={topic.label}
                className="mt-4 rounded-lg w-[600px] h-[40vh]"
              />
              <p className="text-stone-500/70 italic text-xs font-normal">
                {" "}
                {topic.imgDescription}
              </p>
            </span>

            {/* Display sections and sub-sections */}
            <div className="mt-6">
              {topic.sections.map((section, index) => (
                <div key={index} className="mb-6">
                  <h2 className="text-2xl font-bold mb-2">{section.heading}</h2>
                  <p className="text-xl font-medium">{section.subHeading}</p>
                  <p className="text-sm text-white mb-4">{section.content}</p>
                  <span className="flex flex-col gap-y-2 mb-2">
                    <Link
                      to={"#"}
                      className="text-green-600 underline text-2xl font-normal tracking-wide"
                    >
                      {section.linkHead}
                    </Link>
                    <p className="text-lg font-normal tracking-normal">
                      <span className="font-bold mr-2">{topic.boldText}</span>
                      {section.answerHead}
                    </p>
                  </span>
                  <span className="flex flex-col gap-y-2 mb-2">
                    <Link
                      to={"#"}
                      className="text-green-600 underline text-2xl font-normal tracking-wide"
                    >
                      {section.linkHead2}
                    </Link>
                    <p className="text-lg font-normal tracking-normal">
                      {section.answerHead2}
                    </p>
                    <ol className="list-decimal ml-5 space-y-2 font-normal">
                      {section.answerLists?.map((step, index) => {
                        // Check if it's the last item in the array
                        const isLastItem =
                          index === section.answerLists.length - 1;

                        return (
                          <li key={index} className="text-xl">
                            {isLastItem ? (
                              <Link
                                to={"#"}
                                className="text-green-600 underline"
                              >
                                {step}
                              </Link>
                            ) : (
                              step
                            )}
                          </li>
                        );
                      })}
                    </ol>
                  </span>
                  <span className="flex flex-col justify-center content-center items-center">
                    {section.sectionImg && (
                      <>
                        <img
                          src={section.sectionImg}
                          alt={section.sectionImgAlt || "Section image"}
                          className="mt-4 rounded-lg w-[400px] h-[40vh]"
                        />
                        {section.sectionImgAlt && (
                          <p className="text-stone-500/70 italic text-xs font-normal">
                            {section.sectionImgAlt}
                          </p>
                        )}
                      </>
                    )}
                  </span>
                  <span className="flex flex-col gap-y-3">
                    <p className="text-lg font-normal">{section.extraText1}</p>

                    <p className="text-lg font-normal">{section.extraText1}</p>

                    <p className="text-lg font-normal">{section.extraText3}</p>
                    <ul className="list-disc font-bold ml-5 space-y-2 text-lg tracking-wide">
                      {section.extraText3SubParts?.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      )) || ""}
                    </ul>
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Topic Not Found</p>
        )}
      </div>
    </div>
  );
};

export default MainContent;
