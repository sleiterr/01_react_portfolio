import { Link } from "react-scroll";
import heroBg from "../../assets/img/hero-design---Copy-1.jpg";
import { ButtHero } from "./ButtHero";
import { GitLinks } from "./GitLinks";
import { GradientHeader } from "./GradientHeader";

const heroTextDoc = [
  {
    id: 1,
    text: "I am currently studying web development at Media College Denmark, where I am building skills in both web development and UI/UX design.",
    className:
      "font-light text-base md:text-lg text-content tracking-wider leading-[1.5]",
  },
];

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
                <GradientHeader />
              </h2>
            </div>
            {/* Gradient */}
            <HeroItem />

            {/* Btt */}
            <ButtHero />
          </div>
        </div>
        <GitLinks />
      </section>
    </>
  );
};

export default HeroSection;

const HeroItem = () => {
  return (
    <div className="w-full min-w-xs max-w-sm md:min-w-auto md:max-w-[34rem]">
      {heroTextDoc.map((p) => (
        <p key={p.id} className={p.className}>
          {p.text}
        </p>
      ))}
    </div>
  );
};
