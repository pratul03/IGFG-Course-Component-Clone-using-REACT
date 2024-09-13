/* eslint-disable no-unused-vars */
import React from "react";
import { dataStructures } from "../../public/data/dataStructure";
import { Link } from "react-router-dom";
import TreeClassificationTable from "./TreeClassificationTable";

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
            {topic.description && (
              <p className="mt-2 text-lg font-medium text-gray-100">
                {topic.description}{" "}
                {topic.greenText && (
                  <Link to={"#"} className="text-green-600 underline">
                    {" "}
                    {topic.greenText}
                  </Link>
                )}
                {topic.afterGreenText && ` ${topic.afterGreenText}`}
              </p>
            )}

            <ul className="list-disc ml-2">
              {topic.sections.map((section, idx) => (
                <li key={idx} className="mt-6 mb-6">
                  <div className="mb-5">
                    {section.characteristics && (
                      <li className="mb-2 font-semibold">
                        <p>{section.characteristics}</p>
                      </li>
                    )}
                    {section.characteristicsList &&
                      section.characteristicsList.length > 0 && (
                        <span>
                          {section.characteristicsList?.map((item, listIdx) => {
                            const [firstWord, ...rest] = item.split(": ");
                            return (
                              <li key={listIdx} className="ml-16 list-[circle]">
                                <span className="font-semibold">
                                  {firstWord}:
                                </span>{" "}
                                {rest.join(": ")}
                              </li>
                            );
                          })}
                        </span>
                      )}
                    {section.characteristics1 &&
                      section.characteristics1.length > 0 && (
                        <span>
                          {section.characteristics1?.map((item, listIdx) => {
                            const [firstWord, ...rest] = item.split(": ");
                            return (
                              <li key={listIdx} className="ml-16 list-[circle]">
                                <Link className="font-medium text-green-600 underline">
                                  {firstWord}:
                                </Link>{" "}
                                {rest.join(": ")}
                              </li>
                            );
                          })}
                        </span>
                      )}
                  </div>

                  {section.operations && (
                    <div>
                      <li className="mb-2 font-semibold">
                        <p>{section.operations}</p>
                      </li>
                      {section.operationsList &&
                        section.operationsList.length > 0 && (
                          <ul className="ml-16 list-[circle]">
                            {section.operationsList.map((item, listIdx) => {
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
                  )}
                  <li>
                    <Link
                      className="text-xl font-medium text-green-600 mb-2 underline"
                      to="#"
                    >
                      {section.heading}
                    </Link>
                    {section.headingDescription && (
                      <p className="text-lg text-gray-100">
                        {section.headingDescription}
                      </p>
                    )}
                  </li>

                  {section.answerLists && section.answerLists.length > 0 && (
                    <div className="mt-4">
                      <ul className="list-[circle] ml-16 space-y-1 mt-3">
                        {section.answerLists?.map((item, listIdx) => {
                          const [firstWord, ...rest] = item.split(": ");
                          return (
                            <li key={listIdx}>
                              <Link className="font-semibold ">
                                {firstWord}:
                              </Link>{" "}
                              {rest.join(": ")}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {section.heading1 && (
                    <li className="mt-4">
                      <Link
                        className="text-xl font-medium text-green-600 mb-4 underline"
                        to="#"
                      >
                        {section.heading1}
                      </Link>
                    </li>
                  )}
                  {section.answerLists1 && section.answerLists1.length > 0 && (
                    <div className="mt-4">
                      <ul className="list-[circle] ml-16 space-y-1 mt-3">
                        {section.answerLists1?.map((item, listIdx) => {
                          const [firstWord, ...rest] = item.split(": ");
                          return (
                            <li key={listIdx}>
                              <Link className="font-medium text-green-600 underline">
                                {firstWord}:
                              </Link>{" "}
                              {rest.join(": ")}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {section.classification && (
                    <li className="my-4 font-semibold">
                      <p>{section.classification}</p>
                      {section.classificationData && (
                        <li className="list-[circle] font-normal ml-16 space-y-1 mt-3">
                          {section.classificationData}
                        </li>
                      )}
                    </li>
                  )}
                  {topic.heading === "Tree" ? (
                    <TreeClassificationTable />
                  ) : (
                    <p>No Tree Classification Available</p>
                  )}
                  {section.answerLists2 && section.answerLists2.length > 0 && (
                    <div className="mt-4">
                      <ul className="list-[circle] ml-16 space-y-1 mt-3">
                        {section.answerLists2?.map((item, listIdx) => {
                          const [firstWord, ...rest] = item.split(": ");
                          return (
                            <li key={listIdx}>
                              <Link className="font-bold text-base">
                                {firstWord}:
                              </Link>{" "}
                              {rest.join(": ")}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {section.heading3 && (
                    <li>
                      <Link
                        className="
          text-xl font-medium text-green-600 underline hover:cursor-pointer mb-3"
                      >
                        {section.heading3}
                      </Link>
                    </li>
                  )}
                  {section.answerLists3 && section.answerLists3.length > 0 && (
                    <div className="mt-4">
                      <ul className="list-[circle] ml-16 space-y-1 mt-3">
                        {section.answerLists3?.map((item, listIdx) => {
                          const [firstWord, ...rest] = item.split(": ");
                          return (
                            <li key={listIdx}>
                              <Link className="font-medium text-green-600 underline text-lg">
                                {firstWord}:
                              </Link>{" "}
                              {rest.join(": ")}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
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
