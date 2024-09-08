/* eslint-disable no-unused-vars */
import React from "react";
import { dataStructures } from "../../public/data/dataStructure";

const DataStructure = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl p-6 text-white shadow-lg mt-3">
      <h1 className="text-2xl font-medium text-green-600 underline hover:cursor-pointer mb-6">{dataStructures.title}</h1>
      <p className="text-lg mb-8">{dataStructures.description}</p>

      {dataStructures.topics.map((topic, index) => (
        <div key={index} className="mb-10">
          <h2 className="text-3xl font-semibold mb-3">{topic.heading}</h2>
          <p className="mt-2 text-sm text-gray-400">{topic.description}</p>

          {topic.sections.map((section, idx) => (
            <div key={idx} className="mt-6 mb-6">
              <h3 className="text-2xl font-bold mb-2">{section.heading}</h3>
              <p className="text-xl font-medium">{section.subHeading}</p>

              <div className="mt-4">
                <h4>{section.linkHead}</h4>
                <p>{section.answerHead}</p>

                <h5 className="mt-2">{section.linkHead2}</h5>
                <p>{section.answerHead2}</p>

                <ul className="list-disc ml-5 space-y-1 mt-3">
                  {section.answerLists.map((item, listIdx) => (
                    <li key={listIdx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-xl font-semibold">Applications:</h4>
                <ul className="list-disc ml-5 space-y-1">
                  {section.applications.map((app, appIdx) => (
                    <li key={appIdx}>{app}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <h4 className="text-xl font-semibold">Related Topics:</h4>
                <ul className="list-disc ml-5 space-y-1">
                  {section.relatedTopics.map((topic, topicIdx) => (
                    <li key={topicIdx}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default DataStructure;
