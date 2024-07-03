import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import BannerStats from './Components/BannerStats/BannerStats'

function App() {


  return (
   
      <div className='max-w-[1160px] mx-auto'>
       {/**===== header start from here ====== */}

       <Header></Header>

       {/**====== banner section start form here ======= */}

       <Banner></Banner>

       {/**=====  banner stats start from here ======= */}

       <BannerStats></BannerStats>
      </div>
  
  )
}

export default App
