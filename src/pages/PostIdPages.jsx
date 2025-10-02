import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching.js";
import PostService from "../API/PostService.js";
import Loader from "../components/UI/Loader/Loader.jsx";

const PostIdPages = () => {

  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);


  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
    }
  )
  const [fetchCommentsById, isComLoading, ComError] = useFetching(async (id) => {
      const response = await PostService.getCommentsById(id);
      setComments(response.data);
      console.log(response.data);
    }
  )

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, [])

  return (
    <div>
      <h1>Пост №{params.id} </h1>
      {isLoading
        ? <Loader/>
        : <h2>{post.id}. {post.title}</h2>
      }
      <h3>
        Комменты
      </h3>
      {isComLoading
        ? <Loader/>
        : <div>
          {comments.map((com, index) => (
            <div key={index} className="comment">
              <h3>{com.email}</h3>
              <div>{com.body}</div>
            </div>
          ))
          }
        </div>


      }
    </div>
  );
};

export default PostIdPages;