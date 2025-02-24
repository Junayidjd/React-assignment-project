

import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addOffering, deleteOffering } from "../features/courseSlice";
import { useNavigate } from "react-router-dom";

const CourseOfferings = ({ courses, courseTypes, offerings }) => {
  const [course, setCourse] = useState("");
  const [type, setType] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddOffering = () => {
    if (course && type) {
      // Dispatch the add offering action
      dispatch(addOffering({ course, type }));
      setCourse(""); // Reset input
      setType(""); // Reset input
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4 text-green-600">Course Offerings</h3>

      <div className="flex space-x-4 mb-4">
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
        >
          <option value="">Select Course</option>
          {courses.map((course, index) => (
            <option key={index} value={course}>
              {course}
            </option>
          ))}
        </select>

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
        >
          <option value="">Select Course Type</option>
          {courseTypes.map((type, index) => (
            <option key={index} value={type}>
              {type}
            </option>
          ))}
        </select>

        <button
          onClick={handleAddOffering}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          disabled={!course || !type}
        >
          Add Offering
        </button>
      </div>

      <div>
        <h4 className="text-lg font-semibold text-gray-700">Available Offerings</h4>
        <ul className="space-y-2 mt-4">
          {offerings.map((offering, index) => (
            <li key={index} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
              <span>{offering.course} - {offering.type}</span>
              <button
                onClick={() => {
                  if (window.confirm("Are you sure you want to delete this offering?")) {
                    dispatch(deleteOffering(offering));
                  }
                }}
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => navigate("/registrations")}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 mt-4"
        >
          Go to Registration
        </button>
      </div>
    </div>
  );
};

export default CourseOfferings;
