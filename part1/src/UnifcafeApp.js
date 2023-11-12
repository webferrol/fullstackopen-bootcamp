import { useState } from "react"
import Header from "./components/Header"
import Button from "./components/Button"

export default function UnicafeApp () {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotal = () => good + neutral + bad

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
      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {getTotal()}</div>
      <div>average {(good - bad) / getTotal()} </div>
      <div>positive { good * 100 / getTotal() } %</div>
    </div>
  )
}
