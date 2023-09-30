import React, { useState } from 'react'
import { AiOutlineSearch, AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"
import { PiHandsPrayingDuotone } from "react-icons/pi"

function HeaderNav() {
  const isMobile = window.innerWidth <= 768
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  const handleMenuClick = () => {
    if (isMobile) {
      setShowMobileMenu(true) 
    }
  }


  return (
    <nav className='relative flex items-center justify-between lg:px-8 px-4 py-2 bg-[#D24115] text-white lg:text-base text-[14px]'>
      <div className='flex items-center'>
        <a href="#" className='px-2 py-1 flex gap-4 items-center'>
          <div className='h-7 w-7 rounded-full bg-gray-400'></div>
          <div className='md:block hidden'>
            Home
          </div>
        </a>
        <a href="#" className='px-2 py-1 flex items-end gap-2 md:flex hidden'>
          Live Sessions
          <AiFillCaretDown className='text-white text-[14px] mb-1' />
        </a>
        <a href="#" className='px-2 py-1 md:flex hidden'>Video Series</a>
        <a href="#" className='px-2 py-1 md:flex hidden'>AP Books</a>
        <a href="#" className='px-2 py-1 md:flex hidden'>AP Articles</a>
        <a href="#" className='px-2 py-1 flex items-end gap-2 md:flex hidden'>
          Invite
          <AiFillCaretDown className='text-white text-[14px] mb-1' />
        </a>
        <a href="#" className='px-2 py-1 md:flex hidden'>In Media</a>
        <a href="#" className='px-2 py-1 md:flex hidden'>Donate</a>
      </div>
      <div className='flex items-center gap-2'>
        <div className='flex items-end gap-1'>
          <button className='px-1 border border-white rounded-sm text-[14px]'>
            EN
          </button>
          <AiFillCaretDown className='text-white text-[14px] mb-1' />
        </div>
        <a href="#" className='px-2 py-1'>
          <BsTelephone className='text-white text-[20px]' />
        </a>
        <button onClick={handleMenuClick} className='px-2 py-1 flex items-center gap-2'>
          <AiOutlineMenu className="text-white text-[22px]" />
          Menu
        </button>
      </div>

      {isMobile && showMobileMenu && (
        <div className='fixed left-0 top-0 z-20 w-[100vw] min-h-[100vh] bg-[#D24115] text-white p-4'>
          <div className='flex items-center justify-between'>
            <button className='px-4 py-1 rounded-md border border-white'>Login</button>
            <button onClick={() => setShowMobileMenu(false)}><AiOutlineClose className='text-white text-[24px]' /></button>
          </div>
          <div className='text-[20px] font-bold flex flex-col items-start gap-4 mt-8'>
            <a href="#">Live Sessions</a>
            <a href="#">AP Books</a>
            <a href="#">AP Articles</a>
            <a href="#">Vedio Series</a>
            <a href="#">AP Circle</a>
            <a href="#">Invite for Talk</a>
            <a href="#">Invite for Interview</a>
            <a href="#">Contact Us</a>
            <button className='text-[#D24115] rounded-md flex items-center gap-3 py-2 px-4 font-bold bg-[#fed7aa] mt-2'>
              <PiHandsPrayingDuotone className='text-[#D24115]' />
              Donate
            </button>
          </div>
        </div>
      )}

      {isMobile && (
        <div className='fixed z-10 bottom-0 left-0 w-full py-2 px-4 bg-[#ffedd5] text-slate-600 flex items-center justify-between font-semibold text-[16px]'>
          Open in App
          <button className='py-2 px-4 text-[14px] text-white bg-[#D24115] rounded-full'>Download App</button>
        </div>
      )}
    </nav>
  )
}

export default HeaderNav