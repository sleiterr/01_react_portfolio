import React from "react";
import { vercel, gitHub } from "../../assets/iconExports/index";

const workFlowData = [
  { src: gitHub, alt: "GitHub", className: "size-12" },
  { src: vercel, alt: "vercel", className: "w-[7rem] h-auto" },
];

export const WorkFlow = () => {
  return (
    <div className="">
      <h4 className="font-light text-content text-base tracking-wider mb-4">
        Development Workflow
      </h4>
      <div className="flex items-center  justify-center gap-4 pr-4">
        {workFlowData.map((flow, index) => (
          <img
            key={index}
            src={flow.src}
            alt={flow.alt}
            className={flow.className}
          />
        ))}
      </div>
    </div>
  );
};
