/* eslint-disable no-unused-vars */

import React, { useEffect, useState } from "react";
import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { dataStructures } from "../../public/data/dataStructure";
import { Link } from "react-router-dom";
import TreeClassificationTable from "./TreeClassificationTable";

const DataStructure = () => {
  const [updateTime, setUpdateTime] = useState("");

  const formatUpdateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();
    return `${day} ${month}, ${year}`; // Format it as "14 Sep, 2024"
  };

  useEffect(() => {
    setUpdateTime(`Last Updated: ${formatUpdateTime()}`);
  }, []);

  return (
    <div className="flex w-full mt-[-20px]">
      <div className="left-0 flex flex-col w-[75%] max-w-5xl mr-auto p-6 text-white shadow-lg">
        {dataStructures.topic?.map((item, index) => (
          <div key={index}>
            <h1 className="text-2xl font-semibold mb-3">{item.heading}</h1>
            <p className="mt-2 text-sm text-gray-200 flex items-center">
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
            <span className="text-lg text-slate-200 tracking-normal">
              {item.boldText && (
                <span className="font-bold mr-2">{item.boldText}</span>
              )}
              {item.description}
            </span>
            <span className="flex flex-col justify-center content-center items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.label}
                  className="mt-4 rounded-lg w-[600px] h-[40vh]"
                />
              )}
              {item.imgDescription && (
                <p className="text-stone-500/70 italic text-xs font-normal mt-[0.5px] ">
                  {item.imgDescription}
                </p>
              )}
            </span>
            <div className="mt-6 ml-[-20px]">
              {item.sections &&
                item.sections.map((section, index) => (
                  <div key={index} className="mb-6">
                    {section.heading && (
                      <h2 className="text-xl font-bold my-2">
                        {section.heading}
                      </h2>
                    )}
                    {section.subHeading && (
                      <p className="text-lg font-medium my-2">
                        {section.subHeading}
                        <span className="font-bold">
                          {section.subHeadingLists && (
                            <ul className="list-disc ml-10 my-4 space-y-2 font-normal">
                              {section.subHeadingLists.map((item, idx) => (
                                <li key={idx}>{item}</li>
                              ))}
                            </ul>
                          )}
                        </span>
                        <span>
                          {section.underSub && (
                            <p className="text-lg font-normal my-2">
                              {section.underSub}
                            </p>
                          )}
                        </span>
                      </p>
                    )}
                    <span className="flex flex-col gap-y-2 my-2">
                      {section.linkHead && (
                        <Link
                          to={"#"}
                          className="text-green-600 underline text-2xl font-normal tracking-wide"
                        >
                          {section.linkHead}
                        </Link>
                      )}
                      {section.answerHead && (
                        <p className="text-lg font-normal tracking-normal">
                          {section.linkAns && (
                            <p>
                              <span className="font-bold mr-1">
                                {section.linkAns}
                              </span>
                              {section.answerHead}
                            </p>
                          )}
                        </p>
                      )}
                    </span>
                    <span className="flex flex-col gap-y-2 mb-2">
                      {section.linkHead2 && (
                        <Link
                          to={"#"}
                          className="text-green-600 underline text-2xl font-normal tracking-wide"
                        >
                          {section.linkHead2}
                        </Link>
                      )}
                      {section.answerHead2 && (
                        <p className="text-lg font-normal tracking-normal">
                          {section.answerHead2}
                        </p>
                      )}
                      {section.answerLists && (
                        <ol className="list-decimal ml-5 space-y-2 font-normal">
                          {section.answerLists.map((step, idx) => {
                            const isLastItem =
                              idx === section.answerLists.length - 1;

                            return (
                              <li key={idx} className="text-xl">
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
                      )}
                    </span>
                    {section.sectionImg && (
                      <span className="flex flex-col justify-center content-center items-center">
                        <img
                          src={section.sectionImg}
                          alt={section.sectionImgAlt || "Section image"}
                          className="mt-4 rounded-lg w-[850px] h-[30vh] ml-[-40px]"
                        />
                        {section.sectionImgAlt && (
                          <p className="text-stone-500/70 italic text-xs font-normal">
                            {section.sectionImgAlt}
                          </p>
                        )}
                      </span>
                    )}
                    <span className="flex flex-col gap-y-3">
                      {section.extraText1 && (
                        <p className="text-lg font-normal">
                          {section.extraText1}
                        </p>
                      )}
                      {section.extraText2 && (
                        <p className="text-lg font-normal">
                          {section.extraText2}
                        </p>
                      )}
                      {section.extraText3 && (
                        <>
                          <p className="text-lg font-normal">
                            {section.extraText3}
                          </p>
                          <ul className="list-disc font-semibold ml-5 space-y-2 text-lg tracking-wide">
                            {section.extraText3SubParts &&
                              section.extraText3SubParts.map((item, idx) => (
                                <li key={idx}>
                                  <Link className="text-green-600 underline">
                                    {item}
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </>
                      )}
                      {section.extraText4 && (
                        <p className="text-lg font-normal">
                          {section.extraText4}
                          <Link
                            to={"#"}
                            className="text-green-600 underline font-semibold"
                          >
                            {section.extraText4Sub}
                          </Link>
                        </p>
                      )}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}

        <div className="flex flex-col w-full p-6 text-white shadow-lg mt-[-20px] ml-[-20px]">
          {/* Topics List */}
          {Array.isArray(dataStructures.topics) && (
            <ol className="list-decimal ml-2 font-bold text-2xl">
              {dataStructures.topics.map((topic, index) => (
                <li key={index} className="mb-10">
                  <Link className="font-normal text-2xl text-green-600 underline mb-3">
                    {topic.heading}
                  </Link>
                  {topic.topicsFr && (
                    <div className="text-lg font-normal text-gray-100">
                      {/* Wrap the topic headings in a single <ol> */}
                      <ol className="list-decimal pl-5 text-xl font-normal text-white">
                        {topic.topicsFr.map((topicItem, index) => (
                          <div key={index} className="mb-6">
                            {/* Render the topic heading inside the <li> */}
                            <li className="my-4">
                              <Link className="text-green-600 underline">
                                {topicItem.topicHeading}
                              </Link>
                            </li>

                            {/* Render the topic heading description */}
                            <p className="mb-4 text-lg">
                              {topicItem.topicHeadingDescription}
                            </p>

                            {/**Topic table */}
                            {topicItem.AlgoMathData && (
                              <div className="overflow-x-auto my-6">
                                <table className="min-w-full border border-gray-800 text-white">
                                  <thead>
                                    <tr>
                                      <th className="px-6 py-3 border border-gray-400 text-center text-xl font-bold bg-stone-700/50">
                                        {topicItem.algoHeading1}
                                      </th>
                                      <th className="px-6 py-3 border border-gray-400 text-xl font-bold bg-stone-700/50 text-center">
                                        {topicItem.algoHeading2}
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {topicItem.AlgoMathData.map(
                                      (data, index) => (
                                        <tr key={index}>
                                          <td className="px-6 py-4 border border-gray-400 font-medium text-base text-green-600 underline">
                                            <Link to={data.link}>
                                              {data.algo}
                                            </Link>
                                          </td>
                                          <td className="px-6 py-4 border border-gray-400 font-medium text-base text-center">
                                            {data.description}
                                          </td>
                                        </tr>
                                      )
                                    )}
                                  </tbody>
                                </table>
                                <div className="my-4">
                                  <p className="font-semibold mb-2">
                                    Related Topics:
                                  </p>
                                  <ul className="list-disc ml-5">
                                    {topicItem.relatedTopics &&
                                      topicItem.relatedTopics.map(
                                        (topic, index) => (
                                          <li key={index}>
                                            <Link
                                              to="#"
                                              className="text-green-600 underline text-lg font-normal tracking-wide ml-2"
                                            >
                                              {topic}
                                            </Link>
                                          </li>
                                        )
                                      )}
                                  </ul>
                                </div>
                              </div>
                            )}

                            {/* Render the topic heading list */}
                          </div>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Topic Description */}
                  {topic.description && (
                    <p className="mt-2 text-lg font-medium text-gray-100">
                      {topic.description}
                      <ol className="list-decimal mt-1 mb-4 font-normal">
                        {topic.topicList &&
                          topic.topicList.map((topic, index) => {
                            const [boldText, normalText] = topic.split(":");
                            return (
                              <li key={index}>
                                <Link className="text-green-600 underline">
                                  {boldText}
                                </Link>
                                :{normalText}
                              </li>
                            );
                          })}
                      </ol>
                    </p>
                  )}
                  {topic.notation && (
                    <Link className="mt-2 text-lg font-medium text-green-600 ml-[-10px] underline">
                      {topic.notation}
                    </Link>
                  )}
                  {topic.notationDescription && (
                    <p className="ml-[-10px] text-lg font-normal text-gray-100 mt-6">
                      {topic.notationDescription}
                    </p>
                  )}
                  {topic.complexityData && (
                    <div className="overflow-x-auto my-6">
                      <table className="min-w-full border border-gray-800  text-white">
                        <thead>
                          <tr>
                            <th className="px-6 py-3 border border-gray-400 text-left text-xl font-bold bg-stone-700/50">
                              Notation
                            </th>
                            <th className="px-6 py-3 border border-gray-400 text-center text-xl font-bold bg-stone-700/50">
                              Description
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {topic.complexityData.map((item, index) => (
                            <tr key={index}>
                              <td className="px-8 py-4 border border-gray-400 font-medium text-base">
                                <Link
                                  to={item.link}
                                  className="text-green-600 underline"
                                >
                                  {item.notation}
                                </Link>
                              </td>
                              <td className="px-6 py-4 border border-gray-400 font-normal text-base text-center">
                                {item.description}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {topic.afterDescription && (
                    <p className="mt-6 text-lg font-normal text-gray-100">
                      {topic.afterDescription}
                    </p>
                  )}
                  {topic.related && (
                    <ul className="font-semibold text-lg my-4">
                      <p>{topic.related} :</p>
                      <span>
                        {topic.relatedTopics && (
                          <ul className="list-disc ml-5">
                            {topic.relatedTopics.map((topic, index) => (
                              <li key={index}>
                                <Link className="text-green-600 underline text-lg font-normal tracking-wide">
                                  {topic}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </span>
                    </ul>
                  )}
                  {/* Topic Sections */}
                  <ul className="list-disc ml-[-15px]">
                    {Array.isArray(topic.sections) &&
                      topic.sections.map((section, idx) => (
                        <li key={idx} className="mt-6 mb-6">
                          {/* Section Heading */}
                          {section.heading && (
                            <div className="my-4">
                              <Link
                                to={"#"}
                                className="text-xl font-semibold text-green-600 underline"
                              >
                                {section.heading}
                              </Link>
                              <span>
                                {section.answerLists && (
                                  <ul className="list-[circle] ml-10 space-y-2 font-normal text-xl">
                                    {section.answerLists.map((step, idx) => (
                                      <li key={idx}>{step}</li>
                                    ))}
                                  </ul>
                                )}
                              </span>
                            </div>
                          )}
                          {/** Section heading2 */}
                          {section.heading2 && (
                            <div className="my-4">
                              <li>
                                <Link
                                  to={"#"}
                                  className="text-xl font-semibold text-green-600 underline"
                                >
                                  {section.heading2}
                                </Link>
                                <span>
                                  {section.headSub && (
                                    <ul className="list-[circle] ml-10 space-y-2 font-normal text-xl">
                                      {section.headSub.map((step, idx) => (
                                        <li key={idx}>{step}</li>
                                      ))}
                                    </ul>
                                  )}
                                </span>
                              </li>
                            </div>
                          )}
                          {/* Section Characteristics */}
                          {section.characteristics && (
                            <div className="mb-2">
                              <strong>{section.characteristics}</strong>
                              {section.details && (
                                <ul className="list-disc ml-5">
                                  {section.details.map((detail, idx) => (
                                    <li key={idx} className="mb-2">
                                      {detail}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          )}
                        </li>
                      ))}
                  </ul>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="w-full flex flex-col p-6 text-white shadow-lg mt-8">
          <TreeClassificationTable />
        </div>
      </div>
    </div>
  );
};

export default DataStructure;
