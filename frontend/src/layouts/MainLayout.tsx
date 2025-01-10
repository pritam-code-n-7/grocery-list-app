import NavBar from "@/components/grocery/NavBar"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="space-y-10">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default MainLayout
