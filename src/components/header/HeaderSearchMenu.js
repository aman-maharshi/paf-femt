import React, { useState, useEffect } from 'react'
import { AiOutlineSearch, AiFillCaretDown } from "react-icons/ai"
import TagMenu from './TagMenu'

function HeaderSearchMenu() {
  const [showTagsMenu, setShowTagsMenu] = useState(false)
  const [tags, setTags] = useState([])
  const [loadingTags, setLoadingTags] = useState(false)

  useEffect(() => {
    getTags()
  }, [])

  const getTags = async () => {
    setLoadingTags(true)
    try {
      const response = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/tags')
      if (response.ok) {
        const data = await response.json()
        // console.log(data)
        setTags(data)
      } 
    } catch (error) {
      console.log(error)
    }
    setLoadingTags(false)
  }

  return (
    <div className='flex items-center justify-between md:px-8 px-4 py-2 shadow-md'>
      <div className='flex items-center'>
        <img className='h-6 object-contain block mr-4' src="/images/ic_videoseries.png" alt="video-series" />
        <button onClick={() => setShowTagsMenu(!showTagsMenu)} className='relative border p-2 rounded-s-md flex items-center gap-2 md:flex hidden'>
          All 
          <AiFillCaretDown className='text-slate-600 text-[14px]' />
          {showTagsMenu && <TagMenu tags={tags} />}
        </button>
        <div className='flex'>
          <input className='p-2 md:w-[450px] w-[160px] md:border outline-none' type="text" placeholder='Search for the video series' />
          <button className='p-2 md:border md:bg-[#FED7AA] rounded-e-md'>
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <button className='text-white bg-[#D24115] px-4 py-1 pt-0 rounded-md'>Login</button>
    </div>
  )
}

export default HeaderSearchMenu