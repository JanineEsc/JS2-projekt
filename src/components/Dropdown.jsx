import React, { useState } from 'react';
import { CiShoppingCart } from 'react-icons/ci';
import { ShoppingCart } from './ShoppingCart';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);


  

return (
  <>
    <div className="dropdown-container">
      <button onClick={() => setIsOpen (state => !state)} className="dropdown-btn"> 
        <CiShoppingCart />
        </button>
      {isOpen && (
        <div className="dropdown-content">
          <ShoppingCart setIsOpen={setIsOpen}/>
        </div>
      )}
    </div>
  </>
  )
}
export default Dropdown