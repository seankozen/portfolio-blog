import Image from "next/image";
import React from "react";

function ProjectModal({ project, onClose, onNext, onPrev }) {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div>
        <h2>{project.title}</h2>
        <button onClick={onClose}></button>
      </div>
    </div>
  );
}

export default ProjectModal;
