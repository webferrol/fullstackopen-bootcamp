export default function Hello ({ age, name }) {
  // const { age, name } = props
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - age
  }

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )

}