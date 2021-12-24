import React, { useState } from "react";

const Addcomment = ({ articleName, setArticleInfo }) => {
  const [username, setUsername] = useState("");
  const [commentText, setCommentText] = useState("");

  const addComment = async () => {
    const result = await fetch(`/api/articles/${articleName}/add-comments`, {
      method: "post",
      body: JSON.stringify({ username, text: commentText }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <>
      <form className="comment-form">
        <h3 className="addComment-head">Add a comment</h3>
        <label htmlFor="username">Name :</label>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="add-comment">Add comment:</label>
        <textarea
          name="comments"
          id="add-comment"
          cols="30"
          rows="10"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        ></textarea>
        <button id="add-comment-btn" onClick={() => addComment()}>
          Add comment
        </button>
      </form>
    </>
  );
};

export default Addcomment;
