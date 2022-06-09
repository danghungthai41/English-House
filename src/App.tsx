import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lessons from "./Page/Lessons";
import HomePage from "./Page/HomePage";
import HomeLayout from "./Layout/HomeLayout";
import Lesson from "./Page/Lessons/Lesson";
const App: FC = () => {
  return (
    <Router>
      <HomeLayout>
        <Routes>
          <Route path="/lessons/unit/:id" element={<Lesson />}  />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </HomeLayout>
    </Router>
  );
};

export default App;
