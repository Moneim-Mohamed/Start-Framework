export default function Footer() {
  return (
    <>
    <div className="bg-[#2C3E50] p-10" >
        <div className="container text-white grid lg:grid-cols-3 grid-cols-1 gap-3">
            <div className=" text-center p-4 text-white">
                <h3 className="uppercase lg:text-3xl text-[23px] font-semibold pt-5 mb-2">LOCATION</h3>
                <p className="text-[18px] font-medium mb-4">2215 John Daniel Drive</p>
                <p className="text-[18px] font-medium mb-4">Clark, MO 65243</p>
            </div>
            <div className=" text-center p-4 text-white">
                <h3 className="uppercase lg:text-3xl text-[23px] font-semibold pt-5 mb-2">AROUND THE WEB</h3>
                <div className="flex justify-center items-center">
                    <ul className="flex gap-4">
                        <li><i className="fa-brands fa-facebook text-[20px] p-2.5 border-1 mt-4 border-white rounded-full hover:bg-black transition-colors duration-300"></i></li>
                        <li><i className="fa-brands fa-twitter text-[20px] p-2.5 border-1 mt-4 border-white rounded-full hover:bg-black transition-colors duration-300"></i></li>
                        <li><i className="fa-brands fa-linkedin-in text-[20px] p-2.5 border-1 mt-4 border-white rounded-full hover:bg-black transition-colors duration-300"></i></li>
                        <li><i className="fa-solid fa-globe text-[20px] p-2.5 border-1 mt-4 border-white rounded-full hover:bg-black transition-colors duration-300"></i></li>
                    </ul>
                </div>
            </div>
            <div className="text-center p-4 text-white">
                <h3 className="uppercase lg:text-3xl text-[23px] font-semibold pt-5 mb-2">ABOUT FREELANCER</h3>
                <p className="text-[18px] font-normal mb-4">Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
        </div>
    </div>
    <div className=" text-white p-2.5 bg-[#1A252F]">
                <p className="pt-2.5 mb-4 text-center text-[17px] font-normal">Copyright © Your Website 2021</p>
            </div>
    </>

  )
}
