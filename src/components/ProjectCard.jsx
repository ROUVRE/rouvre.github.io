import { useState } from "react";

const ProjectCard = ({ title, description, image, href, tags }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const maxVisibleTags = 3;

  const visibleTags = showAllTags ? tags : tags?.slice(0, maxVisibleTags);
  const hasMoreTags = tags && tags.length > maxVisibleTags;

  return (
    <a
      href={href}
      className="block transition-transform duration-200 hover:-translate-y-1 no-underline text-inherit cursor-pointer"
      target="_blank"
      rel="noopener"
    >
      <h2 className="text-lg font-semibold mb-2 text-gray-900">{title}</h2>
      <div className="w-full h-40 rounded-lg mb-3 shadow-sm overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">
        {description}
      </p>

      {tags && tags.length > 0 && (
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
                e.preventDefault();
                e.stopPropagation();
                setShowAllTags(!showAllTags);
              }}
              className="inline-block px-2.5 py-1 text-xs font-medium text-blue-600 bg-blue-50 rounded-full hover:bg-blue-100 transition-colors duration-200"
            >
              {showAllTags
                ? "Show less"
                : `+${tags.length - maxVisibleTags} more`}
            </button>
          )}
        </div>
      )}
    </a>
  );
};

export default ProjectCard;
