import aboutImg from "../assets/projects/logo.png";
import { ABOUT_TEXT } from "../constants";
import TiltedCard from "../Components/ui/titled-card";

const About = () => {
  return (
    <div id="about" className='border-b border-neutral-900 mt-8 lg:mt-15 py-8 lg:py-12'>
      <h2 className='mt-8 lg:mt-20 text-center text-3xl sm:text-4xl text-balance font-semibold lg:text-5xl'>
      About
      <span className="text-slate-200 font-semibold"> Me</span>
      </h2>
      <div className="flex flex-wrap items-center justify-center">
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
                <TiltedCard
                  imageSrc={aboutImg}
                  altText=""
                  captionText=""
                  containerHeight="250px"
                  containerWidth="250px"
                  imageHeight="250px"
                  imageWidth="250px"
                  rotateAmplitude={12}
                  scaleOnHover={1.2}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  // overlayContent={
                  //   <p className="tilted-card-demo-text">
                  //     Lester Royales - Web Developer
                  //   </p>
                  // }
                />
            </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-4 lg:py-6 text-sm sm:text-base">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
