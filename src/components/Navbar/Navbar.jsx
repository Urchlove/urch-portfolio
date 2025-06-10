import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/urch6.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faUnderline } from '@fortawesome/free-solid-svg-icons';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  const [menu,setMenu]= useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }
   const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }

  return (
    <div className='navbar'>
        <img className='logo' src={logo} alt="" />
        <FontAwesomeIcon icon={faBars}  className='nav-mob' onClick={openMenu}/>
        <ul ref={menuRef} className='nav-menu'>
          <FontAwesomeIcon icon={faDeleteLeft}  className='nav-close' onClick={closeMenu}/>
            <li><AnchorLink className='anchorlink' href='#home'><p onClick={()=> setMenu("home")}>Home</p></AnchorLink>{menu==="home"?<FontAwesomeIcon icon={faUnderline} />: <></>}</li>
            <li><AnchorLink className='anchorlink' offset={50} href='#About me'><p onClick={()=> setMenu("About me")}>About me</p> </AnchorLink> {menu==="About me"?<FontAwesomeIcon icon={faUnderline} />: <></>}</li>
            <li><AnchorLink className='anchorlink' offset={50} href='#Services'><p onClick={()=> setMenu("Services")}>Services</p> </AnchorLink> {menu==="Services"?<FontAwesomeIcon icon={faUnderline} />: <></>}</li>
            <li><AnchorLink className='anchorlink' offset={50} href='#Portfolio'><p onClick={()=> setMenu("Portfolio")}>Portfolio</p> </AnchorLink>{menu==="Portfolio"?<FontAwesomeIcon icon={faUnderline} />: <></>}</li>
            <li><AnchorLink className='anchorlink' offset={50} href='#Contact'><p onClick={()=> setMenu("Contact")}>Contact</p></AnchorLink> {menu==="Contact"?<FontAwesomeIcon icon={faUnderline} />: <></>}</li>
        </ul>
        <div className='nav-connect'><AnchorLink className='anchorlink' offset={50} href='#Contact'>Connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar