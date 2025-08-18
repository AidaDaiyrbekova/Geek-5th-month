import React, { useState, useCallback } from "react"
import {ChildButton} from "./ChildButton"

export const Counter = () => {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    console.log("ChildButton нажат!")
  }, [])

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Увеличить</button>

      <ChildButton onClick={handleClick} label="Кнопка ChildButton" />
    </div>
  )
}

