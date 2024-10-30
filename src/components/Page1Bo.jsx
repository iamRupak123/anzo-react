import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
const Page1Bo = () => {
  useGSAP(function(){
    gsap.to('#movingdiv img',{
      rotate:360,
      duration:3,
      repeat:-1,
      ease:'linear'
    })
  })
  return (
    <div className='absolute left-0 px-24 flex w-full justify-between items-end mb-16 bottom-0 '>
        <div>
            <h2 className='text-white font-[anzo2] text-[1.2vw] '>BRAND DESIGN | WEBSITE DESIGN</h2>
           <h3 className=' text-gray-400 text-[1.1vw]'>BESPOKE FREELANCE</h3> 
        </div>
        <div id='movingdiv' className=' absolute right-14'>
            <img className=' mb-6 h-20' src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png" alt="" />
            <img className=' h-20' src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png" alt="" />
        </div>
    </div>
  )
}

export default Page1Bo