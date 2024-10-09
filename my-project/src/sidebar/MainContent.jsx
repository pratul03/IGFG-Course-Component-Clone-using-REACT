import { useParams } from "react-router-dom";
import Sidebar from "./SideBar.jsx";
import DataStructure from "../components/DataStructure.jsx";
import ArrayComponent from "../components/ArrayComponent.jsx";
import LinkedListComponent from "../components/LinkedListComponent.jsx";
import SearchingAlgorithmsComponent from "../components/SearchingAlgorithmsComponent.jsx";
import StackComponent from "../components/StackComponent.jsx";
import SortingAlgorithmsComponent from "../components/SortingAlgorithmsComponent.jsx";
import QueueComponent from "../components/QueueComponent.jsx";
import TreeComponent from "../components/TreeComponent.jsx";
import GraphComponent from "../components/GraphComponent.jsx";
import { allCoursesData } from "../../public/data/dsaCard.js";

const MainComponent = () => {
  const { courseId, topicId } = useParams();

  // Find course data matching the courseId
  const course = allCoursesData.find(
    (course) => course.title.toLowerCase().replace(/ /g, "-") === courseId
  );

  if (!course) {
    return <div>Course Not Found</div>;
  }

  // Function to render the appropriate component based on the topicId
  const renderComponent = () => {
    switch (topicId) {
      case "analysis-of-algorithms":
        return (
          <DataStructure
            topic={course.topics.find(
              (t) => t.label === "Analysis of Algorithms"
            )}
          />
        );
      case "array":
        return <ArrayComponent />;
      case "linked-list":
        return <LinkedListComponent />;
      case "searching-algorithms":
        return <SearchingAlgorithmsComponent />;
      case "stack":
        return <StackComponent />;
      case "sorting-algorithms":
        return <SortingAlgorithmsComponent />;
      case "queue":
        return <QueueComponent />;
      case "tree":
        return <TreeComponent />;
      case "graph":
        return <GraphComponent />;
      default:
        return <div>Topic Not Found</div>;
    }
  };

  return (
    <div className="flex w-full">
      {/* Sidebar to navigate between topics */}
      <Sidebar courseId={courseId} topics={course.topics} />

      <div className="flex-grow p-6 text-white">{renderComponent()}</div>
    </div>
  );
};

export default MainComponent;
