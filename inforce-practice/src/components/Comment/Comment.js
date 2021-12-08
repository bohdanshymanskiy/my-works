import React from "react";
import CommentCSS from './Comment.module.css';

function Comment({ commentItem }) {
  const { description, date } = commentItem

  return <div className={CommentCSS.comment_item}>
    <div className={CommentCSS.comment_date}>
      {date}
    </div>
    <div className={CommentCSS.comment_text}>
      {description}
    </div>
  </div >
}
export default Comment;