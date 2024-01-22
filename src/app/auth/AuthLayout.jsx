import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"

function AuthLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
    </div>
  )
}
export default AuthLayout