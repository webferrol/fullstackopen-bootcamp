/* eslint-disable react/prop-types */
export default function Filters ({
  onSearch
}) {
  const handleChange = ({ currentTarget }) => {
    onSearch(currentTarget.value)
  }

  return (
    <search role="search">
    <label>
      Filter show width
      <input
        onChange={handleChange}
        type="search" />
    </label>
  </search>
  )
}
