import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"

import SignupAndRegister from "./pages/SignupAndRegister"
import Navbar from "./components/Navbar"




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SignupAndRegister />} />
      <Route path="/" element={<Navbar />} >

      </Route>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
