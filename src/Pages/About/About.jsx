import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import AboutContent from "../../Components/AboutContent/AboutContent";

export default function About() {
    useEffect(()=>{
        document.title="About"
    })
  return (
    <>
         <div className="bg-[#1ABC9C] ">
          <Navbar/>
           <div className="container h-screen">
            <AboutContent/>
           </div>
       </div>
             <Footer/>
    
        </>
  )
}
