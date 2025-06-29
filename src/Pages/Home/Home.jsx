import Navbar from "../../Components/Navbar/Navbar";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";


export default function Home() {
  return (
    <>
     <div className="bg-[#1ABC9C] ">
      <Navbar/>
       <div className="container h-screen">
        <Hero/>
       </div>
   </div>
         <Footer/>

    </>
   
  )
}
