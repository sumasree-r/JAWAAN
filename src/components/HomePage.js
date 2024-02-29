import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import './HomePage.css';

import LifePage from './LifePage';




const TransitionBox = ({ text }) => {
  return <div className="transition-box">{text}</div>;
};

const HomePage = () => {


  const MenuBarComponent = () => {
    const [activeMenu, setActiveMenu] = useState('home');

    



    const handleMenuClick = (menu) => {
      setActiveMenu(menu);
      // Add logic here to perform actions when a menu item is clicked
    };

    return (
      <nav className="menu-bar">
        <a className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>Home</a>
        <a className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>About</a>
        <a className={activeMenu === 'services' ? 'active' : ''} onClick={() => handleMenuClick('services')}>Services</a>
        {/* Dropdown for Products */}
        <div className="dropdown">
          <a className={activeMenu === 'products' ? 'active' : ''} onClick={() => handleMenuClick('products')}>Products</a>
          <div className="dropdown-content">
            <a href="#">Product 1</a>
            <a href="#">Product 2</a>
            <a href="#">Product 3</a>
          </div>
        </div>
        <a className={activeMenu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>Contact</a>
      </nav>
    );
  };

  return (
    <div className="home-page">
      <MenuBarComponent />
      <div className="image-section">
        <img src="./images/Indiarising.jpg" alt="Your Image Alt Text" />
      </div>
      <h1 className="header-title">
        <div className="transition-boxes">
        <TransitionBox text= "LIFE"/>
        <TransitionBox text= "Motor"/>
        <TransitionBox text= "Health"/>
        <TransitionBox text="marine"/>
       
        </div>
      </h1>

      


      {/* Footer */}
      <Footer />

    </div>
  );
};

export default HomePage;


//===================================================================================
// import React, { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import './HomePage.css';

// const HomePage = () => {
//   useEffect(() => {
//     const image = document.querySelector('.image-section img');

//     gsap.from(image, { opacity: 10, duration: 1, delay: 0.5, scale: 0.5, ease: 'power3.out' });

//     const handleMouseEnter = () => {
//       gsap.to(image, { scale: 1.1, duration: 0.3 });
//     };

//     const handleMouseLeave = () => {
//       gsap.to(image, { scale: 1, duration: 0.3 });
//     };

//     image.addEventListener('mouseenter', handleMouseEnter);
//     image.addEventListener('mouseleave', handleMouseLeave);

//     // Cleanup event listeners on component unmount
//     return () => {
//       image.removeEventListener('mouseenter', handleMouseEnter);
//       image.removeEventListener('mouseleave', handleMouseLeave);
//     };
//   }, []);

//   useEffect(() => {
//     const handleWindowLoad = () => {
//       gsap.to('.image-section img', { opacity: 1, duration: 1, scale: 1, ease: 'power3.out' });
//     };

//     window.addEventListener('load', handleWindowLoad);

//     // Cleanup window load event listener on component unmount
//     return () => {
//       window.removeEventListener('load', handleWindowLoad);
//     };
//   }, []);

//   const MenuBarComponent = () => {
//     const [activeMenu, setActiveMenu] = useState('home');

//     const handleMenuClick = (menu) => {
//       setActiveMenu(menu);
//       // Add logic here to perform actions when a menu item is clicked
//     };

//     return (
//       <nav className="menu-bar">
//         <a className={activeMenu === 'home' ? 'active' : ''} onClick={() => handleMenuClick('home')}>Home</a>
//         <a className={activeMenu === 'about' ? 'active' : ''} onClick={() => handleMenuClick('about')}>About</a>
//         <a className={activeMenu === 'services' ? 'active' : ''} onClick={() => handleMenuClick('services')}>Services</a>
//         {/* Dropdown for Products */}
//         <div className="dropdown">
//           <a className={activeMenu === 'products' ? 'active' : ''} onClick={() => handleMenuClick('products')}>Products</a>
//           <div className="dropdown-content">
//             <a href="#">Product 1</a>
//             <a href="#">Product 2</a>
//             <a href="#">Product 3</a>
//           </div>
//         </div>
//         <a className={activeMenu === 'contact' ? 'active' : ''} onClick={() => handleMenuClick('contact')}>Contact</a>
//       </nav>
//     );
//   };

//   return (
//     <div className="home-page">
//       <MenuBarComponent />
//       <div className="image-section">
//         <img src="./images/Indiarising.jpg" alt="Your Image Alt Text" />
//       </div>
//     </div>
//   );
// };

// export default HomePage;



















//=========================================================================================
// src/components/HomePage.js
// import React from 'react';
// import './HomePage.css'; // Import your CSS file for styling

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <nav className="menu-bar">
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Products</li>
//           <li>Contact</li>
          
//         </ul>
//       </nav>
//       <div className="image-section">
//         <img src="./images/Indiarising.jpg" alt="Your Image Alt Text" />
//       </div>
//     </div>
//   );
// };

// export default HomePage;
