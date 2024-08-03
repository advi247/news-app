import { useState } from "react";
import Navbar from "../components/Navbar"
import NewsBoard from "../components/NewsBoard"
import Footer from "../components/Footer";
const Headlines = () => {
  const [category, setCategory] = useState("politics");
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
      <Footer/>
    </div>
  )
}

export default Headlines
