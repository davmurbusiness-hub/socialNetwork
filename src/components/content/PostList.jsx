import React from 'react';
import Post from "./Post";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({removePost, posts}) => {


  if (!posts.length) {
    return (
      <h1 style={{textAlign: "center", marginTop: "10px"}} className="App">Идет загрузка</h1>
    )
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Список постов</h1>
        {posts.map((post, index) => (
          <Post key={post.id} post={post} number={index + 1} removePost={removePost}/>
        ))}



    </div>
  );
};

export default PostList;