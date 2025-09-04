import { PROJECTS } from "../constants";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";

const Projects = () => {
  return (
    <div id="projects" className=" border-b border-neutral-900 mt-8 lg:mt-15 py-8 lg:py-12">
      <h1 className="mt-8 lg:mt-20 text-center text-balance text-3xl sm:text-4xl font-semibold lg:text-5xl">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 py-5">{PROJECTS.map((project, index) => (
      <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-4 sm:p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-lg sm:text-xl font-bold text-white"
        >
          {project.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-xs sm:text-sm max-w-sm mt-2 text-neutral-300"
        >
          {project.description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <img
            src={project.image}
            height="1000"
            width="1000"
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 lg:mt-20">
          {/* <CardItem
            translateZ={20}
            as="a"
            href=""
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal text-white"
          > */}
            Try now →
          {/* </CardItem> */}
          <CardItem
            translateZ={20}
            as="button"
            className="flex flex-wrap items-center justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-normal text-white bg-black dark:bg-white dark:text-black"
          >
            {project.technologies.map((tech, index) => (
                    <span key={index} className="flex w-auto items-center justify-center px-2 sm:px-4 py-1 sm:py-2 mx-1 my-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs sm:text-sm font-bold">{tech}</span>
                ))}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      ))}
      </div>
    </div>
  );
};

export default Projects;
