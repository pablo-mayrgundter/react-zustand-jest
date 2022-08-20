import React from 'react'
import useStore from './useStore'


export default function App() {
  const isOn = useStore((state) => state.isOn)
  const turnOn = useStore((state) => state.turnOn)
  return (
    <>
      <h1>Hello World!</h1>
      <p>is on: {isOn + ''}</p>
      <button onClick={turnOn}>turn on</button>
    </>
  )
}
