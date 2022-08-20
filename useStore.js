import create from 'zustand'


const useStore = create((set, get) => {
  return {
    isOn: false,
    turnOn: () => set(() => ({isOn: true})),
    turnOff: () => set(() => ({isOn: false})),
  }
})


export default useStore
