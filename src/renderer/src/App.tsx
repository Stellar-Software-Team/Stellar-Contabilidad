import Versions from './components/Versions'
import electronLogo from './assets/electron.svg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
     <div className='bg-black w-screen h-screen'>
      <span className='text-white'>App</span>
     </div>
    </>
  )
}

export default App
