"use client";
import { IDelete, useApplicant } from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

interface IProject {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  url: string;
}

const ProjectField = () => {
  const { projects, setProjects, setDeleteItems } = useApplicant();

  const [newProject, setNewProject] = useState<IProject>({
    id: "",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    url: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProject = () => {
    setProjects([...projects, { ...newProject, id: uuidv4() }]);
    setNewProject({
      id: "",
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
    });
  };

  const handleEditProject = (id: string) => {
    const projectToEdit = projects.find((project) => project.id === id);
    if (projectToEdit) {
      setNewProject(projectToEdit);
    }
  };

  const handleUpdateProject = () => {
    setProjects(
      projects.map((project) =>
        project.id === newProject.id ? newProject : project
      )
    );
    setNewProject({
      id: "",
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
    });
  };

  const handleDeleteProject = (id: string) => {
    setProjects(projects.filter((project) => project.id !== id));
    setDeleteItems((prevDeleteItems: IDelete) => {
      return {
        ...prevDeleteItems,
        projects: [...prevDeleteItems.projects, id],
      };
    });
  };

  return (
    <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
      {/* Add New Project Form */}
      <div className="mb-4">
        <input
          type="text"
          name="name"
          placeholder="Project Name"
          value={newProject.name}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="description"
          placeholder="Project Description"
          value={newProject.description}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // Changed to month input for start date
          name="startDate"
          value={newProject.startDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="month" // Changed to month input for end date
          name="endDate"
          value={newProject.endDate}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />
        <input
          type="text"
          name="url"
          placeholder="Project URL"
          value={newProject.url}
          onChange={handleChange}
          className="p-2 mb-2 w-full rounded bg-gray-700 text-gray-300 border border-gray-600"
        />

        {newProject.id ? (
          <button
            onClick={handleUpdateProject}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Update Project
          </button>
        ) : (
          <button
            onClick={handleAddProject}
            className="bg-orange-600 w-full text-white p-2 font-bold rounded mt-2 hover:bg-orange-700"
          >
            Add Project
          </button>
        )}
      </div>

      {/* Display List of Projects */}
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project.id} className="mb-4 text-gray-300">
            <strong>{project.name}</strong> ({project.startDate} -{" "}
            {project.endDate})
            <div className="mt-2 flex">
              <button
                onClick={() => handleEditProject(project.id)}
                className="bg-transparent border-gray-300 border font-bold text-white w-1/2 p-2 rounded mr-2 hover:bg-[#01070a] hover:border-[#01070a]"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProject(project.id)}
                className="bg-transparent border border-gray-300 font-bold text-white w-1/2 p-2 rounded hover:bg-red-800 hover:border-red-800"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No projects added.</p>
      )}
    </div>
  );
};

export default ProjectField;
