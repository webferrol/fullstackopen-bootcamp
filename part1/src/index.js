import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import Display from './components/Display'
import Button from './components/Button'



// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }
  
//     return (
//       <div>
//         <Header course={course.name} />
//         <Content parts={course.parts} />
//         <Total parts={course.parts} />
//       </div>
    
//   )
// }


function App () {
  const [counter, setCounter] = useState(0)

  const increaseByOne  = () => {
    setCounter(counter + 1)
  }

  const decreaseByOne = () => {
    setCounter(counter -1)
  }

  const setToZero   = () => {
    setCounter(0)
  }
  
  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="Plus"/>
      <Button handleClick={setToZero} text="Zero" />
      <Button
        handleClick={decreaseByOne}
        text='minus'
      />    
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

