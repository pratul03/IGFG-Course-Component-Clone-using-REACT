import { useEffect, useState } from "react";
import { Ellipsis, MessageCircle, Pencil } from "lucide-react";
import { basicArrayProblems } from "../../public/arraydata/problemsInArray";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, FilePenLine, Play } from "lucide-react";
import { Link } from "react-router-dom";
import CardContainer from "../CardContainer";
import { FaSquareJs } from "react-icons/fa6";

const ProblemsInArray = () => {
  const [updateTime, setUpdateTime] = useState("");

  const formatUpdateTime = () => {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString("en-US", { month: "short" });
    const year = now.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  useEffect(() => {
    setUpdateTime(`Last Updated: ${formatUpdateTime()}`);
  }, []);

  const [editableCode, setEditableCode] = useState({});

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

  const handleCodeChange = (problemIndex, solutionIndex, value) => {
    basicArrayProblems[0].topics[0].content =
      basicArrayProblems[0].topics[0].content.map((item, idx) =>
        idx === problemIndex && item.type === "problem"
          ? {
              ...item,
              codeSolutions: item.codeSolutions.map((solution, solIdx) =>
                solIdx === solutionIndex
                  ? { ...solution, code: value }
                  : solution
              ),
            }
          : item
      );
  };

  return (
    <div className="flex w-full flex-col p-6 text-white">
      <div className="left-0 ml-[-10px] flex flex-col w-full max-w-5xl mx-auto text-white shadow-lg">
        {basicArrayProblems[0]?.topics?.map((topic, topicIndex) => (
          <div key={topicIndex} className="flex flex-col mb-8">
            <h3 className="text-2xl font-semibold mb-4">{topic.title}</h3>
            <p className="mt-2 text-sm text-gray-200 flex items-center">
              {updateTime}
              <div className="flex ml-[450px] gap-3 text-white relative">
                <div className="relative group">
                  <MessageCircle className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    comments
                  </div>
                </div>
                <div className="relative group">
                  <Pencil className="h-5 cursor-pointer hover:text-gray-500" />
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-1 w-max p-1 bg-gray-500 text-gray-200 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs">
                    improve
                  </div>
                </div>
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
                case "problem":
                  return (
                    <div key={contentIndex} className="my-8">
                      <h4 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h4>
                      <p className="text-lg mb-4">{item.description}</p>
                      {item.codeSolutions.map((solution, solutionIndex) => (
                        <div
                          key={solutionIndex}
                          className="bg-oneDark p-4 rounded-lg my-6"
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex flex-col items-center gap-4">
                              <FaSquareJs size={24} color="#fff" />
                              <Copy
                                size={20}
                                className="cursor-pointer"
                                onClick={() => handleCopy(solution.code)}
                                title="Copy Code"
                              />
                              <FilePenLine
                                size={20}
                                className="cursor-pointer"
                                onClick={() =>
                                  toggleEdit(`${contentIndex}-${solutionIndex}`)
                                }
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
                              {editableCode[
                                `${contentIndex}-${solutionIndex}`
                              ] ? (
                                <textarea
                                  value={solution.code}
                                  onChange={(e) =>
                                    handleCodeChange(
                                      contentIndex,
                                      solutionIndex,
                                      e.target.value
                                    )
                                  }
                                  className="w-full bg-gray-900 text-white p-4 rounded-lg"
                                  rows="8"
                                />
                              ) : (
                                <SyntaxHighlighter
                                  language={solution.language}
                                  style={oneDark}
                                  showLineNumbers
                                >
                                  {solution.code}
                                </SyntaxHighlighter>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
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

export default ProblemsInArray;
