import React, { createContext, useState } from 'react'
export const datacontext = createContext(null)
import { nanoid } from "nanoid";



const DataContext = ({children}) => {
    const [primaryColor, setprimaryColor] = useState('#15adf5')
    const [primaryColorHover, setprimaryColorHover] = useState('#028acb')
    const [isAdmin, setisAdmin] = useState(JSON.parse(localStorage.getItem('isAdmin')) || false)
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem('products')) || []);
    
  return (
    <datacontext.Provider value={{primaryColor, primaryColorHover,products,setproducts,isAdmin,setisAdmin}}>
      {children}
    </datacontext.Provider>
  )
}

export default DataContext