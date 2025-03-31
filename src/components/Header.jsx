import React from 'react';
import StoreLogo from '../assets/Store-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faHeart, faUser } from '@fortawesome/free-solid-svg-icons';
import UK_lang from './Flags-svg';
import { header } from './CSSHelper/Header_CSS';

function Header() {
  return (
    <>
      {/* Header */}
      <div className="fixed top-0 left-0 w-full bg-white z-50">
        <div className="flex items-center p-5 justify-between">

          {/* Store Icon */}
          <img className="w-[96px] h-[29.1px]" src={StoreLogo} alt="Store-Logo" />

          {/* Search Input */}
          <div className="relative">
            <FontAwesomeIcon icon={faMagnifyingGlass} className={header.input_icon} />
            <input type="text" placeholder="Search..." className={header.input_placeholder} />
          </div>

          <div className="h-12 flex items-center gap-3">

            {/* Language Section */}
            <div className="relative">
              <UK_lang className="w-6 h-7 absolute left-2 top-2" />
              <h5 className="pl-10 pr-3 py-2 font-semibold">English</h5>
            </div>

            {/* Favourites Section */}
            <div className="flex mt-2">
              <div className={header.fav_icon}>
                <FontAwesomeIcon icon={faHeart} className="text-white text-sm" />
              </div>
              <span className={header.fav}>Favorite</span>
            </div>

            {/* Account Section */}
            <div className="flex mt-2 ml-3">
              <div className={header.acc_icon}>
                <FontAwesomeIcon icon={faUser} className="text-white text-sm" />
              </div>
              <span className={header.acc}>Account</span>
            </div>
          </div>

        </div>

        {/* Divider */}
        <hr className="border-t border-gray-200 my-1" />
      </div>

      {/* Push content down so it doesn’t overlap */}
      <div className="h-[80px]"></div>
    </>
  );
}

export default Header;
