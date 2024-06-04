import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import PageNotFound from '../components/PageNotFound'
import AddProducts from '../components/AddProducts'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/addProducts' element={<AddProducts/>} />



      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default MainRouter