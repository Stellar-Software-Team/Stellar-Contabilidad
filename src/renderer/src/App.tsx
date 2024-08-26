import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="bg-gray-100 w-screen h-screen flex items-center p-2">
        <BrowserRouter>
          <Sidebar />
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          {/* <Route path='/Isr' element={<Isr/>}/> */}
          {/* <Route path='/Settings' element={<Settings/>}/> */}
        </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
