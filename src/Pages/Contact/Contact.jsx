import { useEffect } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import ContactContent from "../../Components/ContactContent/contactContent";




export default function Contact() {
  useEffect(()=>{
          document.title="Contact"
      })
    return (
      <>
           <div className="bg-white">
            <Navbar/>
             <div className="container mt-[116px] ">
              <ContactContent/>
             </div>
         </div>
               <Footer/>
      
          </>
    )
}
