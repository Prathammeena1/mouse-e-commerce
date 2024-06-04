import React, { createContext, useState } from 'react'
export const datacontext = createContext(null)
import { nanoid } from "nanoid";



const DataContext = ({children}) => {
    const [primaryColor, setprimaryColor] = useState('#15adf5')
    const [primaryColorHover, setprimaryColorHover] = useState('#028acb')
    const [isAdmin, setisAdmin] = useState(JSON.parse(localStorage.getItem('isAdmin')))
    console.log(isAdmin)
    const [products, setproducts] = useState([
      {
        productId: nanoid(),
        imageUrl: "/images/mouse1.png",
        productName: "Gaming Mouse",
        productPrice: "$99.99",
        productDescription: "This the best gaming mouse as it is very smooth.",
      },
      
    ]);
    
  return (
    <datacontext.Provider value={{primaryColor, primaryColorHover,products,setproducts,isAdmin,setisAdmin}}>
      {children}
    </datacontext.Provider>
  )
}

export default DataContext