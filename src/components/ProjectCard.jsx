import { useState } from "react";
import ProjectModal from "./ProjectModal";

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
      <div
        onClick={() => setIsModalOpen(true)}
        className="block transition-transform duration-200 hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
      >
        <h2 className="text-lg font-semibold mb-2 text-red-500 font-point-panther">
          {projectData.title}
        </h2>
        <div className="w-full h-40 rounded-lg mb-3 shadow-sm overflow-hidden">
          <img
            src={projectData.image}
            alt={projectData.title}
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-neutral-50 font-harmonia leading-relaxed mb-3">
          {projectData.description}
        </p>

        {projectData.tags && projectData.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 items-center">
            {visibleTags.map((tag, index) => (
              <span
                key={index}
                className="font-harmonia inline-block px-3 py-1 text-xs font-medium border text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200 relative pl-4 pr-4"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%)",
                }}
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
                className="inline-block px-3 py-1 text-xs font-medium text-neutral-50 bg-red-500 hover:bg-red-600 hover:cursor-pointer transition-colors duration-200 relative pl-4 pr-4"
                style={{
                  clipPath:
                    "polygon(0 0, calc(100% - 8px) 0, 100% 50%, calc(100% - 8px) 100%, 0 100%, 8px 50%)",
                }}
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
