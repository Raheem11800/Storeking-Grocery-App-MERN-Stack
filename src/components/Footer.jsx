import React from 'react';
import FooterLogo from '../assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { footer } from './CSSHelper/Footer_CSS';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  // Support section links
  const support = [
    { title: 'Support' },
    { text: 'FAQ' },
    { text: 'Return & Exchange' },
    { text: 'Delivery' },
    { text: 'Contact us' },
  ];

  // Legal section links
  const legal = [
    { title: 'Legal' },
    { text: 'About Us' },
    { text: 'Cookie Policy' },
    { text: 'Terms & Conditions' },
    { text: 'Privacy Policy' },
  ];

  // Contact section with icons
  const contact = [
    { title: 'Contact' },
    { icon: faLocationDot, text: 'House : 25, Road No: 2, Block A,' },
    { text: 'Mirpur-1, Dhaka 1216' },
    { icon: faEnvelope, text: 'info@inilabs.net' },
    { icon: faPhone, text: '+8801333384628' },
  ];

  return (
    <div className="grid grid-cols-4 h-72 w-full bg-[#1F1F39] mt-20">
      {/* Column 1: Logo, newsletter input, subscribe button, and social media icons */}
      <div className="mt-10">
        {/* Company logo */}
        <img
          className="h-8 w-24 ml-8 mb-3"
          src={FooterLogo}
          alt="Footer-Store-Logo"
        />

        {/* Newsletter subscription label */}
        <label className="mb-3 ml-8 font-medium text-white">
          Subscribe to our newsletter
        </label>

        {/* Email input and subscribe button */}
        <div className="h-10 w-80 bg-white rounded-full pl-5 pt-1 mt-5 ml-3 flex items-center">
          <input
            type="email"
            placeholder="Your email address"
            className="outline-none border-none flex-1"
          />
          <button className={footer.input_button}>Subscribe</button>
        </div>

        {/* Social media icons */}
        <div className="flex mt-7 ml-2">
          <div className={footer.facbook_icon}>
            <FontAwesomeIcon icon={faFacebook} />
          </div>
          <div className={footer.Xtwitter_icon}>
            <FontAwesomeIcon icon={faXTwitter} />
          </div>
          <div className={footer.Insta_icon}>
            <FontAwesomeIcon icon={faInstagram} />
          </div>
          <div className={footer.Youtube_icon}>
            <FontAwesomeIcon icon={faYoutube} />
          </div>
        </div>
      </div>

      {/* Columns 2–4: Support, Legal, Contact information */}
      <div className="col-span-3 flex justify-around items-start mt-10">
        <FooterItems data={support} />
        <FooterItems data={legal} />
        <FooterItems data={contact} />
      </div>
    </div>
  );
}

// Component to render each footer column based on provided data
const FooterItems = ({ data }) => {
  return (
    <div>
      {data.map((item, index) => {
        // If the item is a title, render it as a heading
        if (item.title) {
          return (
            <h4 key={index} className={footer.footer_h4}>
              {item.title}
            </h4>
          );
        }
        // If the item has an icon, render icon and text
        else if (item.icon) {
          return (
            <a key={index} className={footer.footer_anchor} href="#">
              <FontAwesomeIcon icon={item.icon} className="text-lg mr-3" />
              {item.text}
            </a>
          );
        }
        // Otherwise, render a simple link with text
        else {
          return (
            <a key={index} className={footer.footer_anchor} href="#">
              {item.text}
            </a>
          );
        }
      })}
    </div>
  );
};

export default Footer;