import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_articles } from "../../redux/Action/articles";
import ArticlesCard from "../Enseignant/ArticlesCard";

const Articles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_articles());
  }, [dispatch]);
  const { articles, loading } = useSelector((state) => state.articles);
  return (
    <div>
      {articles.map((article) => (
        <ArticlesCard key={article._id} articles={articles} />
      ))}
    </div>
  );
};

export default Articles;
