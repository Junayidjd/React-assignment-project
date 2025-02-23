
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./store/store";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import CourseOfferings from "./components/CourseOfferings";
import StudentRegistrations from "./components/StudentRegistrations";

const App = () => {
  const courses = useSelector((state) => state.courses.courses);
  const courseTypes = useSelector((state) => state.courses.courseTypes);
  const offerings = useSelector((state) => state.courses.offerings);
  const registeredStudents = useSelector(
    (state) => state.courses.registeredStudents
  );

  const dispatch = useDispatch();

  return (
    <Router>
      <PersistGate loading={null} persistor={persistor}>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/courses"
                element={<Courses courses={courses} />}
              />
              <Route
                path="/offerings"
                element={<CourseOfferings courses={courses} courseTypes={courseTypes} offerings={offerings} />}
              />
              <Route
                path="/registrations"
                element={<StudentRegistrations offerings={offerings} registeredStudents={registeredStudents} />}
              />
            </Routes>
          </main>
        </div>
      </PersistGate>
    </Router>
  );
};

export default App;
