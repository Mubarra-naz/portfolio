import BorderBtn from "@/components/buttons/BorderBtn";
import ProjectCard from "@/components/cards/ProjectCard";
import MainHeading from "@/components/text/MainHeading";
import SubHeading from "@/components/text/SubHeading";
import { projectsData } from "@/utils/data";
import React from "react";

const ProjectsSection = () => {
  return (
    <div className="section px-10 md:px-20 mt-10 h-full" id="portfolio">
      <div>
        <SubHeading>{projectsData.subtitle}</SubHeading>
        <MainHeading>{projectsData.title}</MainHeading>
        {/* <BorderBtn>View All Projects</BorderBtn> */}
        <div className="mt-6">
          <div className="flex-1 flex flex-col md:flex-row flex-wrap mb-10 lg:mb-0">
            {projectsData.projects.map((project, index) => (
              <ProjectCard
                title={project.title}
                category={project.category}
                img={project.imagePath}
                viewUrl={project?.viewUrl}
                codeUrl={project?.codeUrl}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
