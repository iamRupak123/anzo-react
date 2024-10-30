import React from 'react'

const Tilttext = (props) => {
  return (
    <div id="tiltdiv" ref={props.abc} className="relative text-white py-20 ml-16">
    <h1 className="text-[4.7vw] font-[anzo2] font-bold uppercase leading-[4vw]">I am <span className="text-black">DARK MODE</span>™</h1>
    <h1 className="text-[8.6vw] font-[anzo2] font-bold leading-[7vw]">DESIGNER</h1>
    <h1 className="text-[4.5vw] font-[anzo2] font-bold leading-[4vw]">TO HIRE</h1>
 </div>
  )
}

export default Tilttext