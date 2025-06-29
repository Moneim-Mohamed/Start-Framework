import React from 'react'

export default function ContactContent() {
  return (
    <>
    <div className=" w-full flex flex-col justify-between items-center space-y-10 lg:space-y-20">
   <div className='flex flex-col justify-between items-center mt-4'>
 <h2 className="text-[25px] md:text-[40px] lg:text-5xl uppercase font-bold text-[#2C3E50] mt-5">conatct section</h2>
  <div className="relative  before:w-[100px] before:h-1 before:bg-[#2C3E50] before:absolute before:-left-33 before:top-[65%] after:w-[100px] after:h-1 after:bg-[#2C3E50] after:absolute after:-right-33 after:top-[65%]">
    <i className="fa-solid fa-star mt-2 lg:mt-7 h-auto text-2xl  text-[#2C3E50] " ></i>
  </div>
   </div>
  
  <div className='form w-3/4 mb-20'>
    <form className='grid grid-cols-1 w-full'>
  <label className="floating-label ">
  <span className='bg-white'>Your Name</span>
  <input type="text" placeholder="Your Name" className="input input-md bg-white w-full px-3 py-4 mb-5  placeholder:text-gray-600 focus:outline-none text-gray-700" style={{boxShadow:"0px 1px rgb(200,200,200,0.4)"}}/>
</label>
  <label className="floating-label ">
  <span>Your Age</span>
  <input type="number" placeholder="Your Age" className=" text-gray-700 input input-md bg-white w-full px-3 py-4 mb-5  placeholder:text-gray-600 focus:outline-none" style={{boxShadow:"0px 1px rgb(200,200,200,0.4)"}}/>
</label>
  <label className="floating-label ">
  <span>Your Email</span>
  <input type="email" placeholder="Your Email" className="input input-md  text-gray-700 bg-white w-full px-3 py-4 mb-5  placeholder:text-gray-600 focus:outline-none" style={{boxShadow:"0px 1px rgb(200,200,200,0.4)"}}/>
</label>
  <label className="floating-label ">
  <span>Your Password</span>
  <input type="password" placeholder="Your Password" className="input input-md  text-gray-700 bg-white w-full px-3 py-4 mb-5  placeholder:text-gray-600 focus:outline-none" style={{boxShadow:"0px 1px rgb(200,200,200,0.4)"}}/>
</label>
    </form>
    <button className='px-3 py-1.5 bg-[#1ABC9C] hover:bg-[#48D1B5] text-white mt-6 rounded-md'>Send Message</button>
  </div>
  

   </div>
    </>
  )
}
