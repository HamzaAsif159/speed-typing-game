import React, { useEffect, useState, useRef } from "react"

export default function useWordGame() {
  const [text, setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(5)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [words, setWords] = useState(0)
  const textRef = useRef(null)

  function handleChange(event) {
    setText(event.target.value)
  }

  function calculateWords(text) {
    let words = text.trim().split(" ")
    let wordsArr = words.filter((words) => words !== "")
    return wordsArr.length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(5)
    setText("")
    textRef.current.disabled = false
    textRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWords(calculateWords(text))
  }

  useEffect(() => {
    setTimeout(() => {
      if (isTimeRunning && timeRemaining > 0) {
        setTimeRemaining((time) => time - 1)
      } else if (timeRemaining === 0) {
        endGame()
      }
    }, 2000)
  }, [isTimeRunning, timeRemaining])

  return {
    handleChange,
    isTimeRunning,
    timeRemaining,
    words,
    text,
    textRef,
    startGame,
  }
}
