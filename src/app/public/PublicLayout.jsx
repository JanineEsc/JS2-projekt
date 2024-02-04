import { Link, Outlet } from 'react-router-dom';
import Navbar from "../../components/Navbar";
import Header from '../../components/Header';
import Footer from '../../components/Footer';



function PublicLayout() {
  return (
    <div className='publicLayout-container'>
      <Header />
      <Navbar />
      <div className='outlet-container'>
        <Outlet />
      </div>
      <Footer />       
    </div>
  )
}


export default PublicLayout