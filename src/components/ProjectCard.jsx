import { useState } from "react";
import ProjectModal from "./ProjectModal";

const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px) scale(0.95);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 0.2s ease-out;
  }

  .animate-slideUp {
    animation: slideUp 0.3s ease-out;
  }
`;

const ProjectCard = ({
  title,
  description,
  image,
  tags,
  detailedDescription,
  demoUrl,
  githubUrl,
}) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const maxVisibleTags = 3;

  const projectData = {
    title,
    description,
    image,
    tags,
    detailedDescription,
    demoUrl,
    githubUrl,
  };

  const visibleTags = showAllTags
    ? projectData.tags
    : projectData.tags?.slice(0, maxVisibleTags);
  const hasMoreTags =
    projectData.tags && projectData.tags.length > maxVisibleTags;

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 200);
  };

  return (
    <>
      <style>{styles}</style>
      <div
        onClick={() => setIsModalOpen(true)}
        className="block transition-transform duration-200 hover:-translate-y-1 cursor-pointer"
      >
        <h2 className="text-lg font-semibold mb-2 text-gray-900">
          {projectData.title}
        </h2>
        <div className="w-full h-40 rounded-lg mb-3 shadow-sm overflow-hidden">
          <img
            src={projectData.image}
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-3">
          {projectData.description}
        </p>

        {projectData.tags && projectData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {visibleTags.map((tag, index) => (
              <span
                key={index}
                className="inline-block px-2.5 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
              >
                {tag}
              </span>
            ))}

            {hasMoreTags && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowAllTags(!showAllTags);
                }}
                className="inline-block px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-200"
              >
                {showAllTags
                  ? "Show less"
                  : `+${projectData.tags.length - maxVisibleTags} more`}
              </button>
            )}
          </div>
        )}
      </div>

      <ProjectModal
        project={projectData}
        isOpen={isModalOpen && !isClosing}
        onClose={handleClose}
      />
    </>
  );
};

export default ProjectCard;
