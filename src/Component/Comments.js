import React from "react";

const Comments = ({ comments }) => {
  return (
    <>
      <div className="comments-section">
        <h1 className="side-head comment-head">Comments</h1>
        {comments.map((comments, index) => (
          <div key={index} className="comment-box">
            <h4 className="comments-user">
              <span className="user">Username:</span> {comments.username}
            </h4>
            <h4 className="comment">
              <span className="user-text">Comment:</span> {comments.text}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
};

export default Comments;
