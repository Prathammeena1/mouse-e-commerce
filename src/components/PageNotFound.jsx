import React from 'react'
import { useLocation } from 'react-router-dom'

const PageNotFound = () => {
  const {pathname} = useLocation()
  return (
    <div className='flex flex-col justify-center items-center w-full mt-[17vw]'>
      <h1 className='text-5xl my-1'>Opps.. Page Not Found</h1>
      <h3>Please check the URL<span className='text-blue-400 cursor-pointer'> {pathname}</span> </h3>
    </div>
  )
}

export default PageNotFound