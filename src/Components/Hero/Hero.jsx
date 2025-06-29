import avataaars from "../../assets/avataaars.svg"

export default function Hero() {
  return (
    <>
   <div className="s w-full flex flex-col justify-center items-center h-screen">
    <img src={avataaars} alt="avataaars" className="size-60 lg:size-70 mt-8 lg:mt-0"/>
   <h2 className="text-[25px] md:text-[40px] lg:text-5xl uppercase font-bold text-[#fff]   mt-4">start Framework</h2>
  <div className="relative  before:w-[100px] before:h-1 before:bg-white before:absolute before:-left-33 before:top-[65%] after:w-[100px] after:h-1 after:bg-white after:absolute after:-right-33 after:top-[65%]">
    <i className="fa-solid fa-star mt-2 lg:mt-7 h-auto text-2xl  text-white " ></i>
  </div>
  <span className="text-[17px] font-semibold text-gray-100 mt-5 " >Graphic Artist - Web Designer - Illustrator</span>
   </div>

    </>
  )
}
