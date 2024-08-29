import React from "react";
import { Route, Routes } from "react-router-dom"; // Use updated Routes component
import HomePageLayout from "./HomePageLayout";

function App() {
  return (
    <Routes>
      {/* Define routes using Route elements */}
      <Route path="/" element={<HomePageLayout />} />
    </Routes>
  );
}

export default App;
