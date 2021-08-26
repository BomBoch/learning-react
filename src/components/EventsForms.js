import React, { useState } from "react"

const EventsForms = () => {
  const [lastEvent, setLastEvent] = useState("N/A")
  const [value, setValue] = useState("default value")

  const onChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <div>
      <input
        type="text"
        aria-label="try copy/pasting"
        defaultValue="try copy/pasting"
        onFocus={() => setLastEvent("onFocus")}
        onBlur={() => setLastEvent("onBlur")}
        onCopy={() => setLastEvent("onCopy")}
        onCut={() => setLastEvent("onCut")}
        onPaste={() => setLastEvent("onPaste")}
        onKeyDown={() => setLastEvent("onKeyDown")}
        onKeyUp={() => setLastEvent("onKeyUp")}
      />
      <pre>last event: {lastEvent}</pre>
      <hr />
      <br />
      <h4>Events & Forms 2 </h4>
      <div>
        <label>
          simple input
          <input type="text" value={value} onChange={onChange} />
        </label>
        <pre>{value}</pre>
        <button type="button" onClick={() => setValue("new value🌓")}>
          change to `new value`
        </button>
      </div>
    </div>
  )
}

export default EventsForms
