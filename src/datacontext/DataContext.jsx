import React, { createContext, useState } from 'react'
export const datacontext = createContext(null)
import { nanoid } from "nanoid";



const DataContext = ({children}) => {
    const [isAdmin, setisAdmin] = useState(JSON.parse(localStorage.getItem('isAdmin')) || false)
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
    
  return (
    <datacontext.Provider value={{products,setproducts,isAdmin,setisAdmin,cart,setcart}}>
      {children}
    </datacontext.Provider>
  )
}

export default DataContext