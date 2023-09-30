import React, {useState, useEffect} from 'react'
import FaqCard from './FaqCard'

function Faq() {
  const [faqs, setFaqs] = useState([])
  const [loadingFaqs, setLoadingFaqs] = useState(false)

  useEffect(() => {
    getFaqs()
  }, [])

  const getFaqs = async () => {
    setLoadingFaqs(true)
    try {
      const response = await fetch('https://api.acharyaprashant.org/v2/legacy/courses/faqs?language=hindi')
      if (response.ok) {
        const data = await response.json()
        // console.log(data)
        setFaqs(data)
      } 
    } catch (error) {
      console.log(error)
    }
    setLoadingFaqs(false)
  }

  return (
    <div className='lg:px-20 px-4 py-4 mt-4'>
      <div className='grid lg:grid-cols-3 grid-cols-1'>
        <div className='col-span-1 lg:pr-20 lg:mb-0 mb-6'>
          <h3 className='text-[18px] font-medium mb-1'>FAQs</h3>
          <div>
            Can’t find the answer you’re looking for? <br /> Reach out to our <a href="#" className='text-[#D24115]'>support</a> team
          </div>
        </div>

        <div className='col-span-2 text-slate-600'>
          {faqs.map((item, index) => <FaqCard key={index} item={item} />)}
        </div>
      </div>
    </div>
  )
}

export default Faq