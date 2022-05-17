import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {my_articles} from "../../redux/Action/articles"
import ArticlesCard from './ArticlesCard';
const Article = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(my_articles());
  }, [dispatch]);
   const { myarticle, loading } = useSelector((state) => state.articles);
  return (
    <div>
      {myarticle.map((articles) => (
        <ArticlesCard key={articles._id} articles={articles} />
      ))}
    </div>
  );
}

export default Article