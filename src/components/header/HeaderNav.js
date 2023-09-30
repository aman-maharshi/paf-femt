import React from 'react'
import { AiOutlineSearch, AiFillCaretDown, AiOutlineMenu } from "react-icons/ai"
import { BsTelephone } from "react-icons/bs"

function HeaderNav() {
  return (
    <nav className='flex items-center justify-between lg:px-8 px-4 py-2 bg-[#D24115] text-white lg:text-base text-[14px]'>
      <div className='flex items-center'>
        <a href="#" className='px-2 py-1 flex gap-4 items-center'>
          <div className='h-7 w-7 rounded-full bg-gray-400'></div>
          Home
        </a>
        <a href="#" className='px-2 py-1 flex items-end gap-2'>
          Live Sessions
          <AiFillCaretDown className='text-white text-[14px] mb-1' />
        </a>
        <a href="#" className='px-2 py-1'>Video Series</a>
        <a href="#" className='px-2 py-1'>AP Books</a>
        <a href="#" className='px-2 py-1'>AP Articles</a>
        <a href="#" className='px-2 py-1 flex items-end gap-2'>
          Invite
          <AiFillCaretDown className='text-white text-[14px] mb-1' />
        </a>
        <a href="#" className='px-2 py-1'>In Media</a>
        <a href="#" className='px-2 py-1'>Donate</a>
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
        <a href="#" className='px-2 py-1 flex items-center gap-2'>
          <AiOutlineMenu className="text-white text-[22px]" />
          Menu
        </a>
      </div>
    </nav>
  )
}

export default HeaderNav