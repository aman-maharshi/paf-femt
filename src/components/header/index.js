import React from 'react'
import HeaderSearchMenu from './HeaderSearchMenu'
import HeaderNav from './HeaderNav'

function Header() {
  return (
    <>
      <HeaderNav />

      <div className='p-4 flex md:justify-center justify-between items-center bg-slate-800 text-white'>
        <div className='flex items-center gap-4'>
          <div className='bg-red-500 h-4 w-4 border rounded-full'></div>
          <div className='sm:text-base text-[12px]'>Get access to all 350+ video series at once! </div>
        </div>
        <button className='md:px-3 px-2 pb-[2px] border border-white rounded-md ml-4 text-base'>Click Here</button>
      </div>

      <HeaderSearchMenu />
    </>
  )
}

export default Header