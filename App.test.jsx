import React from 'react'
import App from './App'
import {act, render, renderHook} from '@testing-library/react'
import useStore from './useStore'


describe('App', () => {
  it('turns on and off', () => {
    const {getByText} = render(<App/>)
    expect(getByText('Hello World!')).toBeTruthy()

    const {result} = renderHook(() => useStore((state) => state))

    act(() => result.current.turnOn())
    expect(getByText('is on: true')).toBeTruthy()

    act(() => result.current.turnOff())
    expect(getByText('is on: false')).toBeTruthy()
  })
})
