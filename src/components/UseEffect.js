import React, { useState, useEffect } from "react"

const LocaleClock = ({ locale = "tr-TR" }) => {
  const [timeString, setTimeString] = useState()
  useEffect(() => {
    const update = () => {
      setTimeString(new Date().toLocaleTimeString(locale))
    }
    update()

    const interval = window.setTimeout(update, 500)

    return () => {
      window.clearInterval(interval)
    }
  }, [locale])
  return (
    <div>
      <p>{timeString}</p>
    </div>
  )
}

const UseEffect = () => {
  const [locale, setLocale] = useState("en-GB")
  const toggleLocale = () => {
    setLocale(locale === "en-GB" ? "th-TH-u-nu-thai" : "en-GB")
  }

  return (
    <>
      <button type="button" onClick={toggleLocale}>
        Toggle Locale
      </button>
      <LocaleClock locale={locale} />
    </>
  )
}

export default UseEffect
