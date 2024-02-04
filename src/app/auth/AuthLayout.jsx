import { Outlet, useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import { useAuth } from "../../contexts/authContext"
import { useEffect } from "react"
import Footer from "../../components/Footer"


function AuthLayout() {


  const { token, logout } =useAuth()
  const navigate = useNavigate()

  useEffect (() => {
    if(token) {
      navigate("/private")
    }
  },  [token])

  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
export default AuthLayout