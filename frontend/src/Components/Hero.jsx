import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Untitled design.png";
import { delay, motion } from "framer-motion";
import "../index.css"; // Import the CSS for animation
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";

const highlight = "font-semibold text-slate-400";

const container = (delay) => ({
    hidden: {X: -100, opacity: 0},
    visible: {
        X: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});

const Hero = () => {
return (
    <div id="hero" className="border-b border-neutral-900 pt-29 lg:mb-35 mt-15">
            <div className="flex flex-wrap mt-20">
                    <div className="w-full lg:w-1/2">
                            <div className="flex flex-col pt-29 items-center lg:items-start">
                                    <motion.h1 
                                            variants={container(0)}
                                            initial="hidden"
                                            animate="visible"
                                            className="pt-16 pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                                    >
                                            Lester Royales
                                    </motion.h1>
                                    <motion.span 
                                            variants={container(0.5)}
                                            initial="hidden"
                                            animate="visible"
                                            className="bg-gradient-to-r from-slate-400 via-slate-300
                                            to-slate-500 bg-clip-text text-3xl tracking-tight text-transparent"
                                    >
                                            Front End Developer
                                    </motion.span>
                                    <motion.p 
                                            variants={container(1)}
                                            initial="hidden"
                                            animate="visible"
                                            className="my-2 max-w-xl py-6 tracking-tighter"
                                    >
                                            Hi! I'm a Front-end Developer with experience in building responsive web and mobile apps using React, Next.js, TypeScript, and React Native. I focus on creating{" "}
                                                <span className={highlight}>user-friendly systems</span>
                                                {" "}that improve workflows,{" "}
                                                <span className={highlight}>attract</span>
                                                {" "}more customers, and{" "}
                                                <span className={highlight}>solve real-world problems</span>
                                                {" "}especially for rental businesses.
                                    </motion.p>
                                    <motion.a
                                            href="#contact"
                                            whileTap={{ scale: 0.96 }}
                                            whileHover={{ scale: 1.04, boxShadow: "0 4px 20px rgba(200, 200, 200, 0.1)" }}
                                            className="inline-block rounded text-white font-semibold transition-all duration-150
                                            focus:outline-none focus:ring-2 focus:ring-white-300 focus:ring-offset-2 active:scale-95 shadow-md"
                                            role="button"
                                            tabIndex={0}
                                            aria-pressed="false"
                                    >
                                        <HoverBorderGradient
                                                containerClassName="rounded"
                                                as="button"
                                                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
                                        >
                                                <span>Get in Touch</span>
                                        </HoverBorderGradient>
                                    </motion.a>
                            </div>
                    </div>
                    <div className="w-full lg:w-1/2 lg:p-8">
                            <div className="flex justify-center -mt-25" 
                                 style={{
                                        width: "520px",
                                        height: "auto",
                                        margin: "20px auto",
                                        borderRadius: "29% 71% 76% 24% / 73% 59% 41% 27%", 
                                        background: "linear-gradient(135deg, #E3E3E3 0%, #000000 100%)" 
                                        }}>
                                    <motion.img 
                                            initial={{x: 100, opacity: 0}}
                                            animate={{x: 0, opacity: 1}}
                                            transition={{duration: 1, delay: 1.2}}
                                            src={profilePic} alt="Lester Royals" 
                                            
                                    />
                            </div>
                    </div>
            </div>
    </div>
);
};


export default Hero;
