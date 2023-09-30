import React, {useState} from 'react'

function TagMenu({ tags }) {
  
  const [rightMenu, setRightMenu] = useState([])

  const handleTagClick = (id) => {
    const list = tags[1].filter(item => item.parent === id)
    setRightMenu(list)
  }

  return (
    <div className='fixed z-10 inset-0 bg-slate-600 h-[100vh] w-[100vw] bg-opacity-70'>
      <div className='absolute z-10 left-[9vw] top-[21vh] border rounded-lg flex h-[500px] bg-white text-slate-600 text-[18px]'>
        <div className='flex flex-col items-start p-4 gap-4'>
          {tags[0].map(item => {
            const { name, tagId, hasChildren, level, parent } = item

            return <div key={tagId} onMouseEnter={() => handleTagClick(tagId)} className='hover:text-[#D24115]'>{name?.english}</div>
          })}
        </div>
        {rightMenu.length > 0 ? (
          <div className='p-4 border-l border-gray-200 overflow-auto flex flex-col items-start gap-4'>
            {rightMenu.map(item => {
              const { tagId, name } = item
              return <div key={tagId} onClick={handleTagClick} className='hover:text-[#D24115]'>{name?.english}</div>
            })}
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default TagMenu