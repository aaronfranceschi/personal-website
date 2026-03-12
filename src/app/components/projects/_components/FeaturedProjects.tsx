"use client";
import { projectsData } from "@/../utils/Data/projects-data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectCard from "../project-card";

const FeaturedProjects = () => {
  return (
    <section
      id="projects"
      className="relative z-50 py-16 lg:py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="flex justify-center mb-20 lg:mb-32">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-gradient-to-r from-transparent to-blue-700"></span>
          <span className="bg-[#050505] border border-blue-800/30 w-fit text-white p-3 px-8 text-2xl font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.2)]">
            Projects Showcase
          </span>
          <span className="w-24 h-[2px] bg-gradient-to-l from-transparent to-blue-700"></span>
        </div>
      </div>

      <Carousel opts={{ align: "start" }} className="w-full">
        <CarouselContent className="gap-6">
          {projectsData.map((project) => (
            <CarouselItem
              key={project.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <ProjectCard project={project} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Arrows */}
        <CarouselPrevious className="text-white hidden md:flex bg-blue-700/20 hover:bg-blue-700/50 p-2 rounded-full absolute left-2 top-1/2 -translate-y-1/2 z-10 transition-all" />
        <CarouselNext className="text-white hidden md:flex bg-blue-700/20 hover:bg-blue-700/50 p-2 rounded-full absolute right-2 top-1/2 -translate-y-1/2 z-10 transition-all" />
      </Carousel>
    </section>
  );
};

export default FeaturedProjects;