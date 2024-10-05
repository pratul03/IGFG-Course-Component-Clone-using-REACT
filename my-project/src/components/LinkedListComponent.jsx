import { useEffect, useState } from "react";
import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { Link } from "react-router-dom";
import { LinkList } from "../../public/data/LinkList";

const LinkedListComponent = () => {
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
        {LinkList[0]?.topics?.map((item, index) => (
          <div key={index} className="flex flex-col mb-4">
            <h3 className="text-3xl font-semibold mb-2">{item.title}</h3>
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
            <span>
              {item.heading && (
                <span>
                  <p className="text-2xl font-semibold mt-4">{item.heading}</p>
                  <p>
                    {item.content && (
                      <p className="text-lg font-normal mt-2">{item.content}</p>
                    )}
                  </p>
                </span>
              )}
            </span>
            <span>
              {item.sectionHeading && (
                <div className="mt-4">
                  <Link className="text-2xl font-semibold text-greenGFG underline">
                    {item.sectionHeading}
                  </Link>
                  <p>
                    {item.sectionContent && (
                      <p className="text-lg font-normal mt-2">
                        {item.sectionContent}
                      </p>
                    )}
                  </p>
                </div>
              )}
            </span>
            <div>
              {item.sections?.map((section, secIndex) => (
                <div key={secIndex} className="mt-6">
                  <h4 className="text-xl font-semibold mb-2">
                    {section.heading}
                  </h4>
                  <p className="text-[20px] my-3">{section.content}</p>
                  <div className="mt-5">
                    {section.contentList && (
                      <ul className="list-disc pl-5">
                        {section.contentList.map((listItem, listIndex) => {
                          const [boldText, normalText] = listItem.split(":");
                          return (
                            <li key={listIndex}>
                              <strong>{boldText}</strong>:
                              <span className="text-lg">{normalText}</span>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedListComponent;
