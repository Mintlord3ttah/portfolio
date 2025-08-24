import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Skills from "./pages/Skills"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { AppProviderContext } from "./themeContext/AppProvider"
export default function App() {
  return (
    <BrowserRouter>
      <AppProviderContext>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppProviderContext>
    </BrowserRouter>
  )
}
