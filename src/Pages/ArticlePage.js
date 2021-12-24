import React, { useState, useEffect } from "react";
import articleContent from "../data/Article-content";
import { useParams } from "react-router-dom";

import Articles from "../Component/Article";
import Comments from "../Component/Comments";
import Addcomment from "../Component/Addcomment";
import Social from "../Component/Social";

const Article = ({ match }) => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);

  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) {
    return <h1>Article does not exist</h1>;
  }
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <>
      <div className="container">
        <p id="main-tag">{article.mainTag}</p>
        <div id="blog-head">
          <h1 id="blog-title">{article.title}</h1>
          <div id="details">
            <div id="date" className="blog-detail">
              {article.date}
            </div>
            <div id="aurthor" className="blog-detail">
              {article.aurthor}
            </div>
          </div>
        </div>
        <div className="post">
          <div className="blog-space">
            {article.content.map((paragraph, index) => (
              <p className="content" key={index}>
                {paragraph}
              </p>
            ))}

            <Social />

            <Comments comments={articleInfo.comments} />
            <Addcomment articleName={name} setArticleInfo={setArticleInfo} />
            <div className="on-page-blogs">
              <h1 className="latest-blog-head">Other Related Blogs</h1>
              <div className="other-blogs">
                <Articles articles={otherArticles} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
