import React, { useRef, useState } from 'react';
import Tilttext from '../components/Tilttext'
import Page1Bo from '../components/Page1Bo';
import "../index.css";  
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Page1 = () => {
   const tiltref = useRef(null);
const [xVal, setxVal] = useState(0)
const [yVal, setyVal] = useState(0)
   const mousedire = (e) => {
      setxVal((e.clientX-tiltref.current.getBoundingClientRect().x - tiltref.current.getBoundingClientRect().width/2)/40);
      setyVal(-(e.clientY-tiltref.current.getBoundingClientRect().y - tiltref.current.getBoundingClientRect().height/2)/10);

       
   };
useGSAP(function(){
   gsap.to(tiltref.current,{
      transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
      duration:3,
      ease: "elastic.out(1,0.3)"
   
   })
},[xVal,yVal] )
   return (
      <div onMouseMove={(e) => mousedire(e)} className="relative h-screen bg-white p-5">
         <div
            id="page1_in"
            className="relative h-full w-full bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_2978,h_1398,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-center bg-cover rounded-[30px]"
         >
            <img
               className="px-16 py-12 h-44"
               src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png"
            />

            
            <Tilttext abc={tiltref} />
            <Page1Bo />
         </div>
      </div>
   );
};

export default Page1;
