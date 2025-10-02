import React, {use, useEffect, useMemo, useRef, useState} from "react";
import {usePosts} from "../hooks/usePosts.js";
import {useFetching} from "../hooks/useFetching.js";
import MyButton from "../components/UI/button/MyButton.jsx";
import MyModal from "../components/UI/modal/MyModal.jsx";
import PostForm from "../components/content/PostForm.jsx";
import PostFilter from "../components/content/PostFilter.jsx";
import Loader from "../components/UI/Loader/Loader.jsx";
import PostList from "../components/content/PostList.jsx";
import {getPagesCount} from "../utils/pajes.js";
import PostService from "../API/PostService.js";
import {useObserver} from "../hooks/useObserver.js";
import MySelect from "../components/UI/select/MySelect.jsx";


function Posts() {


  const [posts, setPosts] = useState([]);                                      // Список постов
  const [filter, setFilter] = useState({sort: '', search: ''}); // Фильтр по поиску и категориям
  const [modal, setModal] = useState(false);                                 // Появляющееся окно(создания поста)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.search);                  // Список сортированных постов по фильтру, появляющийся из хука usePosts
  const [totalPages, setTotalPages] = useState(0);                           // Количество всех страниц с постами
  const [limit, setLimit] = useState(10);                                    // Количество постов на страницу
  const [page, setPage] = useState(1);                                       // Страница на данный момент
  const lastElement = useRef();
  let limitChanged = false;


  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const [newPosts, respones] = await PostService.getAllPosts(limit, page);
    setPosts([...posts, ...newPosts]);
    const totalCount = respones.headers["x-total-count"]
    setTotalPages(getPagesCount(totalCount, limit));
  }) //Обработка ошибок и экрана загрузки постов


  useObserver(lastElement,  !limitChanged && page < totalPages, isPostsLoading, () => {
    setPage(prev => prev + 1);
    console.log("obs " + page + " " + limit);
  })


  useEffect(() => {
    fetchPosts(limit, page);
    limitChanged = false;
    console.log("fet " + page + " " + limit);
  }, [page])


  useEffect(() => {
    setPosts([])
    setPage(1)
    limitChanged = true
    console.log("lim " + page + " " + limit);
  }, [limit]);


  const createPost = (newPost) => {
    const maxId = posts.reduce((max, post) => Math.max(max, post.id), 0);
    newPost = {...newPost, id: maxId + 1};
    setPosts([...posts, newPost]);
    setModal(false);
  }


  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));

  }


  return (
    <div className="App">
      <MyButton style={{marginTop: "30px"}} onClick={() => setModal(true)}>
        Создать пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>{<PostForm create={createPost}/>}</MyModal>

      <hr style={{margin: '15px 0'}}></hr>

      <PostFilter filter={filter} setFilter={setFilter}/>
      {postError &&
        <h1>Ошибка ${postError}</h1>}

      <MySelect
        value={limit}
        onChange={val => setLimit(val)}
        defaultValue={"Количество постов"}
        options={[
          {value: 5, name: "5"},
          {value: 10, name: "10"},
          {value: 15, name: "15"},
          {value: -1, name: "показать все"}
        ]}
      />

      <PostList removePost={removePost} posts={sortedAndSearchedPosts} setPosts={setPosts}/>
      <div ref={lastElement} style={{height: "20px"}}/>

      {isPostsLoading &&
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
          <Loader/>
        </div>}

      {/*<PagesList totalPages={totalPages} page={page} changePage={changePage}/>*/}
    </div>
  );
}


export default Posts;
