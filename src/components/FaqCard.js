import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from "react-icons/bs"

function FaqCard({ item }) {
  const { question, answer } = item
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className='mb-4 pb-4 border-b border-gray-300'>
      <div onClick={() => setShowAnswer(!showAnswer)} className='relative pr-20 cursor-pointer font-bold'>
        {question}
        {showAnswer ? <BsChevronUp className='text-gray-500 text-[14px] absolute right-4 top-1' />  : <BsChevronDown className='text-gray-500 text-[14px] absolute right-4 top-1' />}
      </div>
      {showAnswer && (
        <div className='mt-3' dangerouslySetInnerHTML={{__html: answer}}></div>
      )}
    </div>
  )
}

export default FaqCard