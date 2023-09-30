import React from 'react'

function VideoSeriesTwo({ data }) {
  return (
    <div className='lg:px-8 px-4 py-4 mt-4'>
      <h2 className='text-[20px] font-medium pb-4 border-b border-gray-300'>Other Helpful Video Series</h2>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>

        {data.map(item => {
          const {id, title, subtitle, thumbnail} = item
          const imagePath = `${thumbnail.domain}/${thumbnail.basePath}/${thumbnail.qualities[0]}/${thumbnail.key}`
    
          return (
            <div key={id} className='grid grid-cols-3 gap-4 md:px-4 px-0 py-4 cursor-pointer md:hover:bg-slate-100 border-b border-gray-200 rounded-md'>
              <div className='col-span-1 h-[100px] bg-gray-200 rounded-md'>
                <img src={imagePath} className='w-full object-cover rounded-md' alt="thumbnail" />
              </div>
              <div className='col-span-2'>
                <h3 className='text-[18px] mb-1'>{title}</h3>
                <div className='text-gray-500 mb-1'>{subtitle}</div>
                <div className='text-gray-500 text-[14px]'>4 Video Series</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VideoSeriesTwo