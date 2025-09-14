import Image from "next/image";
import React, { useRef } from "react";
import { X, ChevronRight, ChevronLeft } from "lucide-react";
import { urlFor } from "../../sanity/lib/client";

function ProjectModal({ project, onClose, onNext, onPrev }) {
  const modalRef = useRef();

  const handleOutsideClick = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
      onClick={handleOutsideClick}
      ref={modalRef}
    >
      <div
        ref={modalRef}
        className="bg-gray-900 rounded-lg max-w-4xl w-11/12 max-h-[90vh] overflow-y-auto p-12 h-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between mb-3">
          <h2 className="text-2xl font-bold text-primary-50">{project.name}</h2>
          <button
            onClick={onClose}
            className="text-primary-50 hover:text-primary-400 rounded-full p-2 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="space-y-4 md:w-1/2">
            <p className="text-gray-300">{project.description}</p>
            <p className="text-gray-300">{project.fullDescription}</p>
            <div>
              <h3 className="font-semibold mb-2 text-primary">Tech Stack:</h3>
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-gray-300">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative h-64 w-full md:w-1/2 md:h-auto">
            <Image
              src={urlFor(project.image).url()}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-11/12 max-w-4xl">
            <button
              onClick={onPrev}
              className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[115%]"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={onNext}
              className="bg-gray-800/50 rounded-full p-2 hover:bg-gray-800/70 transition-colors -translate-x-[125%]"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        {/* Project Links */}
        <div className="flex gap-4 mt-4">
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors"
            >
              View Project
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
