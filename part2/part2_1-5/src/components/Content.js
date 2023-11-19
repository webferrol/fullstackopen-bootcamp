import React from 'react'
import Part from './Part'

const getTotalExercises = (ac, current) => ac + current.exercises

export default function Content ({ parts }) {
  return (
    <div>
      {
        parts.map(item => (
          <Part key={item.id}  {...item} />
        ))
      }
      <strong>Total of {parts.reduce(getTotalExercises, 0)} exercises</strong>
    </div>
  )
}
