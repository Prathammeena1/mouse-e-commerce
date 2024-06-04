import React, { useContext } from 'react'
import { datacontext } from '../datacontext/DataContext'

const HomeRight = () => {
  const {primaryColor} = useContext(datacontext)
  return (
    <div className="rightHome relative h-[40vw] ">
        <div className="ml-[18vw] mt-[15vh]">
          <span className={`text-[${primaryColor}] rotate-[90deg] inline-block text-[12vw] font-bold pointer-events-none`}>
            G502
          </span>
        </div>
        <div className="landingImage h-full absolute top-0 left-[18%]">
          <img className="h-full w-full object-cover" src="/images/landingMouse.png" alt="" />
        </div>
      </div>
  )
}

export default HomeRight