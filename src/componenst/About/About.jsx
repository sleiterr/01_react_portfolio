import React from "react";

const About = () => {
  return (
    <section className="bg-about-gradient">
      <div className="py-[120px] mx-auto px-40 max-w-5x1">
        <div className="grid grid-row-3 gap-4">
          <span className="text-lg text-caption text-content">
            junior developer
          </span>
          <h2 className="text-5xl text-content tracking-wide">About Me</h2>
          <div className="grid grid-cols-2 gap-24">
            <p className="font-light text-content text-xl tracking-wider">
              I am a beginner web developer. I live and study in Denmark. I
              speak Ukrainian, Danish and English. I am currently studying at
              Viborg Media College, where Iam gaining practical web development
              skills and learning the principles andmethods of web design. In
              particular, I am studying visual composition, colorschemes,
              typography and creating intuitive interfaces that improve
              userinteraction with the product.
            </p>

            <p className="font-light text-content text-xl tracking-wider">
              Why web development ? This field is one of the most
              customer-oriented and project-oriented, where you can enjoy
              creating something new. Yes, it is not an easy field of activity,
              but it provides great and unlimited opportunities for skill
              development. The most important thing in this field is practical
              experience in coding and working with clients, which allows you to
              better understand the user experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
