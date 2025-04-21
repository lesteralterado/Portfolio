import { FaReact } from "react-icons/fa";
import { SiKotlin } from "react-icons/si";
import { SiCplusplus } from "react-icons/si"; 
import { FaNodeJs } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { SiMysql } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiKotlin className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiCplusplus className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiFirebase className="text-7xl text-red-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl text-sky-600" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
