import React from 'react'
import { BsChevronDown } from "react-icons/bs"


function Faq() {
  return (
    <div className='lg:px-20 px-4 py-4 mt-4'>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
        <div className='col-span-1 lg:pr-20 lg:mb-0 mb-6'>
          <h3 className='text-[18px] font-medium mb-1'>FAQs</h3>
          <div>
            Can’t find the answer you’re looking for? <br /> Reach out to our <a href="#" className='text-[#D24115]'>support</a> team
          </div>
        </div>

        <div className='col-span-2 text-slate-600 font-bold'>
          <div className='relative pr-20 pb-4 border-b border-gray-300 cursor-pointer mb-4'>
            कोई भी वीडियो श्रृंखला आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?
            <BsChevronDown className='text-gray-500 text-[14px] absolute right-4 top-1' />
          </div>
          <div className='relative pr-20 pb-4 border-b border-gray-300 cursor-pointer mb-4'>
            कोई भी वीडियो श्रृंखला आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?
            <BsChevronDown className='text-gray-500 text-[14px] absolute right-4 top-1' />
          </div>
          <div className='relative pr-20 pb-4 border-b border-gray-300 cursor-pointer mb-4'>
            कोई भी वीडियो श्रृंखला आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?
            <BsChevronDown className='text-gray-500 text-[14px] absolute right-4 top-1' />
          </div>
          <div className='relative pr-20 pb-4 border-b border-gray-300 cursor-pointer mb-4'>
            कोई भी वीडियो श्रृंखला आचार्य प्रशांत के यूट्यूब वीडियो से कैसे अलग है?
            <BsChevronDown className='text-gray-500 text-[14px] absolute right-4 top-1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq