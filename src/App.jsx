import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'

function App() {


  return (
   
      <div className='max-w-[1160px] mx-auto'>
       {/**===== header start from here ====== */}

       <Header></Header>
      </div>
  
  )
}

export default App