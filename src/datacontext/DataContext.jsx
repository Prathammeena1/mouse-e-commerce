import React, { createContext, useState } from 'react'
export const datacontext = createContext(null)


const DataContext = ({children}) => {
    const [primaryColor, setprimaryColor] = useState('#15adf5')
    const [primaryColorHover, setprimaryColorHover] = useState('#028acb')
    
  return (
    <datacontext.Provider value={[primaryColor, primaryColorHover]}>
      {children}
    </datacontext.Provider>
  )
}

export default DataContext