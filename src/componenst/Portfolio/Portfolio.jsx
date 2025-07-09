import React from "react";
import s from "./Portfolio.module.css";
// import s from "./Portfolio.module.css";

const Portfolio = ({ type }) => {
  const categoryProjects = type.filter((item) =>
    ["html", "javascript", "react"].includes(item.category)
  );
  console.log("Filtered projects:", categoryProjects);
  return (
    <section className="bg-projects-gradient">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div className="">
          <h2 className="font-normal text-4xl text-content tracking-wider">
            My Projects
          </h2>
          <p className="font-light text-xl text-content tracking-wider py-4">
            Education projects.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0 mt-8">
          {categoryProjects.map((item, index) => {
            const formattedIndex = (index + 1).toString().padStart(2, "0");
            console.log("Image", item.image[0]);
            return (
              <div key={item.id}>
                <div className="relative w-full">
                  <img
                    src={item.image[0]}
                    alt={item.caption}
                    width={500}
                    height={850}
                    className="w-full h-auto object-cover object-center"
                  />
                  <a
                    href={item.url}
                    className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition duration-500 ease-in-out flex flex-col items-center justify-center text-white text-center m-4"
                    target="_blank"
                  >
                    <p className={s.cardNumber}>{formattedIndex}</p>
                    <h3 className={`${s.cardTitle} ${s.head}`}>{item.title}</h3>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
