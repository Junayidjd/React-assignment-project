// courseSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courseTypes: ["Individual", "Group", "Special"],
  courses: ["Math", "Science"],
  offerings: [],
  registeredStudents: [],
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourseType: (state, action) => {
      state.courseTypes.push(action.payload);
    },
    deleteCourseType: (state, action) => {
      state.courseTypes = state.courseTypes.filter(
        (type) => type !== action.payload
      );
    },
    addCourse: (state, action) => {
      state.courses.push(action.payload);
    },
    deleteCourse: (state, action) => {
      state.courses = state.courses.filter(
        (course) => course !== action.payload
      );
    },
    updateCourse: (state, action) => {
      const { oldCourse, newCourse } = action.payload;
      const index = state.courses.indexOf(oldCourse);
      if (index !== -1) {
        state.courses[index] = newCourse;
      }
    },
    addOffering: (state, action) => {
      state.offerings.push(action.payload);
    },
    deleteOffering: (state, action) => {
      state.offerings = state.offerings.filter(
        (offering) => offering !== action.payload
      );
    },
    registerStudent: (state, action) => {
      state.registeredStudents.push(action.payload);
    },
    deleteStudent: (state, action) => {
      state.registeredStudents = state.registeredStudents.filter(
        (student) => student.name !== action.payload
      );
    },
  },
});

export const {
  addCourseType,
  deleteCourseType,
  addCourse,
  deleteCourse,
  updateCourse,
  addOffering,
  deleteOffering,
  registerStudent,
  deleteStudent,
} = courseSlice.actions;

export default courseSlice.reducer;
