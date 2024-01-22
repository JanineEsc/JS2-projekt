import { Outlet } from "react-router-dom"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function PrivateLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default PrivateLayout