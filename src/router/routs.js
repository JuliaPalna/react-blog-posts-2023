import About from '../pages/About'
import Posts from '../pages/Posts'
import PostPage from '../pages/PostPage'
import Login from '../pages/Login'
// import Error from '../pages/Error'
import { Navigate } from "react-router-dom";


export const privateRoutes = [
  {path: '/about', component: <About/>, exact: true},
  {path: '/posts', component: <Posts/>, exact: true},
  {path: '/posts/:id', component: <PostPage/>, exact: true},
  {path: '*', component: <Navigate to="posts" />, exact: true},
]

export const publicRoutes = [
  {path: '/login', component: <Login/>, exact: true},
  {path: '*', component: <Navigate to="login" />, exact: true},
]
