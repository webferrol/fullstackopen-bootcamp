import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"
import Statics from "./components/Statitiscs"

export default function UnicafeApp () {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)



  const setAdd = (setValue) => {
    setValue(val => val + 1)
  }

  const add = (setState,value = 1) => {
    return (e) => {
      // console.log(e)
      setState(val => val + value)
    }
  }


  return (
    <div>
      <Header text="give feedback"/>
      <div role="group" aria-label="Buttons">
        <Button handleClick={() => setAdd(setGood)} text="good" />
        <Button handleClick={add(setNeutral)} text="neutral" />
        <Button handleClick={() => setAdd(setBad)} text="bad" />
      </div>
      <Statics 
        good={good}
        neutral={neutral}
        bad={bad}
      />      
    </div>
  )
}
