
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Home from './Pages/Home/Home'
import Portfolio from './Pages/Portfolio/Portfolio'
import firstImage from "./assets/images/poert1.png"
import secondImage from "./assets/images/port2.png"
import thirdImage from "./assets/images/port3.png"
import NotFound from './Pages/NotFound/NotFound'
import { createBrowserRouter, RouterProvider } from 'react-router'

function App() {
const Router = createBrowserRouter([
  {
    index:true,
    element:<Home/>
  },
  
  {
    path:"/About",
    element:<About/>
  },
  {
    path:"/Portfolio",
    element:<Portfolio firstImage={firstImage} secondImage={secondImage} thirdImage={thirdImage}/> 
  },
  {
    path:"/Contact",
    element:<Contact/>
  },
  {
    path:"*",
    element:<NotFound/>
  }
])




  return (<>
  <RouterProvider router={Router}>
  
  </RouterProvider>

  </>)
}

export default App



