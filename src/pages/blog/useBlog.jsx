import React, { useState, useEffect } from "react";
import { fetchBlogData } from "../../utils/api";

// Custom hook to fetch blog data
export function useBlog() {
  // State to hold blog data, loading status, and error message
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch blog data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchBlogData();
        setBlogData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // return blog data, loading status, and error message
  return { blogData, loading, error };
}
