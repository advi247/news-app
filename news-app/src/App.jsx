import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Headlines from './pages/Headlines'
import AboutUs from './pages/AboutUs'
import Blog from './pages/Blog'

export default function App(){
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Top Headlines" element={<Headlines/>} />
        <Route path="/About Us" element={<AboutUs/>} />
        <Route path="/Blog" element={<Blog/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
