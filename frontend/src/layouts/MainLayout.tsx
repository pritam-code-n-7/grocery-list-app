import NavBar from "@/components/grocery/NavBar"
import { Outlet, useLocation } from "react-router-dom"

const MainLayout = () => {
  const location = useLocation();
  return (
    <div className="space-y-10">
      {location.pathname === '/' && <NavBar />}
      <Outlet />
    </div>  
  )
}

export default MainLayout
