import React, { useEffect, useState, useRef } from "react"
import "./App.css"
import useWordGame from "./useWordGame"

function App() {
  const {
    handleChange,
    isTimeRunning,
    startGame,
    words,
    textRef,
    text,
    timeRemaining,
  } = useWordGame()

  return (
    <div className="App">
      <h1>Speed Typing Game</h1>
      <textarea
        cols="40"
        rows="10"
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
        ref={textRef}
      ></textarea>
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={() => startGame()}>
        Start
      </button>
      <h2>Words count: {words}</h2>
    </div>
  )
}

export default App
