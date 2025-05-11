import React from "react";
import s from "./Portfolio.module.css";
// import s from "./Portfolio.module.css";

const Portfolio = ({ type }) => {
  const categoryProjects = type.filter((item) =>
    ["js-project", "react-project"].includes(item.category)
  );
  console.log("Filtered projects:", categoryProjects);
  return (
    <section>
      <div className={`${s.galleryContainer} container`}>
        <div className={s.gallery}>
          {categoryProjects.map((item, index) => {
            const formattedIndex = (index + 1).toString().padStart(2, "0");
            return (
              <div key={item.id} className={s.galleryItem}>
                <div className={s.galleryContent}>
                  <img src={item.src} alt={item.caption} className={s.img} />
                  <a href={item.url} className={s.overlay} target="_blank">
                    <p className={s.cardNumber}>{formattedIndex}</p>
                    <h3 className={`${s.cardTitle} ${s.head}`}>{item.title}</h3>
                  </a>
                </div>
                <p className={s.imgCaption}>{item.caption}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
