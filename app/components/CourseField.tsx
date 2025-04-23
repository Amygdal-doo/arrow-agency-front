"use client";
import { scrollToTop } from "@/core/consts/scrollToTop";
import {
  IDelete,
  ICourse,
  useApplicant,
} from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CourseField = () => {
  const {
    courses,
    setCourses,
    setDeleteItems,
    deleteItems,
    currentCourses,
    setCurrentCourses,
    setUpdating,
  } = useApplicant();

  const [newCourse, setNewCourse] = useState<ICourse & { isNew?: boolean }>({
    id: "",
    name: "",
    url: "",
    startDate: "",
    endDate: "",
    isNew: false,
  });

  const handleAddCourse = () => {
    const newId = uuidv4();
    const newCourseWithId = {
      ...newCourse,
      id: newId,
      isNew: true,
    };
    setUpdating(true);
    setCourses([
      ...courses,
      {
        name: newCourse.name,
        url: newCourse.url,
        startDate: newCourse.startDate,
        endDate: newCourse.endDate,
      },
    ]);

    setCurrentCourses([...currentCourses, newCourseWithId]);

    setNewCourse({
      id: "",
      name: "",
      url: "",
      startDate: "",
      endDate: "",
      isNew: false,
    });
  };

  const handleUpdateCourse = () => {
    const updatedCourse = { ...newCourse };
    setUpdating(true);
    setCurrentCourses(
      currentCourses.map((course) =>
        course.id === newCourse.id ? updatedCourse : course
      )
    );

    setCourses(
      courses.map((course) =>
        course.id === newCourse.id
          ? newCourse.isNew
            ? {
                name: newCourse.name,
                url: newCourse.url,
                startDate: newCourse.startDate,
                endDate: newCourse.endDate,
              }
            : updatedCourse
          : course
      )
    );

    setNewCourse({
      id: "",
      name: "",
      url: "",
      startDate: "",
      endDate: "",
      isNew: false,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewCourse({
      ...newCourse,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditCourse = (id: string) => {
    scrollToTop("course-form-section", 120, "smooth", true);
    const courseToEdit = currentCourses.find((course) => course.id === id);
    if (courseToEdit) {
      setNewCourse({ ...courseToEdit });
    }
  };

  const handleDeleteCourse = (id: string) => {
    setCurrentCourses(currentCourses.filter((course) => course.id !== id));
    setCourses(courses.filter((course) => course.id !== id));
    setUpdating(true);
    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        courses: [...(deleteItems.courses || []), id],
        education: deleteItems.education || [],
        experience: deleteItems.experience || [],
        projects: deleteItems.projects || [],
        certificates: deleteItems.certificates || [],
        languages: deleteItems.languages || [],
        socials: deleteItems.socials || [],
        skills: deleteItems.skills || [],
      };
      setDeleteItems(updatedDeleteItems);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between course-form-section">
        <h2 className="text-2xl font-bold text-gray-300">Courses</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>

      {/* Add New Course Form */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Course Name"
            value={newCourse.name}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="url"
            name="url"
            placeholder="Course URL"
            value={newCourse.url}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            placeholder="Jan 2017"
            name="startDate"
            value={newCourse.startDate}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="endDate"
            placeholder="Dec 2017"
            value={newCourse.endDate}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        {newCourse.id ? (
          <button
            onClick={handleUpdateCourse}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium transition-all duration-200 shadow-lg"
          >
            Update Course
          </button>
        ) : (
          <button
            onClick={handleAddCourse}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium  transition-all duration-200 shadow-lg"
          >
            Add Course
          </button>
        )}
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {currentCourses?.length > 0 ? (
          currentCourses.map((course) => (
            <div
              key={course.id}
              className="group bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {course.name}
                  </h3>
                  {course.url && (
                    <a
                      href={course.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                    >
                      View Course →
                    </a>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => course.id && handleEditCourse(course.id)}
                    className="p-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 hover:text-blue-300 transition-all"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                  {course.id && (
                    <button
                      onClick={() => course.id && handleDeleteCourse(course.id)}
                      className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 hover:text-red-300 transition-all"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
              <div className="flex justify-end text-sm text-gray-400">
                <span>
                  {course.startDate ? course.startDate : ""}
                  {" - "}
                  {course.endDate ? course.endDate : ""}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No courses added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseField;
