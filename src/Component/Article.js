import React from "react";

import { Link } from "react-router-dom";

const Article = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className="list-card">
          <Link to={`/blogs/${article.name}`}>
            <div className="card-img">
              <img
                src={article.thumbnail}
                alt="thumbnail"
                className="list-images"
              />
            </div>
          </Link>
          <div className="card-details">
            <Link key={index} to={`/blogs/${article.name}`}>
              <h3 className="card-title">{article.title}</h3>
            </Link>
            <p className="card-subtext">
              {article.content[0].substring(0, 120)}....
            </p>
            <Link to={`/blogs/${article.name}`} className="card-learn-more">
              Read more
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Article;
