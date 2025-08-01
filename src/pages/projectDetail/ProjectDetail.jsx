import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// import { Link as ScrollLink } from "react-scroll";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

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
    <section className="">
      <div className="pt-16">
        <div className="grid grid-cols-2 items-center justify-center gap-4 py-[120px] px-50 mx-auto max-w-5x1">
          <div className="flex items-center justify-center">
            <img
              src={project.preview}
              alt="project image"
              className="w-[560px] h-auto"
            />
          </div>
          <div className="flex flex-col items-start justify-center w-[590px]">
            <div className="">
              <ul className="flex items-center gap-4">
                <li className="">
                  <Link
                    className="flex items-center text-content text-xl"
                    to="/"
                  >
                    Home <IoIosArrowRoundForward className="" />
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="flex items-center text-content text-xl"
                    to="/#portfolio"
                  >
                    Portfolio
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-4 mb-[40px]">
              <h2 className="font-code font-normal text-heading-primary text-5xl tracking-wide ">
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
                className="flex items-center gap-4 font-light text-xl text-content tracking-wide"
              >
                Live Page <IoIosArrowRoundForward className="w-[48px] h-full" />
              </a>
              <a
                href={project.github}
                target="_blank"
                className="flex items-center gap-4 font-light text-xl text-content tracking-wide"
              >
                View GitHub <FaGithub className="w-[32px] h-full" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
