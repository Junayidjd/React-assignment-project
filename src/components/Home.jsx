// Home.jsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-semibold text-green-600">
        Welcome to the Course Management App
      </h1>
      <p className="mt-4 text-xl text-gray-700">
        Manage your courses, offerings, and student registrations easily!
      </p>
      <Link to="/courses">
        <button className="mt-6 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Go to Courses
        </button>
      </Link>
    </div>
  );
};

export default Home;
