import React from 'react'
import Button from './UI/button/Button'
import {useNavigate} from 'react-router-dom'

export default function PostItem({post, remove}) {
  const router = useNavigate()

  return (
    <div className="post">
      <div className="post__content">
        <strong>{post.id}. {post.title}</strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <Button onClick={() => router(`/posts/${post.id}`) }>Открыть</Button>
        <Button onClick={() => remove(post)}>Удалить</Button>
      </div>
    </div>
  )
}
