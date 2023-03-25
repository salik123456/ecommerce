import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import CartPage from './components/CartPage'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {


  return (
    <BrowserRouter>
    <div className="App">

  <Navbar/>
  <Routes>
    <Route exact path="/" element={<ProductCard/>}/>
    <Route path="/cart" element={<CartPage/>}/>
  </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
