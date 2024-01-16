import './styles/Global.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, createContext  } from 'react'
import Header from './pages/Header'
import Home from './pages/Home'
import AddPet from './pages/AddPet'

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
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
    </>
  )
}

export default App
