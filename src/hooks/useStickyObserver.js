import React, { useEffect, useState } from "react";

const useStickyObserver = (ref, rootMargin = "-60px") => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const target = ref?.current;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin,
      }
    );

    observer.observe(target);

    return () => {
      if (target) observer.unobserve(target);
    };
  }, [ref, rootMargin]);

  return isSticky;
};

export default useStickyObserver;
