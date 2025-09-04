import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div id="experience" className="border-b border-neutral-900 pb-4">
      <h2 className="my-8 lg:my-20 text-center text-3xl sm:text-4xl">Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-6 lg:mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-xs sm:text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold text-base sm:text-lg">
                {experience.role} -{" "}
                  <span className="text-sm sm:text-base text-purple-100">
                    {experience.company}
                  </span>
              </h6>
                <p className="mb-4 text-neutral-400 text-sm sm:text-base">{experience.description}</p>
                  {experience.technologies.map((tech, index) => (
                    <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2
                      py-1 text-xs sm:text-sm font-medium text-purple-800">{tech}</span>
                  ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
