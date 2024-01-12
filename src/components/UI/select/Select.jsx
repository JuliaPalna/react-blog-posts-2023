import React from 'react'
import classes from './Select.module.css'

export default function Select({options, onChange, defaultValue,value}) {
  return (
    <select
      value={value}
      className={classes.select}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled value="">{defaultValue}</option>

      {options.map(option => <option
        key={option.value}
        value={option.value}
        >
          {option.name}
        </option>
      )}
    </select>
  )
}
