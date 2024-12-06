import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./assets/UI/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export default function App() {
  return <RouterProvider router={router} />
}
