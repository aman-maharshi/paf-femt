import React from 'react'

function VideoSeriesTwo({ data }) {
  return (
    <div className='lg:px-8 px-4 py-4 mt-4'>
      <h2 className='text-[20px] font-medium pb-4 border-b border-gray-300'>Other Helpful Video Series</h2>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-4'>

        {data.map(item => {
          const {id, title, subtitle, thumbnail} = item
          return (
            <div key={id} className='grid grid-cols-3 gap-4 p-4 cursor-pointer hover:bg-slate-100 border-b border-gray-200 rounded-md'>
              <div className='col-span-1 h-[100px] bg-gray-200 rounded-md'></div>
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