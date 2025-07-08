import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Skills from "./pages/Skills"
import About from "./pages/About"
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
         */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
