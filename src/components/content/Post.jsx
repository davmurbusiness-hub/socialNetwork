import React from 'react';
import MyButton from "../UI/button/MyButton";
import {useNavigate} from "react-router-dom";

const Post = ({post, number, removePost}) => {

  const router = useNavigate()

  return (
    <div className="post">
      {/*<div className="post__image">*/}
      {/*  <img*/}
      {/*    src={logo}*/}
      {/*    alt="image"*/}
      {/*    className="image"*/}
      {/*    loading="lazy"*/}
      {/*  />*/}
      {/*</div>*/}
      <div className="post__content">
        <strong className="nameOfPost" style={{textTransform: 'capitalize'}}> {post.id}. {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>

      <div className="post__btns">
        <MyButton onClick={() => router(`/posts/${post.id}`)} className="button">Открыть пост</MyButton>
        <MyButton onClick={() => removePost(post)} className="button">Удалить</MyButton>
      </div>
    </div>
  )
    ;
};

export default Post;