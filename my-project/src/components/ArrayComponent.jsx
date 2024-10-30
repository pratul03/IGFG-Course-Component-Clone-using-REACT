import { useEffect, useState } from "react";
import { array } from "../../public/data/array";
import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";

const ArrayComponent = () => {
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
        {array[0]?.topics?.map((item, index) => (
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
            <span className="flex flex-col justify-center content-center items-center">
              {item.image && (
                <img
                  src={item.image}
                  alt={item.imageDescription || "Image"}
                  className="mt-4 rounded-lg w-[600px] h-[40vh]"
                />
              )}
              {item.imageDescription && (
                <p className="text-stone-500/70 italic text-xs font-normal mt-[0.5px]">
                  {item.imageDescription}
                </p>
              )}
            </span>
            {item.sections?.map((section, secIndex) => (
              <div key={secIndex} className="mt-6">
                <h4 className="text-2xl font-semibold mb-2">
                  {section.heading}
                </h4>
                <p className="text-[20px] my-3">{section.content}</p>
                <span>
                  {section.contentList && (
                    <ul className="list-disc pl-5">
                      {section.contentList.map((listItem, listIndex) => (
                        <li key={listIndex} className="text-[20px] font-normal">
                          <span>{listItem}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
                <span>
                  {section.contentList1 && (
                    <ul className="list-disc pl-5">
                      {section.contentList1.map((listItem, listIndex) => {
                        const [boldText, normalText] = listItem.split(":");
                        return (
                          <li key={listIndex}>
                            <span className="font-semibold text-[20px]">
                              {boldText}
                            </span>
                            <span className="text-[20px]">
                              {normalText && `: ${normalText}`}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </span>
                <span>
                  {section.langList && (
                    <ul className="list-disc ml-6">
                      {section.langList.map((listItem, listIndex) => (
                        <li key={listIndex}>
                          <Link
                            to={listItem.path} // Navigate to the specified path
                            className="text-[20px] text-greenGFG underline tracking-wide"
                          >
                            {listItem.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </span>
              </div>
            ))}
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

export default ArrayComponent;
