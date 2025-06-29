

export default function AboutContent() {
  return (
 <>
   <div className=" w-full flex flex-col justify-center items-center h-screen">
   
   <h2 className="text-[25px] md:text-[40px] lg:text-5xl uppercase font-bold text-[#fff]  lg:mt-10 mt-50">about component</h2>
  <div className="relative  before:w-[100px] before:h-1 before:bg-white before:absolute before:-left-33 before:top-[65%] after:w-[100px] after:h-1 after:bg-white after:absolute after:-right-33 after:top-[65%]">
    <i className="fa-solid fa-star mt-2 lg:mt-7 h-auto text-2xl  text-white " ></i>
  </div>
  <div className=" gap-1  grid grid-cols-1 lg:grid-cols-2 lg:gap-6 px-9 lg:px-14 lg:mb-1 ">
      <p className="text-[17px] font-semibold text-gray-100 mt-5  " >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
      <p className="text-[17px] font-semibold text-gray-100 mt-5  " >Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>

  </div>
   </div>

    </>
  )
}
