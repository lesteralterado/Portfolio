import logo from "../assets/logoo.png";
import { delay, motion } from "framer-motion";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 mb-23 w-full flex items-center justify-between shadow bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2" src={logo} alt="logo" style={{ width: '80px', height: 'auto' }} />
      </div>
      <div className="mx-8 my-4 flex items-center justify-center gap-6 text-base font-semibold">
        <a href="#hero" className="hover:text-violet-500 transition">Home</a>
        <a href="#about" className="hover:text-violet-500 transition">About</a>
        <a href="#technology" className="hover:text-violet-500 transition">Technologies</a>
        <a href="#projects" className="hover:text-violet-500 transition">Projects</a>
        <a href="#contact" className="hover:text-violet-500 transition">Contact Me</a>
        {/* <a
          href="/resume.pdf"
          download
          className="ml-4 rounded bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 px-4 py-2 text-base text-white hover:bg-blue-700 transition-colors "
        >
          Download Resume
        </a> */}
        <motion.a
          href="/resume.pdf"
          download
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.04, boxShadow: "0 4px 20px rgba(200, 200, 200, 0.3)" }}
          className="inline-block rounded text-white font-semibold transition-all duration-150
          focus:outline-none focus:ring-2 focus:ring-white-300 focus:ring-offset-2 active:scale-95 shadow-md"
          role="button"
          tabIndex={0}
          aria-pressed="false"
        >
            <HoverBorderGradient
                    containerClassName="rounded bg-white dark:bg-black"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                    <span>Download Resume</span>
            </HoverBorderGradient>
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
