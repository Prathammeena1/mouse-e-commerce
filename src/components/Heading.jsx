import React from 'react'

const Heading = ({mainHeading,subHeading}) => {
  return (
    <div className='heading mx-auto w-fit text-center'>
        <h1 className='text-[#0984be38] text-4xl font-extrabold tracking-normal'>{mainHeading}</h1>
        <h4 className='mt-[-2.4vh] font-medium'>{subHeading}</h4>
      </div>
  )
}

export default Heading