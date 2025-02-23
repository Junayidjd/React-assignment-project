
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { registerStudent, deleteStudent } from "../features/courseSlice";

const StudentRegistrations = ({ offerings, registeredStudents, onRegister }) => {
  const [studentName, setStudentName] = useState("");
  const [selectedOffering, setSelectedOffering] = useState("");

  const dispatch = useDispatch();

  // Ensure offerings are loaded
  useEffect(() => {
    // If offerings are available, set default offering
    if (offerings.length > 0) {
      setSelectedOffering(offerings[0].course); // Set default offering to first course
    }
  }, [offerings]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (studentName && selectedOffering) {
      dispatch(registerStudent({ name: studentName, offering: selectedOffering }));
      setStudentName(""); // Reset student name input
      setSelectedOffering(""); // Reset offering input
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDelete = (studentName) => {
    dispatch(deleteStudent(studentName));
  };

  // Conditional rendering to check if offerings are available
  if (!offerings || offerings.length === 0) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-4 text-red-600">
          No offerings available. Please add an offering first.
        </h3>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4 text-green-600">Student Registrations</h3>

      <form onSubmit={handleRegister}>
        <div className="flex space-x-4 mb-4">
          <input
            type="text"
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Student Name"
            required
          />
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            value={selectedOffering}
            onChange={(e) => setSelectedOffering(e.target.value)}
            required
          >
            <option value="">Select Offering</option>
            {offerings.map((offering, index) => (
              <option key={index} value={`${offering.course} - ${offering.type}`}>
                {`${offering.course} - ${offering.type}`}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 mb-4"
        >
          Register Student
        </button>
      </form>

      {registeredStudents.length > 0 && (
        <div>
          <h4 className="font-semibold text-gray-700">Registered Students:</h4>
          <ul className="space-y-2 mt-4">
            {registeredStudents.map((student, index) => (
              <li key={index} className="bg-gray-50 px-4 py-2 rounded-lg shadow-sm flex justify-between items-center">
                <span className="text-gray-700">
                  {student.name} ({student.offering})
                </span>
                <button
                  onClick={() => handleDelete(student.name)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StudentRegistrations;