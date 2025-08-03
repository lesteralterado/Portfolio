import aboutImg from "../assets/projects/about_.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div id="about" className='border-b border-neutral-900 mt-15 py-12'>
      <h2 className='mt-20 text-center text-4xl text-balance font-semibold lg:text-5xl'>
      About
      <span className="text-slate-200 font-semibold"> Me</span>
      </h2>
      <div className="flex flex-wrap align-center justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <img className="w-60 rounded-2xl" src={aboutImg} alt="about"/>
            </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
