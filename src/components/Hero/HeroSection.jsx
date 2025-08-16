import { Link } from "react-scroll";
import heroBg from "../../assets/img/hero-design---Copy-1.jpg";
import { FaGithub } from "react-icons/fa";
// import { GoArrowRight } from "react-icons/go";
import { BsArrowLeft } from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative w-full bg-cover bg-no-repeat bg-center "
        id="hero"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center center",
          aspectRatio: "8 / 5",
        }}
      >
        <div className="absolute top-[50%] left-[100px] flex items-start justify-center">
          <div className="gtid:container flex flex-col items-start justify-center text-left">
            <div className="mb-10">
              <h1 className="font-code font-extrabold text-subheading text-7xl leading-[1.2em]">
                Hi, I'm Oleg.
              </h1>
              <h2 className="font-code font-extrabold text-subheading text-7xl">
                I am <span className="text-heading-accent">Web Developer</span>
              </h2>
            </div>
            <div className="w-[34rem]">
              <p className="font-light text-2xl text-content tracking-wider leading-[1.4em]">
                I am currently studying web development at Media College
                Denmark, where I am building skills in both web development and
                UI/UX design.
              </p>
            </div>
            <button className="font-light text-xl tracking-wide rounded-md text-content py-5 px-16 bg-button-gradient mt-12">
              Download CV
            </button>
          </div>
        </div>
        <div className="absolute end-25 bottom-15">
          <Link
            href="https://github.com/sleiterr"
            target="_blank"
            className="group relative flex gap-4 font-normal text-xl items-center cursor-pointer"
          >
            <FaGithub className="text-white w-[42px] h-[42px] transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]" />

            <p className="relative font-code text-3xl text-white tracking-wide m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8] ">
              View GitHub
            </p>
            <BsArrowLeft className="w-6 h-6 text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8] rotate-180" />
            <span className="absolute left-0 -bottom-4 w-0 h-[2px] bg-[#1ed1a8] transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
