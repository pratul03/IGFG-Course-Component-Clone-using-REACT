import { ArrowRightIcon } from "@radix-ui/react-icons";
import React from "react";

const CourseCard = ({ title, items, onViewAll, backgroundColor }) => {
  return (
    <div className="p-6 rounded-lg max-w-[1060px] overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-2xl font-semibold">{title}</h2>
        <button
          onClick={onViewAll}
          className="text-sm text-gray-400 hover:text-white focus:outline-none"
        >
          View All
        </button>
      </div>
      <div
        className=" overflow-x-auto lg:overflow-visible scroll-smooth scrollbar-hidden"
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex flex-nowrap gap-4 lg:grid lg:grid-cols-3 xl:grid-cols-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`${backgroundColor} p-4 rounded-lg flex flex-col justify-center items-center flex-shrink-0 w-[240px] h-[100px]`}
            >
              <span className="text-white truncate text-base">
                {item.label}
              </span>
              <span className="text-white ml-2">
                <ArrowRightIcon className="w-5 h-5" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
