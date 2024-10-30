import { Route, Routes, BrowserRouter as Router } from "react-router-dom"; // Use BrowserRouter for full navigation context
import HomePageLayout from "./HomePageLayout";
import CoursePageLayout from "./CoursePageLayout.jsx";
// Reusable layout for course content
import MainContent from "./sidebar/MainContent.jsx";
import ScrollToTop from "./components/scrollToTop.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Main Home Layout */}

        <Route path="/" element={<HomePageLayout />} />

        {/* Dynamic Course Page */}
        <Route path="courses/:courseId" element={<CoursePageLayout />} />
        <Route
          path="courses/:courseId/topics/:topicId/:subTopicId?"
          element={<MainContent />}
        />
      </Routes>
    </Router>
  );
}

export default App;
