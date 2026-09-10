import {Route,Routes} from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Products from './Products.jsx'
import Footer from './Footer.jsx'
import Home from './Home.jsx'

function App() {

  const [query, setquery] = useState('')

  return (
    <>
      <Header setquery={setquery} />
      {/* <Home/>
      <About/>
      <Products query={query} />
      <Pricing/> */}
      <Routes>
      <Route path='/' element='<Home/>' />
      <Route path='/about' element='<About/>' />
      <Route path='/products' element='<Products query={query}/>' />
      <Route path='/pricing' element='<Pricing/>' />
      </Routes>
      
      <Footer/>
    </>
  )
}

export default App