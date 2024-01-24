import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-card">
       <ul>
         <li><NavLink to='/'> Home </NavLink></li>
         <li><NavLink to='/private'> Order History </NavLink></li>
         <li><NavLink to='/about'> About us  </NavLink></li>
         <li><NavLink to='/contact'> Contact Us </NavLink></li>
       </ul>
     </div>
     <hr />
   </div>
  )
}
export default Navbar
                    
             


        
           
        
  



                    


                    
                    


