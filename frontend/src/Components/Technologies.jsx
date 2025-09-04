import { FaReact } from "react-icons/fa";
import { SiKotlin, SiCplusplus, SiFirebase, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import "../index.css"; // Import the CSS for animation
import { InfiniteSlider } from "../Components/ui/infinite-slider";
import { ProgressiveBlur } from "../Components/ui/progressive-blur";

const techIcons = [
  <FaReact className="text-5xl sm:text-6xl lg:text-7xl text-cyan-400" />,
  <SiKotlin className="text-5xl sm:text-6xl lg:text-7xl text-cyan-400" />,
  <SiCplusplus className="text-5xl sm:text-6xl lg:text-7xl text-green-400" />,
  <SiFirebase className="text-5xl sm:text-6xl lg:text-7xl text-red-700" />,
  <FaNodeJs className="text-5xl sm:text-6xl lg:text-7xl text-green-500" />,
  <SiMysql className="text-5xl sm:text-6xl lg:text-7xl text-sky-600" />,
];

const logos = [
    {
      name: "React",
      src: "https://image.pngaaa.com/11/2508011-middle.png",
    },
    {
      name: "Next.js",
      src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
      name: "TypeScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/6/67/TypeScript_Logo.svg",
    },
    {
      name: "JavaScript",
      src: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Unofficial_JavaScript_logo.svg",
    },
    {
      name: "Firebase",
      src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Firebase_Logo.svg",
    },
    {
      name: "Vonage",
      src: "https://svgmix.com/uploads/simpleicons/bd57ce-vonage.svg",
    },
    {
      name: "EmailJS",
      src: "https://avatars.githubusercontent.com/u/55558179?s=200&v=4",
    },
    {
      name: "MySQL",
      src: "https://www.svgrepo.com/show/303251/mysql-logo.svg",
    },
    {
      name: "MongoDB",
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    },
    {
      name: "Shadcn",
      src: "https://raw.githubusercontent.com/shadcn.png",
    },
    {
      name: "Aceternity UI",
      src: "https://assets.aceternity.com/pro/logos/aceternity-ui.png",
    },
    {
      name: "Figma",
      src: "https://www.svgrepo.com/show/361494/figma-logo.svg",
    },
  ];

const Technologies = () => {
  return (
    <div id="technologies" className="border-b border-neutral-800  my-8 lg:my-15 py-8 lg:py-12 overflow-hidden">
      <h2 className="my-8 lg:my-20 text-center text-3xl sm:text-4xl text-balance font-semibold lg:text-5xl">Technologies</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-8 sm:gap-10 lg:gap-12 w-max">
          {techIcons.map((icon, idx) => (
            <div key={idx} className="rounded-2xl border-4 border-neutral-800 p-4">
              {icon}
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {techIcons.map((icon, idx) => (
            <div key={idx + techIcons.length} className="rounded-2xl border-4 border-neutral-800 p-4">
              {icon}
            </div>
          ))}
        </div>
      </div>
      {/* <section className="bg-background pb-16 md:pb-32"> */}
          <div className="group relative m-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-col items-center md:flex-row">
              <div className="md:max-w-44 md:border-r md:pr-6">
                <p className="text-end text-xs sm:text-sm">Powering the best teams</p>
              </div>
              <div className="relative py-4 sm:py-6 md:w-[calc(100%-11rem)]">
                <InfiniteSlider speedOnHover={20} speed={40} gap={56}>
                  {logos.map((logo) => (
                    <div key={logo.name} className="flex">
                      <img
                        className="mx-auto h-4 sm:h-5 w-fit dark:invert"
                        src={logo.src}
                        alt={`${logo.name} Logo`}
                        title={logo.name}
                        height="16"
                        width="auto"
                      />
                    </div>
                  ))}
                  
                  <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit invert"
                      src="https://upload.wikimedia.org/wikipedia/commons/6/67/TypeScript_Logo.svg"
                      alt="TypeScript"
                      height="20"
                      width="auto"
                    />
                  </div>

                  {/* <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/column.svg"
                      alt="Column Logo"
                      height="16"
                      width="auto"
                    />
                  </div> */}
                  <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height="16"
                      width="auto"
                    />
                  </div>
                  {/* <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height="20"
                      width="auto"
                    />
                  </div> */}
                  {/* <div className="flex">
                    <img
                      className="mx-auto h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                      alt="Lemon Squeezy Logo"
                      height="20"
                      width="auto"
                    />
                  </div> */}
                  {/* <div className="flex">
                    <img
                      className="mx-auto h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/laravel.svg"
                      alt="Laravel Logo"
                      height="16"
                      width="auto"
                    />
                  </div> */}
                  {/* <div className="flex">
                    <img
                      className="mx-auto h-7 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/lilly.svg"
                      alt="Lilly Logo"
                      height="28"
                      width="auto"
                    />
                  </div> */}

                  {/* <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div> */}
                </InfiniteSlider>

                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-20"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-20"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        {/* </section> */}
    </div>
  );
};

export default Technologies;
