import create from 'zustand'


const useStore = create((set, get) => {
  return {
    on: false,
    setOn: () => set(() => ({on: true})),
  }
})


export default useStore
