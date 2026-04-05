import React from "react";
import Overview from "./Overview";
import ResultSummary from "./ResultSummary";
import CaseStudySummary from "./CaseStudySummary";
import Section from "../../components/Section/Section";

const Blog = () => {
  return (
    <Section>
      <Overview />
      <ResultSummary />
      <CaseStudySummary />
    </Section>
  );
};

export default Blog;
