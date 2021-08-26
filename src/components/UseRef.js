import React, { useRef, useState } from "react"

const UseRef = () => {
  const videoRef = useRef(true)
  const [destroyed, setDestroyed] = useState(false)
  const timeoutRef = useRef()

  const cancel = () => {
    window.clearTimeout(timeoutRef.current)
    timeoutRef.current = undefined
  }
  const start = () => {
    cancel()
    timeoutRef.current = window.setTimeout(() => {
      setDestroyed(true)
    }, 2000)
  }

  const playPause = async () => {
    const video = videoRef.current
    if (video.paused === true) video.play()
    else video.pause()
  }
  return (
    <div>
      <video
        ref={videoRef}
        autoPlay
        loop
        src="https://media.tenor.com/videos/632c96bbc411d8baa3f7f43692474808/webm"
        aria-label="video"
      ></video>
      <br />
      <button type="button" onClick={playPause}>
        ⏯
      </button>
      <h4>useRef 2</h4>
      {destroyed ? null : (
        <>
          <button type="button" onClick={start}>
            start self-destruct sequence
          </button>
          <button type="button" onClick={cancel}>
            cancel self-destruct sequence
          </button>
          <p>this message will destroy itself in 2 seconds</p>
        </>
      )}
    </div>
  )
}

export default UseRef
