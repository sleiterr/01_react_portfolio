import { Link } from "react-scroll";
import heroBg from "../../assets/img/hero-design---Copy-1.jpg";
import { ButtHero } from "./ButtHero";
import { FaGithub } from "react-icons/fa";
// import { GoArrowRight } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";
import GradientText from "../animation/GradientText";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full min-w-[320px] md:w-full h-screen md:h-auto bg-cover bg-no-repeat bg-center md:aspect-[8/5]"
        id="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center center",
          // aspectRatio: "8 / 5",
        }}
      >
        <div className="absolute translate-y-1/2 md:inset-y-1/3 md:left-10 flex items-start justify-center">
          <div className="px-4 md:px-0 flex flex-col items-start justify-center text-left">
            <div className="mb-4 w-full">
              <h1 className="font-code font-extrabold text-subheading text-5xl md:text-6xl leading-[1.4] md:leading-[1.2]">
                Hi, I'm Oleg.
              </h1>
              <h2 className="flex-wrap md:flex items-center gap-2 md:gap-4 font-code font-extrabold text-subheading text-5xl md:text-6xl leading-[1.2]">
                I am
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={6}
                  showBorder={false}
                  className="backdrop-blur-none"
                >
                  Web Developer
                </GradientText>
                {/* <span className="text-heading-accent">
                  Web Developer
                </span> */}
              </h2>
            </div>
            <div className="w-full min-w-xs max-w-sm md:min-w-auto md:max-w-[34rem]">
              <p className="font-light text-base md:text-lg text-content tracking-wider leading-[1.5]">
                I am currently studying web development at Media College
                Denmark, where I am building skills in both web development and
                UI/UX design.
              </p>
            </div>

            <ButtHero />
          </div>
        </div>
        <div className="absolute bottom-3 right-5 md:end-25 md:bottom-15">
          <a
            href="https://github.com/sleiterr"
            target="_blank"
            className="group relative flex gap-4 font-normal text-base md:text-xl items-center cursor-pointer"
          >
            <FaGithub className="text-white w-[42px] h-[42px] transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]" />

            <p className="relative font-code text-2xl md:text-3xl text-white tracking-wide m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8] ">
              View GitHub
            </p>
            <BsArrowLeft className="hidden md:block w-6 h-6 text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8] rotate-180" />
            <span className="absolute left-0 -bottom-4 w-0 h-[2px] bg-[#1ed1a8] transition-all duration-300 ease-out group-hover:w-full"></span>
          </a>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
