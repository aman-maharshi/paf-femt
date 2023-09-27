import React from 'react'
import {IoIosArrowForward} from "react-icons/io"
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaLink} from "react-icons/fa"

function Hero() {
  return (
    <div className="px-8 py-4">
      <div className="flex items-center gap-2 text-slate-700 text-[14px]">Home <IoIosArrowForward className="text-slate-700" /> संतवाणी</div>
      
      <div className="mt-4">
        <h1 className="text-xl font-semibold">संतवाणी</h1>
        <div className="grid grid-cols-5 gap-4 mt-4">
          <div className="col-span-2">
            <div className="w-full h-72 bg-gray-200 rounded-lg"></div>
          </div>
          <div className="col-span-3">
            <h2 className="text-lg font-medium mb-1">संतों की सीख पर आधारित श्रृंखला</h2>
            <p className="text-slate-700 leading-6">जब-जब समाज में धर्म के प्रति अनादर बढ़ा है और आम-आदमी की चेतना को पाखंड ने घेरा है, तब-तब संतों ने अपने वचनों से हमारे मन को शीतलता प्रदान की है और सामाजिक चेतना को शुद्ध किया है। इस श्रृंखला में आचार्य जी ने संत कबीरदास, तुलसीदास, पलटूदास, दादू दयाल, सहजोबाई, मलूकदास, दरियादास, रविदास आदि संतों की वाणी पर चर्चा की है। जानिए उनके वचनों की जीवन में सार्थकता को आचार्य प्रशांत के साथ इस आसान वीडियो कोर्स में।</p>
          </div>
        </div>
      </div>

      <div className="mt-4">
        <p className="mb-4">Share this series:</p>
        
        <div className="flex items-center gap-8">
          <FaFacebookF className="text-[22px]" />
          <FaTwitter className="text-[22px]" />
          <FaWhatsapp className="text-[22px]" />
          <FaLinkedinIn className="text-[22px]" />
        </div>
      </div>
    </div>
  )
}

export default Hero