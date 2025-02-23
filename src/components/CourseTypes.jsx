import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseType, deleteCourseType, updateCourseType } from '../features/courseSlice';

const CourseTypes = () => {
  const dispatch = useDispatch();
  const courseTypes = useSelector(state => state.course.courseTypes);
  const [courseType, setCourseType] = useState('');
  const [editType, setEditType] = useState('');
  const [editValue, setEditValue] = useState('');

  const handleAdd = () => {
    if (courseType) {
      dispatch(addCourseType(courseType));
      setCourseType('');
    }
  };

  const handleEdit = (oldType) => {
    setEditType(oldType);
    setEditValue(oldType);
  };

  const handleConfirmEdit = () => {
    if (editValue !== editType) {
      dispatch(updateCourseType({ oldType: editType, newType: editValue }));
    }
    setEditType('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-semibold mb-4 text-green-600">Course Types</h3>
      <div className="flex space-x-4 mb-4">
        <input
          type="text"
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          value={courseType}
          onChange={(e) => setCourseType(e.target.value)}
          placeholder="New course type"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <ul className="space-y-2">
        {courseTypes.map((type, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg shadow-sm">
            <span className="text-gray-700">{type}</span>
            <div className="space-x-2">
              <button
                className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600"
                onClick={() => dispatch(deleteCourseType(type))}
              >
                Delete
              </button>
              <button
                className="bg-yellow-500 text-white px-3 py-1 rounded-lg hover:bg-yellow-600"
                onClick={() => handleEdit(type)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editType && (
        <div className="mt-4">
          <input
            type="text"
            value={editValue}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
            onChange={(e) => setEditValue(e.target.value)}
          />
          <div className="flex space-x-4 mt-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={handleConfirmEdit}
            >
              OK
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
              onClick={() => setEditType('')}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseTypes;
