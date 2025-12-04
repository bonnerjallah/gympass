import { Outlet } from "react-router-dom"

import navbarstyle from "../styles/navbarstyle.module.css"

const Navbar = () => {
  return (
    <div className={navbarstyle.maincontainer}>
        <h1>Navbar Component</h1>
      
        <Outlet />
    </div>
  )
}

export default Navbar
