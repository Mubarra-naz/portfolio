"use client";
import BorderBtn from "@/components/buttons/BorderBtn";
import ProjectCard from "@/components/cards/ProjectCard";
import MainHeading from "@/components/text/MainHeading";
import SubHeading from "@/components/text/SubHeading";
import { projectsData } from "@/utils/data";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/framerMotion";

const ProjectsSection = () => {
  return (
    <div className="section px-10 md:px-20 mt-10 h-full" id="portfolio">
      <div>
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView="show"
        >
          <SubHeading>{projectsData.subtitle}</SubHeading>
          <MainHeading>{projectsData.title}</MainHeading>
        </motion.div>
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
