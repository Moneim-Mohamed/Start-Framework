import NotFoundImg from "../../assets/404.svg"

export default function NotFound() {
  return (
    <>
    <div className="w-full h-screen flex flex-col justify-center items-center bg-gray-400">
        <img src={NotFoundImg} alt="" className="w-1/4"/>
        <div className=" flex items-center justify-center  gap-2.5 mt-8">
            <i class="fa-solid fa-ban text-xl text-red-600 " ></i>
        <p className="text-xl font-bold text-black ">Page Not Found</p>
         
        </div>
    </div>
    </>
  )
}
