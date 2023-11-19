import { useState } from "react"
import Button from "./components/Button"
import Header from "./components/Header"



export default function AnecdotesApp (props) {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(props.anecdotes.length).fill(0))

  const getRamdom = () => {
    return () => {
      const size = props.anecdotes.length
      if (size) {
        const index = Math.trunc(Math.random() * size)
        setSelected(index)
      }
    }
  }

  const addVote = () => {
    const votesClone = structuredClone(votes)
    votesClone[selected]++
    setVotes(votesClone)
  }

  const getMax = () => {   
    const max = Math.max(...votes)
    return votes.findIndex(vote => vote===max)
  }

  return (
    <main>
      <section>
        <Header text="Anecdote of the day"/>
        <p>{props.anecdotes[selected]}</p>
        <div>
          has {votes[selected]} votes
        </div>
        <div role="group" aria-label="Buttons">
          <Button text="vote" handleClick={() => addVote()} />
          <Button handleClick={getRamdom()} text="next anecdote" />
        </div>
      </section>
      <section>
        <Header text="Anecdote with most votes"/>
        <p>{props.anecdotes[getMax()]}</p>
      </section>
    </main>
  )
}