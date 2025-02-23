
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCourse, deleteCourse, updateCourse } from "../features/courseSlice";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.courses.courses);

  const [newCourse, setNewCourse] = useState("");
  const [editCourse, setEditCourse] = useState(null);
  const [updatedCourse, setUpdatedCourse] = useState("");

  const handleAddCourse = () => {
    if (newCourse.trim()) {
      dispatch(addCourse(newCourse));
      setNewCourse(""); // Clear input after adding
    }
  };

  const handleEditCourse = (course) => {
    setEditCourse(course);
    setUpdatedCourse(course);
  };

  const handleUpdateCourse = () => {
    if (updatedCourse.trim() && updatedCourse !== editCourse) {
      dispatch(updateCourse({ oldCourse: editCourse, newCourse: updatedCourse }));
      setEditCourse(null);
      setUpdatedCourse("");
    }
  };

  const handleDeleteCourse = (course) => {
    dispatch(deleteCourse(course));
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-center text-gray-700 mb-6">Manage Courses</h2>

      {/* Add Course Section */}
      <div className="mb-6 flex justify-center space-x-4">
        <input
          type="text"
          className="border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-green-500"
          value={newCourse}
          onChange={(e) => setNewCourse(e.target.value)}
          placeholder="Enter course name"
        />
        <button
          onClick={handleAddCourse}
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Add Course
        </button>
      </div>

      {/* List of Courses */}
      <ul className="space-y-4">
        {courses.map((course, index) => (
          <li
            key={index}
            className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-sm"
          >
            {editCourse === course ? (
              <div className="flex space-x-4">
                <input
                  type="text"
                  className="border px-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={updatedCourse}
                  onChange={(e) => setUpdatedCourse(e.target.value)}
                />
                <button
                  onClick={handleUpdateCourse}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Update
                </button>
                <button
                  onClick={() => setEditCourse(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <span className="text-lg text-gray-700">{course}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => handleDeleteCourse(course)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditCourse(course)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    Edit
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Button to go to Offerings page */}
      <Link to="/offerings">
        <button className="mt-4 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600">
          Next to Offerings
        </button>
      </Link>
    </div>
  );
};

export default Courses;

