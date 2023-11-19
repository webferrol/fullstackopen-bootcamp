import React from 'react'
import Header from './Header'
import Content from './Content'

function Course ({ course }) {
  const { id, name, parts} = course  

  return (
    <div>
      <Header title={name} />
      <Content  parts={parts}/>
    </div>
  )
}

export default Course