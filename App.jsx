import React from 'react'
import useStore from './useStore'


export default function App() {
  const on = useStore((state) => state.on)
  const setOn = useStore((state) => state.setOn)
  return (
    <>
      <h1>Hello World! is on: {on}</h1>
      <button onClick={setOn}>turn on</button>
    </>
  )
}
