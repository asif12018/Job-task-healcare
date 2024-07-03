import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'

function App() {


  return (
   
      <div className='max-w-[1160px] mx-auto'>
       {/**===== header start from here ====== */}

       <Header></Header>

       {/**====== banner section start form here ======= */}

       <Banner></Banner>
      </div>
  
  )
}

export default App
