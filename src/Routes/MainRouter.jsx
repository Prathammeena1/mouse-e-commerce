import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Products from '../components/Products'
import PageNotFound from '../components/PageNotFound'

const MainRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Products/>} />



      <Route path='*' element={<PageNotFound/>} />
    </Routes>
  )
}

export default MainRouter