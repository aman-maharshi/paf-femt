import React from 'react'
import { FiMail } from "react-icons/fi"
import { FaWhatsapp, FaFacebookF } from "react-icons/fa"
import { BsFillTelephoneFill, BsWikipedia } from "react-icons/bs"
import { AiFillYoutube, AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai"

function Footer() {
  return (
    <div className='lg:px-8 px-4 lg:py-10 py-4 bg-[#0F172A] text-white'>
      <div className='grid xl:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-4'>
        <div>
          <h3 className='mb-4'>LIVE EVENTS</h3>
          <ul>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Bhagavad Gita</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Sant Sarita</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Ashtavakra Samhita</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Bodh Pratyusha</a></li>
          </ul>
        </div>
        <div>
          <h3 className='mb-4'>WISDOM CONTENT</h3>
          <ul>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Video Series</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>AP Books</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>AP Articles</a></li>
            <li className='mb-2'><a href="`#">AP Circle</a></li>
          </ul>
        </div>
        <div>
          <h3 className='mb-4'>MORE</h3>
          <ul>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>About Acharya Prashant</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Invite Him</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Interview Him</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Ghar Ghar Upanishad</a></li>
            <li className='mb-2'><a href="#" className='hover:text-[#D24115]'>Media and Public Interaction</a></li>
          </ul> 
        </div>
        <div>
          <h3 className='mb-4'>SOCIAL MEDIA</h3>
          <div className='mb-2'>For English</div>
          <div className='flex items-center gap-2'>
            <a href="#"><AiFillYoutube className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><AiOutlineTwitter className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><FaFacebookF className='text-white text-[16px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><AiOutlineInstagram className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><BsWikipedia className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
          </div>
          <div className='mt-4 mb-2'>For Hindi</div>
          <div className='flex items-center gap-2'>
            <a href="#"><AiFillYoutube className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><AiOutlineTwitter className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><FaFacebookF className='text-white text-[16px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><AiOutlineInstagram className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
            <a href="#"><BsWikipedia className='text-white text-[20px] hover:text-[#D24115] cursor-pointer' /></a>
          </div>
        </div>
        <div>
          <h3 className='mb-4'>DOWNLOAD APP</h3>
          <div className='flex items-center gap-2'>
            <div className='h-6 w-6 rounded-full bg-gray-400'></div>
            Acharya Prashant
          </div>
          <a href="#" className='w-[115px] my-4 block border border-white rounded-md'>
            <img src="/images/ic_googleplay.png" className='w-full object-cover' alt="googleplay" />
          </a>
          <a href="#" className='w-[115px] my-4 block border border-white rounded-md'>
            <img src="/images/ic_appstore.png" className='w-full object-cover' alt="appstore" />
          </a>
        </div>
        <div>
          <h3 className='mb-4'>CONTACT US</h3>
          <ul>
            <li className='mb-2'>
              <a href="#" className='hover:text-[#D24115] flex items-center gap-2'>
                <FiMail className='text-white text-[18px] mt-1' /> support@advait.org.in
              </a>
            </li>
            <li className='mb-2'>
              <a href="#" className='hover:text-[#D24115] flex items-center gap-2'>
                <FaWhatsapp className='text-white text-[18px] mt-1' /> +91 9650585100
              </a>
            </li>
            <li className='mb-2'>
              <a href="#" className='hover:text-[#D24115] flex items-center gap-2'>
                <BsFillTelephoneFill className='text-white text-[18px] mt-1' /> +91 9650585100
              </a>
            </li>
            <button className='text-white border border-white rounded-md px-2 pb-1 mt-2'>Fill Form to Connect</button>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer