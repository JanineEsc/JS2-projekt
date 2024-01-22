import { Link, Outlet } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import Footer from '../../components/Footer';


function PublicLayout() {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />       
    </div>
  )
}

export default PublicLayout