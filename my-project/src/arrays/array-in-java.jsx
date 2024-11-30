import { useEffect, useState } from "react";
import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { arrayInJava } from "../../public/arraydata/arrayInJava";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, FilePenLine, Play } from "lucide-react";
import { FaCuttlefish } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";

const ArrayInjavaLang = () => {
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
  const [editableCode, setEditableCode] = useState({}); // Track editable code blocks

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  const toggleEdit = (key) => {
    setEditableCode((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCodeChange = (key, value) => {
    arrayInJava[0].topics[0].content = arrayInJava[0].topics[0].content.map(
      (item, idx) =>
        idx === key && item.type === "code" ? { ...item, code: value } : item
    );
  };

  return (
    <div className="flex w-full flex-col p-6 text-white">
      <div className="left-0 ml-[-10px] flex flex-col w-full max-w-5xl mx-auto text-white shadow-lg">
        {arrayInJava[0]?.topics?.map((topic, topicIndex) => (
          <div key={topicIndex} className="flex flex-col mb-8">
            <h3 className="text-2xl font-semibold mb-4">{topic.title}</h3>
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
            <hr className="border-t border-gray-200/30 my-4" />

            {topic.content.map((item, contentIndex) => {
              switch (item.type) {
                case "description":
                  return (
                    <p key={contentIndex} className="text-lg mb-4">
                      {item.text}
                    </p>
                  );
                case "heading":
                  return (
                    <h4
                      key={contentIndex}
                      className="text-xl font-semibold mb-4"
                    >
                      {item.text}
                    </h4>
                  );
                case "image":
                  return (
                    <div
                      key={contentIndex}
                      className="flex flex-col justify-center content-center items-center"
                    >
                      <img
                        src={item.url}
                        alt={item.description || "Image"}
                        className="mt-4 rounded-lg w-[450px] h-[35vh] ml-[-40px]"
                      />
                      {item.description && (
                        <p className="text-gray-400 italic text-sm mt-2">
                          {item.description}
                        </p>
                      )}
                    </div>
                  );
                case "syntax":
                  return (
                    <div key={contentIndex} className="my-4">
                      <p className="font-semibold mb-2">{item.description}</p>
                      <SyntaxHighlighter language="java" style={oneDark}>
                        {item.code}
                      </SyntaxHighlighter>
                    </div>
                  );
                case "example":
                  return (
                    <div key={contentIndex} className="my-6">
                      <h5 className="font-semibold text-lg mb-2">
                        {item.heading}
                      </h5>
                      <span>
                        {item.type === "example" && item.code && (
                          <SyntaxHighlighter language="java" style={oneDark}>
                            {item.code}
                          </SyntaxHighlighter>
                        )}
                      </span>
                    </div>
                  );
                case "list":
                  return (
                    <ul
                      key={contentIndex}
                      className="list-disc list-inside ml-6 mb-6"
                    >
                      {item.items.map((listItem, listIndex) => (
                        <li key={listIndex} className="mb-2">
                          <p className="text-xl font-semibold my-3">
                            {listItem.title}
                          </p>
                          <p className="font-normal">{listItem.description}</p>
                          {listItem.code && (
                            <SyntaxHighlighter language="java" style={oneDark}>
                              {listItem.code}
                            </SyntaxHighlighter>
                          )}
                          {listItem.image?.url && (
                            <div className="flex flex-col justify-center content-center items-center">
                              <img
                                src={listItem.image.url}
                                alt={listItem.image.description || "Image"}
                                className="mt-4 rounded-lg w-[550px] h-[40vh] ml-[-40px]"
                              />
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  );
                case "code":
                  return (
                    <div className="px-10 ml-[-20px]">
                      {item.type === "code" && item.heading && (
                        <h5 className="font-semibold text-2xl mb-4">
                          {item.heading}
                        </h5>
                      )}
                      {item.type === "code" && item.description && (
                        <p className="text-lg mb-4">{item.description}</p>
                      )}
                      <div
                        key={contentIndex}
                        className="bg-oneDark p-4 rounded-lg my-6"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex flex-col items-center gap-4">
                            {/* Icons only for "code" type */}
                            <FaCuttlefish size={24} color="#fff" />
                            <Copy
                              size={20}
                              className="cursor-pointer"
                              onClick={() => handleCopy(item.code)}
                              title="Copy Code"
                            />
                            <FilePenLine
                              size={20}
                              className="cursor-pointer"
                              onClick={() => toggleEdit(contentIndex)}
                              title="Edit Code"
                            />
                            <Play
                              size={20}
                              className="cursor-pointer"
                              onClick={() => alert("Code Running...")}
                              title="Run Code"
                            />
                          </div>
                          <div className="flex-1">
                            {editableCode[contentIndex] ? (
                              <textarea
                                value={item.code}
                                onChange={(e) =>
                                  handleCodeChange(contentIndex, e.target.value)
                                }
                                className="w-full bg-gray-900 text-white p-4 rounded-lg"
                                rows="8"
                              />
                            ) : (
                              <SyntaxHighlighter
                                language="java"
                                style={oneDark}
                                showLineNumbers
                              >
                                {item.code}
                              </SyntaxHighlighter>
                            )}
                          </div>
                        </div>
                      </div>
                      {item.type === "code" && item.outputHeading && (
                        <h5 className="font-semibold text-lg mb-2">
                          {item.outputHeading}
                        </h5>
                      )}
                      {item.type === "code" && item.output && (
                        <SyntaxHighlighter language="java" style={oneDark}>
                          {item.output}
                        </SyntaxHighlighter>
                      )}
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        ))}
      </div>
      <span className="ml-[-100px]">
        <Link to={"/"}>
          <CardContainer />
        </Link>
      </span>
    </div>
  );
};

export default ArrayInjavaLang;
