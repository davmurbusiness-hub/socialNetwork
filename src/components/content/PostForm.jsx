import React, {useState} from 'react';
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";

const PostForm = ({create}) => {

  const [post, setPost] = useState({title: '', body: ''});
  const [errorText, setErrorText] = useState('none');


  function addNewPost() {
    const newPost = {
      ...post,
    }
    if (newPost.title !== "" && newPost.body !== "") {
      create(newPost);
      setErrorText('none')
      setPost({title: '', body: ''});
    }
    else setErrorText('block');


  }


  return (

    <form onSubmit={(x) => x.preventDefault()}>
      <MyInput value={post.title} onChange={e => setPost({...post, title: e.target.value})} type="text"
               placeholder="Название поста"/>
      <MyInput value={post.body} onChange={e => setPost({...post, body: e.target.value})} type="text"
               placeholder="Описание поста"/>
      <MyButton onClick={addNewPost}>Выложить пост</MyButton>
      <div style={{color: 'red', display:errorText}}>Введите всю информацию</div>
    </form>

  );
};

export default PostForm;