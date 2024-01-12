import React from 'react'
import classes from './Pagination.module.css'

export default function Pagination({page, setPage, pagesArray}) {

  return (
    <div className={classes.page__wrapper}>
        {pagesArray.map(item =>
          <span
            className={page === item ? `${classes.page} ${classes.page__current}` : `${classes.page}`}
            key={`p-${item}`}
            onClick={() => setPage(item)}
          >
            {item}
          </span>
        )}
      </div>
  )
}
