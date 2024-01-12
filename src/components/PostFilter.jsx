import React from 'react'
import Select from './UI/select/Select'
import Input from "./UI/input/Input";

export default function PostFilter({filter, setFilter}) {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        type="text"
        placeholder="Поиск"
      />

      <Select
        value={filter.sort}
        defaultValue="Сортировка"
        options={[
          {value: 'title', name: "по названию"},
          {value: 'body', name: "по описанию"}
        ]}
        onChange={e => setFilter({...filter, sort: e})}
      />
    </div>
  )
}
