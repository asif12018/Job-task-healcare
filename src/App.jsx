import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import BannerStats from './Components/BannerStats/BannerStats'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import Testimonial from './Components/Testimonial/Testimonial'
import Faq from './Components/Faq/Faq'
import Promotion from './Components/Promotion/Promotion'

function App() {


  return (
   
      <div className='max-w-[1160px] mx-auto'>
       {/**===== header start from here ====== */}

       <Header></Header>

       {/**====== banner section start form here ======= */}

       <Banner></Banner>

       {/**=====  banner stats start from here ======= */}

       <BannerStats></BannerStats>

       {/**======== hero section start from here =========== */}
       <Hero></Hero>

       {/*========  services section start from here  =======*/}
       <Services></Services>

       {/*========    testimonial   ===========*/}
       <Testimonial></Testimonial>

       {/*==========      FAQ        =========*/}
       <Faq></Faq>
       {/**=========   Promotion Banner    ========== */}
       <Promotion></Promotion>
      </div>
  
  )
}

export default App
