import React from "react";
import { projects } from "@/data/content";

const ProjectsSection: React.FC = () => (
  <section id="projects" className="py-24 bg-white relative z-10">
    <div className="text-center mb-12 px-6">
      <h2 className="text-3xl font-bold mb-4 text-[#0c468b]">Our Projects</h2>
      <p className="text-gray-700 max-w-2xl mx-auto">
        A showcase of our successful implementations across various sectors, demonstrating our capability and commitment to quality.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 h-[600px] w-full cursor-pointer border-y border-gray-200">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden ${index < projects.length - 1 ? "border-r border-gray-200" : ""} h-full`}
        >
          <img
            src={project.image}
            alt={project.alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
          <div className="absolute top-10 left-0 w-full text-center px-4">
            <h3
              className="text-xl font-semibold transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-white"
              dangerouslySetInnerHTML={{ __html: project.title }}
            />
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-center mt-12">
      <button className="px-8 py-3 border border-[#0c468b] text-[#0c468b] hover:bg-[#0c468b] hover:text-white transition-colors rounded-lg text-sm font-semibold tracking-wider uppercase flex items-center gap-2">
        View All Projects
      </button>
    </div>
  </section>
);

export default ProjectsSection;
