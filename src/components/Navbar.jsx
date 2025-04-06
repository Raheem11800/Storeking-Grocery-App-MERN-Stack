import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faList } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import {navbar} from '../components/CSSHelper/Navbar_CSS';

function Navbar() {
  return (
    <>
    {/* Main Navbar Container with fixed height and full width */}
    <div className='h-28 w-full flex justify-between'>

        {/* Browse Category Button (Left Side) */}
        <div className={navbar.category_button}>

          {/* List icon */}
          <FontAwesomeIcon icon={faList} className='pr-2 text-white pl-2' />

          {/* Category text with dropdown icon */}
          <h5 className='font-semibold text-white'>Browse Category <FontAwesomeIcon icon={faAngleDown} /></h5>
        </div>

        {/* Center navigation links */}

        <div className='flex items-center gap-10 mr-[400px]' >

            {/* Home link (Highlighted in green) */}
            <a href="Home" className={navbar.home_link}>Home</a>

            {/* Other nav links */}
            <a href="Offers " className={navbar.offer_link}>Offers</a>
            <a href="Daily Deals" className={navbar.daily_deals}>Daily Deals</a>
            <a href="Flash Sale" className={navbar.flash_sale}>Flash Sale</a>

        </div>

        {/* Right side with support number and cart button */}
        <div className='flex items-center justify-center gap-8'>

          {/* Support Contact Info */}
          <div className='flex items-center mr-5'>
            <FontAwesomeIcon icon={faHeadset} className='text-[#7FBEF1] pr-3 h-[16px] w-[24px]'/>
            <p className='text-[#7FBEF1] text-sm font-bold'>+8801333384628</p>
          </div>

          {/* My Cart Button */}
          <button className={navbar.cart_button}>
            <div className='flex justify-center items-center '>

              {/* Cart icon */}
              <FontAwesomeIcon icon={faBagShopping} className=' text-white' />

              {/* Cart label and item count */}
              <p className={navbar.cart_label}>My Cart</p>
              <p className={navbar.cart_label}>(0)</p>
            </div>
          </button>

        </div>

    </div>

    </>
  )
}

export default Navbar
