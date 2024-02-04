import { Link, NavLink } from 'react-router-dom'
import { CiShoppingCart } from "react-icons/ci";
import Dropdown from './Dropdown';
import { useSelector } from 'react-redux';


const Navbar = () => {

  const { totalQuantity } = useSelector(state => state.shoppingCart)

  
  return (
    <div className="nav-container">
      <div className="nav-card">
       <ul>
         <li><NavLink to='/'> Home </NavLink></li>
         <li><NavLink to='/private'> Order History </NavLink></li>
         <li><NavLink to='/about'> About us  </NavLink></li>
         <li><NavLink to='/contact'> Contact Us </NavLink></li>
       </ul>
          <li className='relative-cartlist'>
            { totalQuantity > 0 && <div className='cart-quantity'>
              <p> { totalQuantity} </p>
              </div>}
          </li>
          <Dropdown />
          <button className='logout-btn'>Log out</button>
          </div>
        <hr />
   </div>
  )
}
export default Navbar
                    
             


        
           
        
  



                    


                    
                    


