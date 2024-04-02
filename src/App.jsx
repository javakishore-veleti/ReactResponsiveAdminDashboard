import { useState } from 'react'
import './App.css'
import SideBar from './components/common/SideBar'
import Home from './components/Home/Home'
import Header from './components/common/Header'

function App() {
  const [count, setCount] = useState(0)
  const [openSideBarToggle, setOpenSideBarToggle] = useState(false)

  const OpenSideBar = () => {
    setOpenSideBarToggle(!openSideBarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSideBar={OpenSideBar}></Header>
      <SideBar openSideBarToggle={openSideBarToggle} OpenSideBar={OpenSideBar}></SideBar>
      <Home/>

    </div>
  )
}

export default App
