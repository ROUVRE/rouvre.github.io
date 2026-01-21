import ProjectCard from "./ProjectCard";
import projects from "../utils/projects";

const ProjectsGrid = () => {
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-12 sm:mb-16">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
  );
};

export default ProjectsGrid;
