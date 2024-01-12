import React from 'react'
import PostItem from './PostItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

export default function PostList({posts, title, remove}) {
  if(!posts.length) {
    return (
      <h2 style={{textAlign: "center"}}>
        Посты не найдены
      </h2>
    )
  }

  return (
    <div>
      <h1 className="title">{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) =>
        <CSSTransition
          key={`post${post.id}`}
          timeout={500}
          classNames="post"
        >
          <PostItem remove={remove} post={post} />
        </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  )
}
