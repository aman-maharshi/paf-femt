import React from 'react'
import HeaderSearchMenu from './HeaderSearchMenu'
import HeaderNav from './HeaderNav'

function Header() {
  return (
    <>
      <HeaderNav />

      <div className='p-4 flex justify-center items-center bg-slate-800 text-white'>
        <div className='flex items-center gap-4'>
          <div className='bg-red-500 h-4 w-4 border rounded-full'></div>
          Get access to all 350+ video series at once! 
        </div>
        <button className='px-3 pb-[2px] border border-white rounded-md ml-4 text-base'>Click Here</button>
      </div>

      <HeaderSearchMenu />
    </>
  )
}

export default Header