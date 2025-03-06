"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export interface ICourse {
  id: string;
  name: string;
  url: string;
  startDate: string;
  endDate: string;
}

const CourseField = () => {
  const { courses, setCourses, setDeleteItems } = useApplicant();

  const [newCourse, setNewCourse] = useState<ICourse>({
    id: "",
    name: "",
    url: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddCourse = () => {
    setCourses([...courses, { ...newCourse, id: uuidv4() }]);
    setNewCourse({
      id: "",
      name: "",
      url: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleEditCourse = (id: string) => {
    const courseToEdit = courses.find((course) => course.id === id);
    if (courseToEdit) {
      setNewCourse(courseToEdit);
    }
  };

  const handleUpdateCourse = () => {
    setCourses(
      courses.map((course) => (course.id === newCourse.id ? newCourse : course))
    );
    setNewCourse({
      id: "",
      name: "",
      url: "",
      startDate: "",
      endDate: "",
    });
  };

  const handleDeleteCourse = (id: string) => {
    setCourses(courses.filter((course) => course.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        courses: [...prevDeleteItems.courses, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-white">Courses</h2>

      {/* Add New Course Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Course Name"
          value={newCourse.name}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="url"
          name="url"
          placeholder="Course URL"
          value={newCourse.url}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // For start date
          name="startDate"
          value={newCourse.startDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // For end date
          name="endDate"
          value={newCourse.endDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newCourse.id ? (
          <button
            onClick={handleUpdateCourse}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Course
          </button>
        ) : (
          <button
            onClick={handleAddCourse}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Course
          </button>
        )}
      </div>

      {/* Display List of Courses */}
      {courses.length > 0 ? (
        courses.map((course) => (
          <div key={course.id} className="mb-4 text-gray-300">
            <strong>{course.name}</strong> ({course.startDate} -{" "}
            {course.endDate}){" "}
            <p className="opacity-70">
              <a href={course.url} target="_blank" rel="noopener noreferrer">
                {course.url}
              </a>
            </p>
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditCourse(course.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteCourse(course.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No courses added.</p>
      )}
    </div>
  );
};

export default CourseField;
