import React from "react";

import articleContent from "../data/Article-content";
import Articles from "../Component/Article";

const ArticleList = () => {
  return (
    <>
      <div className="container">
        <h1 className="bloglist-head">Blogs</h1>
        <div className="article-list">
          <div className="latest-blogs list-container">
            <h1 className="latest-blog-head">Latest Blog</h1>

            <div className="latest-items">
              <Articles articles={articleContent} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ArticleList;
