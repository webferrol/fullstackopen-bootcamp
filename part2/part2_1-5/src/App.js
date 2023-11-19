import React, { useState } from 'react'
import { courses } from './libs/course'
import Course from './components/Course'

const NOTES = []

const App = () => {
 
  const [notes, setNotes] = useState(NOTES)

  return (
    <main>
      {
        courses.map(course => <Course key={course.id} course={course} />)
      }
    </main>
  )
}

export default App