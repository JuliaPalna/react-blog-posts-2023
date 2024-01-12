import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import {useFetching} from '../hooks/useFetching'
import Loader from '../components/UI/loader/Loader'

export default function PostPage() {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])

  const [fetchPostId, isLoading, error] = useFetching(async () => {
    const response = await PostService.getById(params.id)
    setPost(response.data)
  })
  const [fetchPostComments, isLoadingComments, errorComments] = useFetching(async () => {
    const response = await PostService.getComments(params.id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostId()
    fetchPostComments()
  }, [])

  return (
    <div>
      <h1>Страница поста {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}. {post.title}</div>
      }
      <h2>Комментарии</h2>
      {isLoadingComments
        ? <Loader />
        : <div>
            {comments.map(item =>
              <div style={{marginTop: "10px"}} key={item.id}>
                <h3>{item.email}</h3>
                <p>{item.body}</p>
              </div>
            )}
          </div>
      }
    </div>
  )
}
