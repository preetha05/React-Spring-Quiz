import React, { useState } from 'react'
import adminico from '../../assets/img/ico3.webp'
import { Key, Pencil } from 'lucide-react'
const AdminSettings = () => {
  const [editmodel, setEditmodel] = useState(false)
  const [editkeymodel, setEditkeymodel] = useState(false)
  return (
    <>
      <div className='h-[90vh] flex justify-center items-center shadow-sm shadow-slate-100 w-[84vw]'>
        <div className='h-[40vh] w-[50vw] flex flex-row shadow-md shadow-orange-500/20'>
          <div className='w-1/2 h-full flex flex-col'>
            <div className='h-1/6 w-full flex justify-end items-center px-3 gap-3'>
              <button className='p-2 border-2 border-orange-500/50 hover:border-orange-700 hover:bg-orange-200/40 rounded-full' onClick={() => { setEditmodel(true) }}>
                <Pencil className='text-orange-500' />
              </button>
              <button className='p-2 border-2 border-orange-500/50 hover:border-orange-700 hover:bg-orange-200/40 rounded-full' onClick={() => { setEditkeymodel(true) }}>
                <Key className='text-orange-500' />
              </button>
            </div>
            <div className='h-3/6 w-full flex justify-center items-center'>
              <img src={adminico} alt='user' className='h-28 w-28 border-4 border-orange-500/10 rounded-full shadow-md shadow-orange-500/40' />
            </div>
            <div className='h-2/6 w-full flex justify-center items-center'>
              <p className='text-3xl font-bold text-orange-500'> Admin </p>
            </div>
          </div>
          <div className='w-1/2 h-full flex justify-center items-center flex-col'>
            <div className='h-1/2 w-full flex flex-row border-2 border-orange-100/50'>
              <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
                Email
              </div>
              <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                admin@maxquiz.io
              </div>
            </div>
            <div className='h-1/2 w-full flex flex-row border-2 border-orange-100/50'>
              <div className='w-1/3 h-full flex items-center justify-start text-orange-500 font-bold bg-orange-100/10 px-4'>
                Phone
              </div>
              <div className='w-2/3 h-full flex items-center justify-start font-semibold px-4'>
                9789683210
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        editmodel && (
          <>
            <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
              <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm'>
                <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
                  <input type="text" name="" id="" placeholder='Name' value='Mohanraj M' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                  <input type="email" name="" id="" placeholder='Email' value='max.neo.dev@gmail.com' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                  <input type="number" name="" id="" placeholder='Phone' value='9876543210' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                </div>
                <div className='h-1/6 w-full flex flex-row justify-center items-center'>
                  <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setEditmodel(false) }}> Cancel </button>
                  <button className='w-1/2 h-full bg-blue-500 font-bold text-white'>Update Profile</button>
                </div>
              </div>
            </div>
          </>
        )
      }

      {
        editkeymodel && (
          <>
            <div className='h-screen w-screen flex absolute z-50 bg-gray-500/60 justify-center items-center top-0 left-0'>
              <div className='h-[45vh] w-[30vw] flex flex-col shadow-md shadow-orange-500/20 bg-white rounded-sm'>
                <div className='h-5/6 w-full flex flex-col justify-center items-center p-2 gap-4'>
                  <input type="text" name="" id="" placeholder='Old Password' value='' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                  <input type="text" name="" id="" placeholder='New Password' value='' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                  <input type="text" name="" id="" placeholder='Confirm Password' value='' className='bg-orange-100/30 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                </div>
                <div className='h-1/6 w-full flex flex-row justify-center items-center'>
                  <button className='w-1/2 h-full bg-red-500 font-bold text-white' onClick={() => { setEditkeymodel(false) }}> Cancel </button>
                  <button className='w-1/2 h-full bg-blue-500 font-bold text-white'>Update Password</button>
                </div>
              </div>
            </div>
          </>
        )
      }
    </>
  )
}

export default AdminSettings