import React, { useState } from "react";
import { Link } from "react-router-dom";

const Courses = ({ courses, onAdd, onDelete, onUpdate }) => {
  const [course, setCourse] = useState("");
  const [editCourse, setEditCourse] = useState(null);
  const [newCourseName, setNewCourseName] = useState("");

  const handleAdd = () => {
    if (course) {
      onAdd(course); // This will call the dispatch function passed from the parent component
      setCourse(""); // Clear input after adding
    }
  };

  const handleEdit = (courseName) => {
    setEditCourse(courseName);
    setNewCourseName(courseName);
  };

  const handleUpdate = () => {
    if (newCourseName !== editCourse) {
      onUpdate(editCourse, newCourseName); // This will call the dispatch function passed from the parent component
    }
    setEditCourse(null);
    setNewCourseName("");
  };

  const handleCancel = () => {
    setEditCourse(null);
    setNewCourseName("");
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4 text-green-600">Courses</h3>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          placeholder="New course"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {courses.map((course, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm"
          >
            {editCourse === course ? (
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newCourseName}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                  onChange={(e) => setNewCourseName(e.target.value)}
                />
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  onClick={handleUpdate}
                >
                  OK
                </button>
                <button
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between w-full">
                <span className="text-gray-700">{course}</span>
                <div className="space-x-2">
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                    onClick={() => onDelete(course)} // Dispatch delete
                  >
                    Delete
                  </button>
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                    onClick={() => handleEdit(course)}
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
