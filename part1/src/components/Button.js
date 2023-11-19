const Button = ({ handleClick = () => {}, text = 'Botón' }) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
