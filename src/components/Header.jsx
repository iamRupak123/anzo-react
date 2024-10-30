import React from 'react'
import 'remixicon/fonts/remixicon.css'
const Header = () => {
  return (
     <div className=' fixed w-full px-8 py-20 z-10 flex justify-end '>
        <button className=' px-11 py-2 bg-black text-white rounded-[50px] border-4 hover:text-yellow-300'>Hire Me</button>
        <i className="ri-more-2-fill text-4xl"></i>
     </div>
  )
}

export default Header