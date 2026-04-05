import React from "react";

const BlogCard = ({ children, className }) => {
  return (
    <div
      className={`w-full h-auto rounded-xl px-4 py-5 bg-white/20 backdrop-blur-sm z-1 border-l-1 border-t-1 border-sky-500 ${className}`}
    >
      {children}
    </div>
  );
};

export default BlogCard;
