const ProjectCard = ({ title, description, image, href }) => {
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
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </a>
  );
};

export default ProjectCard;
