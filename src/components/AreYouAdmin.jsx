import React, { useContext, useState } from 'react'
import { datacontext } from '../datacontext/DataContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Button from './Button2'


const AreYouAdmin = () => {
    const navigate = useNavigate()
    const {isAdmin,setisAdmin} = useContext(datacontext)
    const [pin,setpin] = useState("")
    const submitHandler = (e)=>{
        e.preventDefault()
        if(pin == 1){
            setisAdmin(true)
            localStorage.setItem('isAdmin',true)
            navigate('/myProducts')
        }else{
            toast.warn('Please enter the correct PIN!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                });
        }
    }
  return (
    <form onSubmit={submitHandler} className='flex items-center justify-center h-[90vh]'>
        <div>
        <span className="capitalize text-2xl">Enter the PIN</span> <br />
            <div className='flex w-[50vw]'>
            <input onChange={(e)=> setpin(Number(e.target.value))} value={pin}
            name="adminPin"
            min='0'
              type="number"
              className="adminPin my-1 mr-2 bg-transparent w-[600%] border border-zinc-700 rounded-md px-2 py-1 text-xl"
            />
            <Button text='Submit'/>
            </div>
        </div>
    </form>
  )
}

export default AreYouAdmin