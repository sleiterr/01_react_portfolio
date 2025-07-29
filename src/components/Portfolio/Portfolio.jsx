import React, { useState, useEffect } from "react"; // Adjust the path as necessary
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [project, setProjects] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // Simulate fetching data from an API or local JSON file
        const res = await fetch("/public/data/projectsData.json"); // Adjust the path as necessary
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        setError("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const categoryProjects = project?.filter((item) =>
    ["html", "javascript", "react"].includes(item.category)
  );
  console.log("Filtered projects:", categoryProjects);

  if (loading) return <p>...Loading</p>;
  if (error || !project) return <p>Product not found</p>;

  return (
    <section className="">
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div className="relative mb-20">
          <h2 className="font-code font-normal text-5xl text-heading-primary tracking-wider mb-6">
            My Projects
          </h2>
          <div className="absolute right-0 before:content-[''] before:w-60 before:h-1 before:inline-block before:align-middle before:bg-gradient-to-r before:from-cyan-400 before:to-emerald-400" />

          <p className="font-light text-4xl text-subheading tracking-wider py-4 text-right">
            Education projects.
          </p>

          <div className="absolute bottom-0 right-0 after:content-[''] after:w-60 after:h-1 after:inline-block after:align-middle after:bg-gradient-to-r after:from-cyan-400 after:to-emerald-400" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-0">
          {categoryProjects.map((item, index) => {
            const formattedIndex = (index + 1).toString().padStart(2, "0");
            console.log("Image", item.image[0]);
            return (
              <div key={item.id}>
                <Link
                  className="relative w-full"
                  to={`/project-detail/${item.id}`}
                >
                  <img
                    src={item.image[0]}
                    alt={item.caption}
                    width={500}
                    height={850}
                    className="w-full h-auto object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-black/80 opacity-0 hover:opacity-100 transition duration-500 ease-in-out flex flex-col items-center justify-center text-white text-center m-4">
                    <p className="absolute font-normal text-7xl  right-4 top-4 text-number-overlay tracking-wider">
                      {formattedIndex}
                    </p>
                    <h3 className="absolute font-code font-medium text-3xl tracking-wider text-center">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
