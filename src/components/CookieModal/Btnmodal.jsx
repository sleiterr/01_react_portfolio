import React from "react";
import clsx from "clsx";

const BtnModal = ({ children, className, ...rest }) => {
  return (
    <>
      <button
        type="button"
        {...rest}
        className={clsx(
          "font-normal text-white text-base",
          "inline-block",
          "bg-blue-500 px-4 py-2 rounded cursor-pointer",
          "hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",
          "transition-colors duration-300 ease-in-out",
          className,
        )}
      >
        {children}
      </button>
    </>
  );
};

export default BtnModal;

// focus:ring-blue-300 for lighter blue ring on focus
// focus:ring-opacity-75 for more visible ring on focus
// focus:ring-2 for thicker ring on focus
// hover:bg-blue-600 for darker blue on hover
