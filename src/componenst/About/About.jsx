import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <section className={s.aboutSection}>
      <div className={`${s.aboutContainer} container`}>
        <h2 className={s.aboutTitle}>About Me</h2>
        <div className={s.aboutFeature}>
          <div className={s.aboutContent}>
            <p className={s.aboutSubtitle}>
              I am a beginner web developer. I live and study in Denmark. I
              speak Ukrainian, Danish and English. I am currently studying at
              Viborg Media College, where Iam gaining practical web development
              skills and learning the principles andmethods of web design. In
              particular, I am studying visual composition, colorschemes,
              typography and creating intuitive interfaces that improve
              userinteraction with the product.
            </p>
          </div>

          <div className={s.aboutContent}>
            <p className={s.aboutDevelopment}>
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
