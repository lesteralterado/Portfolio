import logo from "../assets/logoo.png";
import resume from "../assets/resume.pdf";
import { motion } from "framer-motion";
import { HoverBorderGradient } from "../Components/ui/hover-border-gradient";
import { Menu, X } from "lucide-react";
import { useState } from "react"; 
// import { Moon, Sun } from "lucide-react"
// import { useTheme } from "next-themes"
// import { Button } from "../Components/ui/button"
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "./ui/dropdown-menu"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const { setTheme } = useTheme()
  return (
  <nav className="fixed top-0 z-50 mb-23 w-full flex items-center justify-between shadow bg-white/10 backdrop-blur-lg border-b border-white/20">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2" src={logo} alt="logo" style={{ width: '80px', height: 'auto' }} />
      </div>

       {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-base font-semibold">
        {["Home", "About", "Technologies", "Projects", "Contact Me"].map((text, i) => (
          <a key={i} href={`#${text.toLowerCase().replace(/\s/g, "")}`} className="hover:text-violet-500 transition">
            {text}
          </a>
        ))}
        {/* <a
          href="/resume.pdf"
          download
          className="ml-4 rounded bg-gradient-to-r from-pink-300 via-slate-500
                    to-purple-500 px-4 py-2 text-base text-white hover:bg-blue-700 transition-colors "
        >
          Download Resume
        </a> */}
        <motion.a
          href={resume}
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
                    containerClassName="rounded bg-black"
                    as="button"
                    className="bg-black text-white flex items-center space-x-2"
            >
                    <span>Download Resume</span>
            </HoverBorderGradient>
        </motion.a>
        {/* <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu> */}
      </div>

      {/* Mobile Hamburger */}
      <div className="mr-15 md:hidden">
        <button
          className="pr-50"
         onClick={() => setMenuOpen(!menuOpen)}>
        { menuOpen ? 
          <X size={28} className="text-slate-200 hover:text-slate-500 transition" /> : <Menu size={28} className="text-slate-200 hover:text-slate-500 transition" /> 
        }
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-zinc-900 shadow-md px-6 py-4 flex flex-col gap-4 md:hidden z-50 transition-all">
          {["Home", "About", "Technologies", "Projects", "Contact Me"].map((text, i) => (
            <a key={i} href={`#${text.toLowerCase().replace(/\s/g, "")}`} className="hover:text-violet-500 transition">
              {text}
            </a>
          ))}

          <a href={resume} download className="text-white font-semibold">
            <HoverBorderGradient
              containerClassName="rounded bg-black"
              as="button"
              className="bg-black text-white flex items-center space-x-2"
            >
              <span>Download Resume</span>
            </HoverBorderGradient>
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;