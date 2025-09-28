// Portfolio.jsx
import React, { useState, useEffect } from "react"; // Adjust the path as necessary
import Pagination from "../Pagination/Pagination";
import { Link } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "motion/react";
import FilterCard from "./FilterCard";

import { containerVariants, cardVariants } from "../animation/Portfolio.js";

const Portfolio = ({ currentPage, setCurrentpage }) => {
  const [project, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // const [category, setCategory] = useState("all");
  const [direction, setDirection] = useState(1);

  const itemsPerPage = 2;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate fetching data from an API or local JSON file
        const res = await fetch("/data/projectsData.json"); // Adjust the path as necessary
        const data = await res.json();

        setProjects(data.projects);
      } catch (error) {
        setError("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // useEffect(() => {

  //   );
  // }, []);

  const categoryProjects = (project ?? []).filter((item) =>
    ["html", "javascript", "react", "Next.js"].includes(item.category)
  );

  console.log("Filtered projects:", categoryProjects);

  const totalPage = Math.ceil(categoryProjects.length / itemsPerPage);
  const pageItems = categoryProjects.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPage) {
      setCurrentpage(1);
    }
  }, [currentPage, setCurrentpage, totalPage]);

  if (loading) {
    return (
      <p className="font-normal text-2xl text-red-600 text-center">
        ...Loading
      </p>
    );
  }

  if (error || !project) {
    return (
      <p className="font-normal text-2xl text-cyan-500 text-center">
        Product not found !
      </p>
    );
  }

  return (
    <section className="" id="portfolio">
      <div className=" px-4 md:px-0 py-[3.7rem] md:py-[8rem] mx-auto md:max-w-7xl">
        <div className="relative mb-6">
          <h2 className="font-code font-normal text-4xl md:text-5xl text-heading-primary tracking-wider mb-4 md:mb-6">
            My Projects
          </h2>
          <div className="absolute before:content-[''] left-10 before:w-30 before:h-px before:inline-block before:align-middle before:bg-gradient-to-r before:from-cyan-400 before:to-emerald-400" />

          <p className="font-light text-base text-subheading tracking-wider py-4">
            Education projects.
          </p>

          <div className="absolute left-0 bottom-0 after:content-[''] after:w-30 after:h-px after:inline-block after:align-middle after:bg-gradient-to-r after:from-cyan-400 after:to-emerald-400" />
        </div>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {/* FilterCard */}
          <FilterCard
            currentPage={currentPage}
            totalPage={totalPage}
            setCurrentpage={setCurrentpage}
            setDirection={setDirection}
          />

          <div className="col-span-2">
            <AnimatePresence mode="wait" custom={direction}>
              {/* className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6" */}
              <Motion.div
                key={currentPage}
                variants={containerVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                custom={direction}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
              >
                {pageItems.map((item, index) => {
                  const realIndex =
                    (currentPage - 1) * itemsPerPage + index + 1;
                  const formattedIndex = realIndex.toString().padStart(2, "0");

                  console.log("Image", item.image[0]);

                  return (
                    <Motion.div
                      key={item.id}
                      variants={cardVariants}
                      custom={direction}
                    >
                      <Link
                        className="relative w-full"
                        to={`/project-detail/${item.id}`}
                      >
                        <img
                          src={item.image[0]}
                          alt={item.caption}
                          className="w-full h-auto object-cover object-center rounded-xl"
                        />
                        <div className="absolute inset-0 bg-black/80 rounded-xl opacity-0 hover:opacity-100 transition duration-500 ease-in-out flex flex-col items-center justify-center text-white text-center m-4">
                          <p className="absolute font-normal text-7xl  right-4 top-4 text-number-overlay tracking-wider">
                            {formattedIndex}
                          </p>
                          <h3 className="absolute font-code font-medium text-3xl tracking-wider text-center">
                            {item.title}
                          </h3>
                        </div>
                      </Link>
                    </Motion.div>
                  );
                })}
              </Motion.div>
            </AnimatePresence>
          </div>
          <div className="flex md:hidden">
            <Pagination
              currentPage={currentPage}
              totalPage={totalPage}
              setCurrentpage={setCurrentpage}
              setDirection={setDirection}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
