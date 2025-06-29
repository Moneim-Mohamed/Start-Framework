import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import PortfolioContent from "../../Components/PortfolioContent/PortfolioContent";

export default function Portfolio({firstImage,secondImage,thirdImage}) {
   useEffect(()=>{
         document.title="Portfolio"
     })
   return (
     <>
          <div className="bg-white ">
           <Navbar/>
            <div className="container mt-[116px]">
             <PortfolioContent firstImage={firstImage} secondImage={secondImage} thirdImage={thirdImage}/>
            </div>
        </div>
              <Footer/>
         </>
   )
}
