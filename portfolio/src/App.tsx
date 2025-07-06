import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
         */}
      </Routes>
    </BrowserRouter>
  )
}
