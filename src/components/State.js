import React, { useState } from "react"

const State = () => {
  const [value, setValue] = useState(0)
  return (
    <div>
      <button type="button" onClick={() => setValue(value - 1)}>
        -
      </button>
      <span> {value} </span>
      <button type="button" onClick={() => setValue(value + 1)}>
        +
      </button>
    </div>
  )
}

export default State
