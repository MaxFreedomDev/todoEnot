import React from "react";
import useTodoContext from "utils/hooks/useTodoContext";
import NewsWidget from "../widgets/newsWidget";

const News: React.FC = () => {
  const {
    state: { showNews },
  } = useTodoContext();
  return <>{showNews && <NewsWidget />}</>;
};

export default News;
