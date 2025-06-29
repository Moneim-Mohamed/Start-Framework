import { useState } from "react"
import ModalImage from "react-modal-image";
export default function PortfolioContent({firstImage,secondImage,thirdImage}) {
  return (
 <>
   <div className=" w-full flex flex-col justify-start items-center">
   
   <h2 className="text-[25px] md:text-[40px] lg:text-5xl uppercase font-bold text-[#2C3E50] mt-12">portfolio component</h2>
  <div className="relative  before:w-[100px] before:h-1 before:bg-[#2C3E50] before:absolute before:-left-33 before:top-[65%] after:w-[100px] after:h-1 after:bg-[#2C3E50] after:absolute after:-right-33 after:top-[65%]">
    <i className=" fa-solid fa-star mt-7 h-auto text-2xl  text-[#2C3E50] " ></i>
  </div>
  <div className="grid lg:grid-cols-3 md:grid-cols-2  gap-13 my-10">
   <div className="relative rounded-3xl overflow-hidden cursor-pointer group">
  <ModalImage
    small={firstImage}
    large={firstImage}
    alt=""
    className="w-full rounded-3xl"
    hideDownload={true}
    hideZoom={true}
  />
  <div className="pointer-events-none bg-[rgba(26,188,156,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
    <i className="fa-solid fa-plus text-8xl text-white"></i>
  </div>



</div>
    <div className="relative rounded-3xl overflow-hidden cursor-pointer group">
  <ModalImage
    small={secondImage}
    large={secondImage}
    alt=""
    className="w-full rounded-3xl"
    hideDownload={true}
    hideZoom={true}
  />
  <div className="pointer-events-none bg-[rgba(26,188,156,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
    <i className="fa-solid fa-plus text-8xl text-white"></i>
  </div>
</div>
    <div className="relative rounded-3xl overflow-hidden cursor-pointer group">
  <ModalImage
    small={thirdImage}
    large={thirdImage}
    alt=""
    className="w-full rounded-3xl"
    hideDownload={true}
    hideZoom={true}
  />
  <div className="pointer-events-none bg-[rgba(26,188,156,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
    <i className="fa-solid fa-plus text-8xl text-white"></i>
  </div>
</div>
    <div className="relative rounded-3xl overflow-hidden cursor-pointer group">
  <ModalImage
    small={firstImage}
    large={firstImage}
    alt=""
    className="w-full rounded-3xl"
    hideDownload={true}
    hideZoom={true}
  />
  <div className="pointer-events-none bg-[rgba(26,188,156,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
    <i className="fa-solid fa-plus text-8xl text-white"></i>
  </div>
</div>
    <div className="relative rounded-3xl overflow-hidden cursor-pointer group">
  <ModalImage
    small={secondImage}
    large={secondImage}
    alt=""
    className="w-full rounded-3xl"
    hideDownload={true}
    hideZoom={true}
  />
  <div className="pointer-events-none bg-[rgba(26,188,156,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
    <i className="fa-solid fa-plus text-8xl text-white"></i>
  </div>
</div>
    <div className="relative rounded-3xl overflow-hidden cursor-pointer group">
  <ModalImage
    small={thirdImage}
    large={thirdImage}
    alt=""
    className="w-full rounded-3xl"
    hideDownload={true}
    hideZoom={true}
  />
  <div className="pointer-events-none bg-[rgba(26,188,156,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center z-10">
    <i className="fa-solid fa-plus text-8xl text-white"></i>
  </div>
</div>


  </div>
   </div>

    </>
  )
}
//  <div className="overLay bg-[rgba(26,188,156,0.8)] opacity-0 hover:opacity-100 transition-opacity duration-500 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center">
//             <i className="fa-solid fa-plus text-8xl text-white"></i>
//         </div>