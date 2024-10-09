import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stack } from "../../public/data/stack";
import CardContainer from "../CardContainer";

const StackComponent = () => {
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
    <div className="flex w-full mt-[-20px] ml-[-20px] flex-col">
      <div className="left-0 flex flex-col w-[75%] max-w-5xl mr-auto p-6 text-white shadow-lg">
        {stack[0]?.topics?.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="mt-2 text-sm font-semibold text-gray-200 flex items-center">
              {updateTime}
              <div className="flex ml-auto gap-3 text-white relative">
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
            <p className="text-lg">{item.description}</p>
            {/**image */}
            <span className="flex flex-col justify-center content-center items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.imageDescription || "Image"}
                  className="mt-4 rounded-lg w-[600px] h-[40vh]"
                />
              )}
            </span>
            {/** sections */}
            <div>
              {item.sections.map((section, index) => (
                <div key={index} className="flex flex-col mb-4">
                  {section.heading && (
                    <h4 className="text-2xl font-semibold mt-4 mb-2">
                      {section.heading}
                    </h4>
                  )}
                  {section.description && (
                    <p className="text-lg">{section.description}</p>
                  )}
                  {section.listHead && (
                    <h4 className="text-lg font-semibold mt-4 mb-2">
                      {section.listHead}
                    </h4>
                  )}
                  {section.lists && (
                    <ul className="list-disc list-inside text-lg">
                      {section.lists.map((list, index) => (
                        <li key={index}>{list}</li>
                      ))}
                    </ul>
                  )}
                  {section.title && (
                    <h4 className="text-2xl font-semibold mt-4 mb-2">
                      {section.title}
                    </h4>
                  )}
                  {section.listItem && (
                    <ul className="list-disc text-lg">
                      {section.listItem.map((item, index) => {
                        const [label, desc] = item.split(":");
                        return (
                          <li key={index} className="ml-4">
                            <span className="font-semibold text-[18px]">
                              {label} :{" "}
                            </span>
                            <span className="text-[18px] font-normal my-5">
                              {desc?.trim()}{" "}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                  {section.applicationHeading && (
                    <h4 className="text-2xl font-semibold mt-4 mb-2">
                      {section.applicationHeading}
                    </h4>
                  )}
                  {section.applicationList && (
                    <ul className="list-disc text-lg ml-4">
                      {section.applicationList.map((item, index) => (
                        <li key={index}>
                          <span className="font-normal text-[18px]">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <span>
          <Link to={"/"}>
            <CardContainer />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default StackComponent;
