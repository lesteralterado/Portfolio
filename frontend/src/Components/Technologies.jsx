import { FaReact } from "react-icons/fa";
import { SiKotlin, SiCplusplus, SiFirebase, SiMysql } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import "../index.css"; // Import the CSS for animation

const techIcons = [
  <FaReact className="text-7xl text-cyan-400" />,
  <SiKotlin className="text-7xl text-cyan-400" />,
  <SiCplusplus className="text-7xl text-green-400" />,
  <SiFirebase className="text-7xl text-red-700" />,
  <FaNodeJs className="text-7xl text-green-500" />,
  <SiMysql className="text-7xl text-sky-600" />,
];

const Technologies = () => {
  return (
    <div id="technology" className="border-b border-neutral-800  my-15 py-12 overflow-hidden">
      <h2 className="my-20 text-center text-4xl text-balance font-semibold lg:text-5xl">Technologies</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-marquee gap-4 w-max">
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
    </div>
  );
};

export default Technologies;
