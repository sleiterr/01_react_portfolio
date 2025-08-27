import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MdCollections } from "react-icons/md";

// import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import clsx from "clsx";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProject = async () => {
      try {
        // Simulate fetching data from an API or local JSON file
        const res = await fetch("/data/projectsData.json"); // Adjust the path as necessary
        const data = await res.json();
        const foundProject = data.find((item) => item.id === parseInt(id));

        setProject(foundProject);
        if (!foundProject) {
          throw new Error("Project not found");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [id]);

  if (loading) return <p>...Loading</p>;
  if (error || !project) return <p>Product not found</p>;

  return (
    <section className="relative">
      <div className="py-[8rem] mx-auto md:max-w-7xl">
        <div className="grid grid-cols-2 items-center justify-center gap-8">
          <div className="flex items-center justify-center">
            <img
              src={project.preview}
              alt="project image"
              className="w-[560px] h-auto border-t-1  border-r-1 border-sky-500 pt-2 pr-2"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[590px]">
            <div className="absolute end-62 top-30">
              <ul className="flex items-center gap-8">
                <li className="relative">
                  <Link
                    className={clsx(
                      "flex items-center font-light tracking-wider text-content text-xl gap-2",
                      "before:content[''] before:absolute before:w-0 before:h-0.5 before:rounded-xs before:bg-white before:bottom-[-.25rem] before:left-0 before:transition-all before:duration-300 hover:before:w-full"
                    )}
                    to="/"
                  >
                    Home <IoIosArrowRoundForward />
                  </Link>
                </li>
                <li className="relative">
                  <Link
                    className={clsx(
                      "flex items-center gap-2 font-light tracking-wider text-content text-xl",
                      "after:absolute after:content-[''] hover:after:w-full after:h-0.5 after:bg-white after:rounded-xs after:-bottom-[.25rem] after:left-0 after:opacity-0 after:transition-all after:duration-300 hover:after:opacity-100"
                    )}
                    to="/#portfolio"
                  >
                    Portfolio <MdCollections />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 mb-[40px]">
              <h2 className="font-code font-normal text-heading-primary text-5xl tracking-wide">
                {project.title}
              </h2>
              <p className="font-light text-xl text-content tracking-wide">
                {project.caption}
              </p>
            </div>

            <ul className="relative w-full after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[1px] after:bg-white before:content[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[1px] before:bg-white flex flex-col gap-2 mb-10">
              <li className=" flex justify-between w-full py-4">
                <p className="font-light text-xl text-content tracking-wide">
                  Year:
                </p>
                <p className="font-light text-xl text-content tracking-wide">
                  {project.date}
                </p>
              </li>
              <li className="relative h-full after:content[''] after:absolute after:top-0 after:left-0 after:w-full after:h-[1px] after:bg-white flex justify-between py-4">
                <p className="font-light text-xl text-content tracking-wide">
                  Role:
                </p>
                <p className="font-light text-xl text-content tracking-wide  text-right w-[320px] leading-8">
                  {project.role}
                </p>
              </li>
            </ul>
            <div className="flex justify-between w-full">
              <a
                href={project.url}
                target="_blank"
                className="group relative flex items-center gap-2 font-normal text-xl text-content tracking-wider"
              >
                <p className="m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]">
                  Live Page
                </p>
                <IoIosArrowRoundForward
                  className={clsx(
                    "w-[2rem] h-[2rem]",
                    " text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]"
                  )}
                />
              </a>
              <a
                href={project.github}
                target="_blank"
                className="group relative flex items-center gap-4 font-light text-xl text-content tracking-wider"
              >
                <p className="m-0 overflow-hidden transition-colors duration-300 ease-out group-hover:text-[#1ed1a8]">
                  View GitHub
                </p>
                <FaGithub
                  className={clsx(
                    "w-[2.1rem] h-full",
                    "text-white transition-all duration-300 ease-in-out delay-200 group-hover:translate-x-1 group-hover:text-[#1ed1a8]"
                  )}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
