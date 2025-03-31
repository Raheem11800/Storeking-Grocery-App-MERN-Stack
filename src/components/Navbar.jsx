import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faList } from '@fortawesome/free-solid-svg-icons';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
    <div className='h-28 w-full flex justify-between'>

        <div className='flex items-center h-[42px] w-[180px] bg-[#1F1F39] ml-5 mt-7 rounded-xl'>
        <FontAwesomeIcon icon={faList} className='pr-2 text-white pl-2' />
        <h5 className='font-semibold text-white'>Browse Category <FontAwesomeIcon icon={faAngleDown} /></h5>
        </div>

        <div className='flex items-center gap-10 mr-[400px]' >
            <a href="Home" className='text-[#01BE5F] text-primary text-sm font-semibold'>Home</a>
            <a href="Offers " className='text-primary text-sm font-semibold'>Offers</a>
            <a href="Daily Deals" className='text-primary text-sm font-semibold'>Daily Deals</a>
            <a href="Flash Sale" className='text-primary text-sm font-semibold'>Flash Sale</a>
        </div>

        <div className='flex items-center justify-center gap-8'>

        <div className='flex items-center mr-5'>
        <FontAwesomeIcon icon={faHeadset} className='text-[#7FBEF1] pr-3 h-[16px] w-[24px]'/>
        <p className='text-[#7FBEF1] text-sm font-bold'>+8801333384628</p>
        </div>

        <button className='h-[42px] w-[138px] mr-10 bg-[#01BE5F] items-center justify-center flex rounded-xl shadow-[0_5px_15px_rgba(0,0,0,0.3)]'>
          <div className='flex justify-center items-center '>
            <FontAwesomeIcon icon={faBagShopping} className=' text-white' />
            <p className='pl-1 text-white font-semibold text-[100%]'>My Cart</p>
            <p className='pl-1 text-white font-semibold text-[100%]'>(0)</p>
          </div>
        </button>

        </div>


    </div>

    </>
  )
}

export default Navbar