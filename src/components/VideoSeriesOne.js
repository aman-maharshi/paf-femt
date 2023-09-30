import React from 'react'

const formatTime = (decimalHours) => {
  const hours = Math.floor(decimalHours)
  const minutes = Math.round((decimalHours - hours) * 60)
  return `${hours} hour${hours !== 1 ? 's' : ''} ${minutes} minute${minutes !== 1 ? 's' : ''}`
}


function VideoSeriesOne({ data }) {
  return (
    <div className='lg:px-8 px-4 py-4 mt-4'>
      <h2 className='text-[20px] font-medium pb-4 border-b border-gray-300'>Video Series (8)</h2>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {data.map(item => {
          const {id, title, subtitle, thumbnail, language, amount, originalAmount, courseHours, series } = item

          return (
            <div key={id} className='flex flex-col items-start md:px-4 px-0 py-4  gap-1 cursor-pointer md:hover:bg-slate-100 border-b border-gray-200 rounded-md'>
              <div className='bg-slate-400 text-[14px] text-white py-1 px-2 rounded-md mb-2'>भाग {series?.order?.seq}</div>
              <h3 className='font-medium'>{title}</h3>
              <div className='text-gray-500'>{subtitle}</div>
              <div className='text-[14px] text-gray-500'>{formatTime(courseHours)}</div>
              <div className='text-[14px] text-gray-500'>Contribution: ₹{amount} <s>₹{originalAmount}</s></div>
              <div className='bg-blue-200 text-[14px] px-1 mt-2 text-gray-600 rounded-md'>{language}</div>
              <div className='flex gap-4 mt-2'>
                <button className='text-[#EA580C] text-[14px]'>ADD TO CART</button>
                <div className='text-gray-400 text-[14px]'>|</div>
                <button className='text-[#EA580C] text-[14px]'>ENROL</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VideoSeriesOne