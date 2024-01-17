import './styles/Global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext  } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import AddPet from './pages/AddPet'
import PetLogs from './pages/PetLogs'
import AddPetLog from './pages/AddPetLog'

export const AppContext = createContext()

function App() {
  const [petList, setPetList] = useState([])
  return (
    <>
    <AppContext.Provider value={{petList, setPetList}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home petList={petList} setPetList={setPetList} />} />
            <Route path="/AddPet" element={<AddPet  />} />
            <Route path="/petlogs/:id" element={<PetLogs  />} />
            <Route path='/addpetlog/:id' element={<AddPetLog />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App
