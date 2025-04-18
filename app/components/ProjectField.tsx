"use client";
import {
  IDelete,
  IProject,
  useApplicant,
} from "@/providers/ApplicantDetailsProvider";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ProjectField = () => {
  const {
    projects,
    setProjects,
    currentProjects,
    setCurrentProjects,
    setDeleteItems,
    deleteItems,
  } = useApplicant();

  const [newProject, setNewProject] = useState<IProject & { isNew?: boolean }>({
    id: "",
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    url: "",
    isNew: false,
  });

  const handleAddProject = () => {
    const newId = uuidv4();
    const newProjectWithId = {
      ...newProject,
      id: newId,
      isNew: true,
    };

    // For BE, exclude id if it's a new project
    setProjects([
      ...projects,
      {
        name: newProject.name || "",
        description: newProject.description || "",
        startDate: newProject.startDate || "",
        endDate: newProject.endDate || "",
        url: newProject.url || "",
      },
    ]);

    setCurrentProjects([...currentProjects, newProjectWithId]);

    setNewProject({
      id: "",
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
      isNew: false,
    });
  };

  const handleUpdateProject = () => {
    const updatedProject = { ...newProject };

    setCurrentProjects(
      currentProjects.map((project) =>
        project.id === newProject.id ? updatedProject : project
      )
    );

    setProjects(
      projects.map((project) =>
        project.id === newProject.id
          ? newProject.isNew
            ? {
                name: newProject.name,
                description: newProject.description,
                startDate: newProject.startDate,
                endDate: newProject.endDate,
                url: newProject.url,
              }
            : updatedProject
          : project
      )
    );

    setNewProject({
      id: "",
      name: "",
      description: "",
      startDate: "",
      endDate: "",
      url: "",
      isNew: false,
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditProject = (id: string) => {
    const projectToEdit = currentProjects.find((project) => project.id === id);
    if (projectToEdit) {
      setNewProject({
        ...projectToEdit,
        name: projectToEdit.name || "",
        description: projectToEdit.description || "",
        startDate: projectToEdit.startDate || "",
        endDate: projectToEdit.endDate || "",
        url: projectToEdit.url || "",
      });
    }
  };

  const handleDeleteProject = (id: string) => {
    setCurrentProjects(currentProjects.filter((project) => project.id !== id));
    setProjects(projects.filter((project) => project.id !== id));

    if (id) {
      const updatedDeleteItems: IDelete = {
        ...deleteItems,
        projects: [...(deleteItems.projects || []), id],
        education: deleteItems.education || [],
        experience: deleteItems.experience || [],
        courses: deleteItems.courses || [],
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
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-300">Projects</h2>
        <div className="h-px flex-1 bg-gray-700 mx-4" />
      </div>
      {/* <pre>{JSON.stringify(projects, null, 2)}</pre> */}
      {/* Add New Project Form */}
      <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 shadow-lg">
        <div className="grid grid-cols-1 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={newProject.name}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <textarea
            name="description"
            placeholder="Project Description"
            value={newProject.description}
            onChange={handleChange}
            rows={3}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="url"
            name="url"
            placeholder="Project URL"
            value={newProject.url}
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <input
            type="text"
            name="startDate"
            value={newProject.startDate}
            placeholder="Jan 2015"
            onChange={handleChange}
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
          <input
            type="text"
            name="endDate"
            value={newProject.endDate}
            onChange={handleChange}
            placeholder="Jun 2015"
            className="bg-gray-700/50 border border-gray-600/50 rounded-lg p-3 text-gray-300 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
          />
        </div>

        {newProject.id ? (
          <button
            onClick={handleUpdateProject}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium  transition-all duration-200 shadow-lg"
          >
            Update Project
          </button>
        ) : (
          <button
            onClick={handleAddProject}
            className="mt-4 w-full bg-orange-600 hover:bg-orange-700 hover:shadow-orange-500/25 text-white p-3 rounded-lg font-medium  transition-all duration-200 shadow-lg"
          >
            Add Project
          </button>
        )}
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 shadow-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-200">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mt-2">{project.description}</p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 text-sm mt-2 inline-block"
                    >
                      View Project →
                    </a>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => project.id && handleEditProject(project.id)}
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
                  {project.id && (
                    <button
                      onClick={() =>
                        project.id && handleDeleteProject(project.id)
                      }
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
              <div className="flex justify-between text-sm text-gray-400">
                {(project.startDate || project.endDate) && (
                  <span>
                    {project.startDate && project.startDate}
                    {project.startDate && project.endDate && " - "}
                    {project.endDate && project.endDate}
                  </span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-400">No projects added yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectField;
