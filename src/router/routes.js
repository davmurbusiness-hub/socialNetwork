import About from "../pages/About.jsx";
import Posts from "../pages/Posts.jsx";
import PostIdPages from "../pages/PostIdPages.jsx";
import Login from "../pages/Login.jsx";
import Hello from "../pages/Hello.jsx";

export const privateRoutes = [
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/hello', component: Hello},
  {path: '/posts/:id', component: PostIdPages}
]

export const publicRoutes = [
  {path: '/login', component: Login},
]