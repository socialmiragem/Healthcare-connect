import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./assets/css/style.css"
import "./assets/css/responsive.css"
import Home from './pages/Home'
import Navbar from './component/Navbar'
import Footer from './component/Footer';
function App() {

  return (
    <>
      <Navbar/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
