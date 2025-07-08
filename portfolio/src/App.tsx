import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Contact from "./pages/Contact"
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/projects" element={<Projects />} />
         */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
