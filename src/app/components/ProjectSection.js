"use client";
import React, { useState } from "react";
import ProjectModal from "./ProjectModal";

function ProjectSection({ projects }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (_id) => {
    console.log("Clicked project ID:", _id);
    setSelectedProject(_id);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleNextProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project._id === selectedProject
    );

    if (currentIndex === -1) {
      return null;
    }

    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]._id);
  };

  const handlePrevProject = () => {
    const currentIndex = projects.findIndex(
      (project) => project._id === selectedProject
    );

    if (currentIndex === -1) {
      return null;
    }

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    setSelectedProject(projects[prevIndex]._id);
  };

  return (
    <section id="projects" className="px-4 py-32 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-white mb-12 text-center">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {projects.map((project, index) => (
          <button
            onClick={() => handleProjectClick(project._id)}
            key={index}
            className="bg-gray-800/30 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-primary-500 transition-colors hover:shadow-sm text-left"
          >
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-white mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-10 mt-auto items-center">
                {project.tags?.map((tag, idx) => {
                  if (!tag || !tag.svgPath) return null; // skip null/empty
                  return (
                    <div key={idx} className="flex items-center gap-10">
                      <img
                        src={tag.svgPath} // e.g. "/icons/react.svg"
                        alt={tag.name}
                        className="w-12 h-12"
                      />
                    </div>
                  );
                })}

                {/* {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 text-xs rounded-full bg-primary-500/20 text-primary-200 border border-primary-500/30"
                  >
                    {tag}
                  </span>
                ))} */}
              </div>
            </div>
          </button>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={projects.find((project) => project._id === selectedProject)}
          onClose={handleCloseModal}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </section>
  );
}

export default ProjectSection;
