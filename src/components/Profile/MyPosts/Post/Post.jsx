import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://im0-tub-by.yandex.net/i?id=ec303319b74171273740a33cc6dbcb6c&n=13&exp=1" />
      {props.message}
      <div>
        <span>like - {props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
