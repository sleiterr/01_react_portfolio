import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

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
    <section>
      <div className="py-[120px] mx-auto px-50 max-w-5x1">
        <div>
          <h2 className="font-normal text-5xl text-heading-primary tracking-wider mb-6">
            {project.title}
          </h2>
          <p className="font-light text-4xl text-subheading tracking-wider py-4">
            {project.caption}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;
