/* eslint-disable no-unused-vars */
import React from "react";
import { dataStructures } from "../../public/data/dataStructure";
import { Link } from "react-router-dom";

const DataStructure = () => {
  return (
    <div className="flex flex-col w-full max-w-4xl p-6 text-white shadow-lg mt-3">
      <h1 className="text-2xl font-medium text-green-600 underline hover:cursor-pointer mb-6">
        {dataStructures.title}
      </h1>
      <p className="text-lg mb-4">{dataStructures.description}</p>
      <p className="text-lg mb-8">{dataStructures.description1}</p>
      <p className="text-xl font-semibold mb-8">{dataStructures.heading}</p>

      <ol className="list-decimal ml-2">
        {dataStructures.topics.map((topic, index) => (
          <li key={index} className="mb-10">
            <h2 className="text-xl font-medium text-green-600 underline hover:cursor-pointer mb-3">
              {topic.heading}
            </h2>
            <p className="mt-2 text-lg font-medium text-gray-100">
              {topic.description}
            </p>

            <ul className="list-disc ml-2">
              {topic.sections.map((section, idx) => (
                <li key={idx} className="mt-6 mb-6">
                  <Link
                    className="text-xl font-medium text-green-600 mb-2 underline"
                    to="#"
                  >
                    {section.heading}
                  </Link>

                  <div className="mt-4">
                    <ul className="list-[circle] ml-16 space-y-1 mt-3">
                      {section.answerLists?.map((item, listIdx) => {
                        const [firstWord, ...rest] = item.split(": ");
                        return (
                          <li key={listIdx}>
                            <span className="font-semibold">{firstWord}:</span>{" "}
                            {rest.join(": ")}
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-4">
                    {section.heading2 && (
                      <li>
                        <Link
                          className="
          text-xl font-medium text-green-600 underline hover:cursor-pointer mb-3"
                        >
                          {section.heading2}
                        </Link>
                      </li>
                    )}
                    {section.headSub && section.headSub.length > 0 && (
                      <ul className="list-[circle] ml-16 space-y-1 mt-3">
                        {section.headSub.map((item, listIdx) => {
                          const [firstWord, ...rest] = item.split(": ");
                          return (
                            <li key={listIdx}>
                              <span className="font-semibold">
                                {firstWord}:
                              </span>{" "}
                              {rest.join(": ")}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>

                  <div className="mt-4">
                    <li>
                      <Link
                        to="#"
                        className="text-xl text-green-600 underline font-medium"
                      >
                        {section?.applicationsHeading}
                      </Link>
                    </li>
                    <ul className="list-[circle] ml-16 space-y-1">
                      {section.applications?.map((app, appIdx) => (
                        <li key={appIdx}>{app}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <li>
                      <h4 className="text-lg font-semibold">Related Topics:</h4>
                    </li>
                    <ul className="list-[circle] ml-16 space-y-1">
                      {section.relatedTopics?.map((topic, topicIdx) => (
                        <li key={topicIdx}>
                          <Link
                            className="text-green-600 underline font-medium"
                            to="#"
                          >
                            {topic}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default DataStructure;
