import { useState } from "react";
import { PROJECTS } from "../constants";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";

const Projects = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedLink, setSelectedLink] = useState("");
  return (
    <div id="projects" className=" border-b border-neutral-900 mt-8 lg:mt-15 py-8 lg:py-12">
      <h1 className="mt-8 lg:mt-20 text-center text-balance text-3xl sm:text-4xl font-semibold lg:text-5xl">Projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-4 py-5">{PROJECTS.map((project, index) => (
      <CardContainer className="inter-var">
      <CardBody className="relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] bg-zinc-900 dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[25rem] h-auto rounded-xl p-4 sm:p-6 border  ">
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
            className="h-40 sm:h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl cursor-pointer"
            alt="thumbnail"
            onClick={() => {
              if (project.link) {
                setSelectedLink(project.link);
                setShowConfirm(true);
              }
            }}
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
            className="px-4 py-2 rounded-xl text-xs sm:text-sm font-normal text-white bg-black dark:bg-white dark:text-black"
          >
            {project.technologies.join(", ")}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
      ))}
      </div>
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-lg max-w-sm w-full mx-4">
            <p className="text-center text-neutral-900 dark:text-white mb-4">Do you want to proceed to the project link?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  window.open(selectedLink, '_blank');
                  setShowConfirm(false);
                }}
                className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-xl"
              >
                Yes
              </button>
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 text-black dark:bg-gray-700 dark:text-white rounded-xl"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
