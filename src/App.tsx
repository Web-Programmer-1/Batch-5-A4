import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";


function App() {
  return <div className="max-w-7xl mx-auto ">


    <Navbar></Navbar>
   

   <Outlet></Outlet>
  
   <div className="lg:mt-[170px]">
    <Footer></Footer>
   </div>
  </div>;
}

export default App;
