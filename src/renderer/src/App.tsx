
function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
     <div className='bg-black w-screen h-screen'>
      <span className='text-white'>Testing tailwind</span>
     </div>
    </>
  )
}

export default App
