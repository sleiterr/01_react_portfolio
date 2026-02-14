import { AnimatePresence, motion as Motion } from "motion/react";

const AnimatedNumber = ({ value }) => {
  return (
    <div className="relative flex items-center justify-center overflow-hidden h-8 w-8">
      <AnimatePresence mode="wait">
        <Motion.span
          key={value}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className=""
        >
          {value}
        </Motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedNumber;
