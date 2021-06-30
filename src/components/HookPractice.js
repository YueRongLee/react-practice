import React, { useState, useEffect } from "react"
import randomcolor from "randomcolor"

function HookPractice() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")

  // function handleCount(ev) {
  //   const { name } = ev.target
  //   console.log(name)
  //   name === "increment" && setCount((prevCount) => prevCount + 1)
  //   name === "decrement" && setCount((prevCount) => prevCount - 1)
  // }
  const handleCount = (ev) => {
    const { name } = ev.target
    console.log(name)
    name === "increment" && setCount((prevCount) => prevCount + 1)
    name === "decrement" && setCount((prevCount) => prevCount - 1)
  }

  useEffect(() => {
    setColor(randomcolor())
    // const interval = setInterval(() => {
    //   setCount((prevCount) => prevCount + 1)
    // }, 1000)

    // return () => {
    //   clearInterval(interval)
    // }
  }, [count])

  return (
    <div>
      <h1 style={{ color: color }}>Count: {count}</h1>
      <br />
      <button
        style={{ margin: "0 20px 0 0" }}
        onClick={handleCount}
        name="decrement"
      >
        -
      </button>
      <button onClick={(ev) => handleCount(ev)} name="increment">
        +
      </button>
    </div>
  )
}

export default HookPractice
