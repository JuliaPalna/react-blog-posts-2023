
import React, {useEffect, useState} from "react"
// import  './styles/App.css'
import PostList from '../components/PostList'
import Form from '../components/Form'
import Divide from '../components/UI/divide/Divide'
import PostFilter from '../components/PostFilter'
import Modal from '../components/UI/modal/Modal'
import Button from "../components/UI/button/Button"
import Loader from '../components/UI/loader/Loader'
import Pagination from '../components/UI/pagination/Pagination'
import {usePosts} from '../hooks/usePosts'
import {useFetching} from '../hooks/useFetching'
import {usePages} from '../hooks/usePages'
import PostService from '../API/PostService'
import {getPageCount} from '../utils/pages'

function Posts() {
  function createNewPost(newPost) {
    setPosts([...posts, newPost])
    setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(el => el.id !== post.id))
  }

  async function fetchingPosts() {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const tottalCount = response.headers[`x-total-count`]
    setTotalPages(getPageCount(tottalCount, limit))
  }

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  const sortedAndSearchedPosts= usePosts(posts, filter.sort, filter.query)

  useEffect(() => {
    fetchPosts()
  }, [page])

  const [fetchPosts, isPostsLoarding, postError] = useFetching(fetchingPosts)

  const pagesArray = usePages(totalPages)

  return (
    <div className="App">
      <Divide />
      <Button onClick={() => setModal(true)}>Создать пост</Button>
      <Divide />

      <Modal visible={modal} setVisible={setModal}>
        <Form create={createNewPost} />
      </Modal>

      <PostFilter filter={filter} setFilter={setFilter} />
      <Divide />
      {postError &&
        <h1>Произошла ошибка: ${postError}</h1>}
      {isPostsLoarding
        ?
          <div style={{display: "flex", justifyContent: "center"}}>
            <Loader/>
          </div>
        :
          <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Список компонетов" />
      }

      <Pagination page={page} setPage={setPage} pagesArray={pagesArray} />

    </div>
  );
}

export default Posts;
